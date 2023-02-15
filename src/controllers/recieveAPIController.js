// const Error = require('../views/Error');
// const { Channel } = require('../../db/models');

exports.recieveAPIController = async (req, res) => {
  try {
    const checkKey = req.body.drinks.map((el) => Object.keys(el).filter((key) => el[key] !== null));
    const checkValue = req.body.drinks.map((el) => Object.values(el).filter((key) => key !== null));

    checkKey.join(',').replaceAll(',', ' ,').split(' ,');

    // console.log(checkKey);

    const allCocktails = checkKey.reduce((accum, el, i) => {
      const obj = {};
      el.forEach((elem, index) => {
        obj[elem] = checkValue[i][index];
      });
      accum.push(obj); return accum;
    }, []);

    console.log(allCocktails);

    

    // const sortCocktails = [];
    // data.forEach((el) => {
    //   const cocktail = {};
    //   cocktail.cocktail_name = el.strDrink;
    //   cocktail.cocktail_info = el.strInstructions;
    //   cocktail.craft = false;
    //   sortCocktails.push(cocktail);
    //   console.log(cocktail)
    // });

    // console.log(sortCocktails);

    // console.log('allCocktails', allCocktails);
  } catch (error) {
    //     // console.log(error);
    //     // render(Error, {
    //     //   message: 'Не удалось войти на главную страницу.',
    //     //   error: {},
    //     // }, res);
  }
};
