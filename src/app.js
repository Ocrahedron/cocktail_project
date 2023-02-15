require('@babel/register');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const render = require('./utils/render');

const mainPageRouter = require('./routers/mainPageRouter');
const registrationRouter = require('./routers/registrationRouter');
const loginRouter = require('./routers/loginRouter');
const logoutRouter = require('./routers/logoutRouter');
const recieveAPIRouter = require('./routers/recieveAPIRouter');
const Error = require('./views/Error');

const app = express();

const sessionConfig = {
  name: 'kyk', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.SESSION_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false, // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  httpOnly: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
};

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);
  res.locals.user = req.session?.user;
  next();
});

app.use('/', mainPageRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/recieveAPI', recieveAPIRouter);

app.use((req, res, next) => {
  const error = createError(404, 'Error from app.js page.');
  next(error);
});

// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use((err, req, res, next) => {
  // Получаем текущий ражим работы приложения.
  const appMode = req.app.get('env');
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку.
  // В противно случае отправим пустой объект.
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные,
  // доступные на сервере глобально, но только в рамках одного HTTP - запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть.
  // В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.status(err.status || 500);
  // Ренедрим React-компонент Error и отправляем его на клиент в качестве ответа.
  render(Error, {}, res);
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
