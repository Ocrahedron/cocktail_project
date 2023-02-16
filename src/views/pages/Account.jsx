const React = require('react');
const Layout = require('../Layout');

module.exports = function Account({ user, allFavourites }) {
  return (
    <Layout user={user}>

      <div id="mainAccountContainer" className="d-flex flex-row flex-grow-0 flex-shrink-0 justify-content-start" style={{ background: 'rgb(220, 220, 221)' }}>
        <div id="contanerButton" className="text-center d-inline-flex flex-column" style={{ width: '30%' }}>
          <button
            name="favourite"
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px',
            }}
          >
            Favourite
          </button>
          <button
            name="ingredients"
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px', marginTop: '1px', marginBottom: '-3px',
            }}
          >
            Ingredients
          </button>

          <button
            name="create"
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px',
            }}
          >
            Create
          </button>

          <button
            name="createdByYou"
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px', marginTop: '1px',
            }}
          >
            Created by you
          </button>
        </div>
        <div id="containerCocktails" style={{ paddingTop: '44px', position: 'relative', width: '100%' }}>
          {allFavourites && allFavourites.map((el) => (
            <div className="text-center">
              <div>
                <img src={`${el.url}`} style={{ width: '100%' }} alt="" />
              </div>
              <label className="form-label" style={{ fontSize: '30px', color: 'var(--bs-danger)', fontStyle: 'italic' }}>
                {el.cocktail_name}
              </label>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
};
