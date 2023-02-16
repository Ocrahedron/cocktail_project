const mainAccountContainer = document.querySelector('#mainAccountContainer');
const containerCocktails = document.querySelector('#containerCocktails');
// const { createCocktailForm } = window.document.forms;

mainAccountContainer?.addEventListener('click', async (event) => {
  // event.preventDefault();

  if (event.target.name === 'favourite') {
    try {
      const response = await fetch('/account/favourite', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(),
      });
      const result = await response.json();
      containerCocktails.innerHTML = '';

      result.allFavourites.forEach((el) => {
        const card = document.createElement('div');
        card.className = 'text-center';
        const onePicture = document.createElement('div');
        onePicture.innerHTML = `
        <img src=${el.url} style="width: 100%" alt=${el.cocktail_name} />
        `;
        card.appendChild(onePicture);

        const oneLabel = document.createElement('label');
        oneLabel.className = 'form-label';
        oneLabel.style.fontSize = '30px';
        oneLabel.style.color = 'var(--bs-danger)';
        oneLabel.style.fontStyle = 'italic';
        oneLabel.innerHTML = `${el.cocktail_name}`;
        card.appendChild(oneLabel);
        containerCocktails.appendChild(card);
      });
    } catch (error) {
      console.log(error);
    }
  }
  if (event.target.name === 'ingredients') {
    const response = await fetch('/account/ingredients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    });
  }

  if (event.target.name === 'create') {
    containerCocktails.style.display = 'flex';
    containerCocktails.style.justifyContent = 'center';
    containerCocktails.innerHTML = `
    <div class="form-box" style='background-color: rgb(25, 133, 161); margin-top: 50px; width: 60%; height: 700px'>
      <form name="createCocktailForm" style='margin: 0px; padding-top: 80px' }}>
            
              <h1 style=
                'text-align: center; padding-top: 0px; padding-bottom: 0px; margin-top: -50px; margin-bottom: 52px',
              }}
              >
                Create your cocktail
              </h1>
              <input class="form-control" type="text" id="newName" name="newName" placeholder="Cocktail name" style='width: 300px; textAlign: left' />
              <input class="form-control" type="text" id="newIngredients" name="newIngredients" placeholder="Ingredients" style='margin-top: 52px' />
              <input class="form-control" type="text" id="newInfo" name="newInfo" placeholder="Info about new cocktail" style='width: 50%; height: 200px; margin-top: 58px' />
              <input class="form-control" type="text" id="newPhoto" name="newPhoto" placeholder="Photo" style='margin-top: 52px' />
              <button name='createCocktailButton' class="btn btn-primary d-block w-100" type="submit" style='margin-top: 40px'>CREATE</button>
           
        </form>
     </div>     
    `;
  }
  if (event.target.name === 'createdByYou') {
    const response = await fetch('/account/createdByYou', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    });
    const result = await response.json();
    containerCocktails.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'text-center';
    result.allCreatedByYou.forEach((el) => {
      const onePicture = document.createElement('div');
      onePicture.innerHTML = `
      <img src=${el.url} style="width: 100%" alt="" />
      `;
      card.appendChild(onePicture);

      const oneLabel = document.createElement('label');
      oneLabel.className = 'form-label';
      oneLabel.style.fontSize = '30px';
      oneLabel.style.color = 'var(--bs-danger)';
      oneLabel.style.fontStyle = 'italic';
      oneLabel.innerHTML = `${el.cocktail_name}`;
      card.appendChild(oneLabel);
    });
    containerCocktails.appendChild(card);
  }
});

mainAccountContainer?.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    if (event.target.name === 'createCocktailButton') {
      console.log(event.target.attributes.class.ownerDocument.createCocktailForm.newName.value);
      const response = await fetch('/account/create/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cocktail_name: event.target.attributes.class.ownerDocument.createCocktailForm.newName.value,
          cocktail_info: event.target.attributes.class.ownerDocument.createCocktailForm.newInfo.value,
          craft: true,
          url: event.target.attributes.class.ownerDocument.createCocktailForm.newPhoto.value,
          ingredient_name: event.target.attributes.class.ownerDocument.createCocktailForm.newIngredients.value,
        }),
      });
      const result = await response.json();

      if (result.isCreateSuccessful) {
        window.location.replace('/account');
      }
    }
  } catch (error) {
    console.log(error);
  }
});
// event.target.attributes.class.ownerDocument
