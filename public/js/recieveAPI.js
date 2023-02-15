// async function recieveCocktails() {
//   const responseAPI = await fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '666545f12cmshc89c049e8c16970p1363dcjsn0e90d3e422dd',
//       'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
//     },
//   });

//   const resultAPI = await responseAPI.json();

//   const responseBack = await fetch('/recieveAPI', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       drinks: resultAPI.drinks,
//     }),
//   });

  // recieveCocktails();
