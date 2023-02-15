// const form = document.getElementsByName('form')[0];
const nav = document.getElementById('main-nav');
const registrationStyle = document.getElementById('registrationStyle');
const loginStyle = document.getElementById('loginStyle');
const registrationForm = document.getElementById('buttonRegistration');
const loginForm = document.getElementById('buttonLogin');
// console.log(nav)

nav.addEventListener('click', async (event) => {
  // event.preventDefault();

  const { id } = event.target;

  if (id === 'registration') {
    registrationStyle.style.zIndex = 2000;
  }
  if (id === 'login') {
    loginStyle.style.zIndex = 2000;
  }
});

registrationForm.addEventListener('click', async (event) => {
  // event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: registrationForm.name.value,
        email: registrationForm.email.value,
        password: registrationForm.password.value,
      }),
    });
    const responseJSON = await response.json();

    if (responseJSON.isRegistratedSuccessful) {
      registrationStyle.style.zIndex = -2;
      nav.innerHTML = `
      <ul class="navbar-nav nav-fill w-100">
                    <li class="fs-3 nav-item"><a class="nav-link" href="/account">Account</a></li>
                    <li class="nav-item"><a class="fs-3 nav-link" href="/home">Home</a></li>
                    <li class="nav-item"><a class="fs-3 nav-link" href="/logout">Logout</a></li>
                  </ul>
      `;
    } else {
      window.alert(responseJSON.errorMessage);
    }
  }
});

loginForm.addEventListener('click', async (event) => {
  // event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: loginForm.name.value,
        email: loginForm.email.value,
        password: loginForm.password.value,
      }),
    });
    const responseJSON = await response.json();
    if (responseJSON.isLoginSuccessful) {
      loginStyle.style.zIndex = -2;
      nav.innerHTML = `
      <ul class="navbar-nav nav-fill w-100">
                    <li class="fs-3 nav-item"><a class="nav-link" href="/account">Account</a></li>
                    <li class="nav-item"><a class="fs-3 nav-link" href="/home">Home</a></li>
                    <li class="nav-item"><a class="fs-3 nav-link" href="/logout">Logout</a></li>
                  </ul>
      `;
    } else {
      window.alert(responseJSON.errorMessage);
    }
  }
});

