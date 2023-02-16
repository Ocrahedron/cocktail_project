// const form = document.getElementsByName('form')[0];
const nav = document.getElementById('main-nav');
const registrationStyle = document.getElementById('registrationStyle');
const loginStyle = document.getElementById('loginStyle');
const registrationForm = document.getElementById('buttonRegistration');
const loginForm = document.getElementById('buttonLogin');
const { findByName } = window.document.forms;
const { findByIngredient, formAddToFavourite } = window.document.forms;
const cardsContainer = document.getElementById('cardsContainer');
// const mainContainer = document.querySelector('#mainContainer');

nav?.addEventListener('click', async (event) => {
  // event.preventDefault();
  try {
    const { id } = event.target;
    if (id === 'registration') {
      registrationStyle.style.zIndex = 2000;
    }
    if (id === 'login') {
      loginStyle.style.zIndex = 2000;
    }
  } catch (error) {
    console.log(error);
  }
});

registrationForm?.addEventListener('click', async (event) => {
  // event.preventDefault();
  try {
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
  } catch (error) {
    console.log(error);
  }
});

loginForm?.addEventListener('click', async (event) => {
  // event.preventDefault();
  try {
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
  } catch (error) {
    console.log(error);
  }
});

// Фетч на поиск коктейля по имени
findByName?.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const responseAPI = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${event.target.searchBarByName.value}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '666545f12cmshc89c049e8c16970p1363dcjsn0e90d3e422dd',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
      },
    });
    const result = await responseAPI.json();

    cardsContainer.innerHTML = '';
    result.drinks.forEach((cocktail) => {
      const card = document.createElement('div');
      card.classList.add('text-center');
      card.style.width = '30%';
      card.innerHTML = `
  <div data-name=${cocktail.strDrink} data-id=${cocktail.strDrinkThumb}>
    <img title='newCardCreate' src=${cocktail.strDrinkThumb} style='width: 300px'; alt=${cocktail.strDrink} />
  </div>
  <label class="form-label" style='font-size: 30px; color: var(--bs-danger); font-style: italic'>${cocktail.strDrink}</label>
  `;
      cardsContainer.appendChild(card);
    });
    event.target.searchBarByName.value = '';
  } catch (error) {
    console.log(error);
    window.alert('Mistake in finding by name');
  }
});

// Фетч на поиск коктейля по ингредиенту

findByIngredient?.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();

    const responseAPI = await fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${event.target.searchBarByIngredient.value}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '666545f12cmshc89c049e8c16970p1363dcjsn0e90d3e422dd',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
      },
    });
    const result = await responseAPI.json();

    cardsContainer.innerHTML = '';
    result.drinks.forEach((cocktail, index) => {
      const card = document.createElement('div');
      card.classList.add('text-center');
      card.style.width = '30%';
      card.innerHTML = `
  <div style='display:none' data-name=${cocktail.strDrink} data-id=${cocktail.strDrinkThumb} >
  <img title='newCardCreate' src=${cocktail.strDrinkThumb} style='width: 300px'; alt=${cocktail.strDrink}; title=${cocktail.strDrink} />
  </div>
  <label class="form-label" style='font-size: 30px; color: var(--bs-danger); font-style: italic'>${cocktail.strDrink}</label>
  `;
      cardsContainer.appendChild(card);
    });
    event.target.searchBarByIngredient.value = '';
  } catch (error) {
    console.log(error);
    window.alert('Mistake in finding by ingredient');
  }
});

// фетч карточка на главной странице (из запроса API)
cardsContainer?.addEventListener('click', async (event) => {
  if (event.target.title === 'newCardCreate') {
    try {
      const response = await fetch('/showCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cocktail_name: event.target.alt,
          url: event.target.src,
        }),
      });
      const result = await response.json();

      if (result.isCreateSuccessful) {
        cardsContainer.innerHTML = '';
        cardsContainer.classList = 'd-flex flex-row flex-grow-0 flex-shrink-0 justify-content-start';
        cardsContainer.style.height = '1500px';
        cardsContainer.style.background = 'rgb(220, 220, 221)';

        const leftColoumn = document.createElement('div');
        leftColoumn.classList = 'text-center d-inline-flex flex-column';
        leftColoumn.style.width = '30%';
        leftColoumn.style.padding = '20px 0px';

        result.allIngrs.forEach((el) => {
          const onePicture = document.createElement('div');

          onePicture.innerHTML = `
        <img src=${el.url} style="width: 200px;margin: 20px;">
        `;
          leftColoumn.appendChild(onePicture);
        });
        cardsContainer.appendChild(leftColoumn);

        const rightColoumn = document.createElement('div');
        rightColoumn.className = 'd-flex justify-content-around';
        rightColoumn.style.paddingTop = '44px';
        rightColoumn.style.position = 'relative';
        rightColoumn.style.width = '100%';

        rightColoumn.innerHTML = `
                <form data-message=${result.findCocktail.id} name='favourite' class="d-flex flex-column align-items-center" style="width: 80%;">
                    <label name =${result.findCocktail.cocktail_info} class="form-label" style="font-size: 30px;color: var(--bs-danger);font-style: italic;padding-top: 20px;">${result.findCocktail.cocktail_name}</label>
                      <div style="width: 50%;height: 30%;">
                      <img src=${result.findCocktail.url} style="width: 100%;">
                      </div>
                      <button id='${result.findCocktail.id}'  name='butAddToFavourite' class="btn btn-primary" type="button" style="width: 70%;height: 75px;margin: 15%;padding: 10px;background: transparent;border: 3px solid var(--bs-teal);color: var(--bs-code-color);font-size: 25px;margin-top: 26px;margin-bottom: 62px;">Add to favourite</button>
                      <label class="form-label" style="font-size: 30px;color: var(--bs-danger);font-style: italic;">Information about the cocktail</label>
                      <textarea style="width: 100%;background: rgb(197, 195, 198);border-radius: 20px;height: 300px;border-width: 0px;">${result.findCocktail.cocktail_info}</textarea>
                 </form>
      `;
        cardsContainer.appendChild(rightColoumn);
      }
    } catch (error) {
      console.log(error);
      window.alert('Error to show cocktail card');
    }
  }

  if (event.target.name === 'butAddToFavourite') {
    console.log(event.target.id);
    // const cocktailID = window.document.querySelector('[data-message]');

    const response = await fetch('/addToFavourite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cocktail_id: event.target.id,
      }),
    });
    const result = await response.json();
    if (result.isAddSuccessful) {
      window.location.replace('/');
    }
  }

  if (event.target.title === 'cardDB') {
    console.log(event.target.id);
    console.log(event.target.src);
    console.log(event.target.alt);
    event.preventDefault();

    const response = await fetch('/showCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cocktail_name: event.target.alt,
        url: event.target.src,
      }),
    });
    const result = await response.json();
    
    cardsContainer.innerHTML = '';
    cardsContainer.classList = 'd-flex flex-row flex-grow-0 flex-shrink-0 justify-content-start';
    cardsContainer.style.height = '1500px';
    cardsContainer.style.background = 'rgb(220, 220, 221)';

    const leftColoumn = document.createElement('div');
    leftColoumn.classList = 'text-center d-inline-flex flex-column';
    leftColoumn.style.width = '30%';
    leftColoumn.style.padding = '20px 0px';

    result.allIngrs.forEach((el) => {
      const onePicture = document.createElement('div');

      onePicture.innerHTML = `
    <img src=${el.url} style="width: 200px;margin: 20px;">
    `;
      leftColoumn.appendChild(onePicture);
    });
    cardsContainer.appendChild(leftColoumn);

    const rightColoumn = document.createElement('div');
    rightColoumn.className = 'd-flex justify-content-around';
    rightColoumn.style.paddingTop = '44px';
    rightColoumn.style.position = 'relative';
    rightColoumn.style.width = '100%';

    rightColoumn.innerHTML = `
            <form data-message=${result.findCocktail.id} name='favourite' class="d-flex flex-column align-items-center" style="width: 80%;">
                <label name =${result.findCocktail.cocktail_info} class="form-label" style="font-size: 30px;color: var(--bs-danger);font-style: italic;padding-top: 20px;">${result.findCocktail.cocktail_name}</label>
                  <div style="width: 50%;height: 30%;">
                  <img src=${result.findCocktail.url} style="width: 100%;">
                  </div>
                  <button id='${result.findCocktail.id}'  name='butAddToFavourite' class="btn btn-primary" type="button" style="width: 70%;height: 75px;margin: 15%;padding: 10px;background: transparent;border: 3px solid var(--bs-teal);color: var(--bs-code-color);font-size: 25px;margin-top: 26px;margin-bottom: 62px;">Add to favourite</button>
                  <label class="form-label" style="font-size: 30px;color: var(--bs-danger);font-style: italic;">Information about the cocktail</label>
                  <textarea style="width: 100%;background: rgb(197, 195, 198);border-radius: 20px;height: 300px;border-width: 0px;">${result.findCocktail.cocktail_info}</textarea>
             </form>
  `;
    cardsContainer.appendChild(rightColoumn);
  }
});
