const React = require('react');
const Layout = require('../Layout');

module.exports = function CreateCocktail() {
  return (
    <Layout>

      <div className="d-flex flex-row flex-grow-0 flex-shrink-0 justify-content-start" style={{ height: '1500px', background: 'rgb(220, 220, 221)' }}>
        <div className="text-center d-inline-flex flex-column" style={{ width: '30%' }}>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px',
            }}
          >
            Favourite
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px', marginTop: '1px', marginBottom: '-3px',
            }}
          >
            Ingredients
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px',
            }}
          >
            Create
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              width: '200px', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px, solid var(--bs-teal),color: var(--bs-code-color)', fontSize: '25px', marginTop: '1px',
            }}
          >
            Created by you
          </button>
        </div>
      </div>

      <div
        className="d-flex justify-content-around"
        style={{
          paddingTop: '44px', position: 'relative', width: '100%', height: '50%',
        }}
      >
        <div id="createBox" className="form-box" style={{ background: 'rgb(25, 133, 161)', marginTop: '50px', width: '80%' }}>
          <form style={{ margin: '0px', paddingTop: '80px' }}>
            <fieldset>
              <h1 style={{
                textAlign: 'center', paddingTop: '0px', paddingBottom: '0px', marginTop: '-50px', marginBottom: '52px',
              }}
              >
                Create your cocktail
              </h1>
              <input className="form-control" type="text" id="newName" name="newName" placeholder="Cocktail name" style={{ width: '300px', textAlign: 'left' }} />
              <input className="form-control" type="text" id="newIngredients" name="newIngredients" placeholder="Ingredients" style={{ marginTop: '52px' }} />
              <input className="form-control" type="text" id="newInfo" name="newInfo" placeholder="Info about new cocktail" style={{ width: '50%', height: '200px', marginTop: '58px' }} />
              <input className="form-control" type="file" style={{ width: '40%' }} />
              <button className="btn btn-primary d-block w-100" type="button">CREATE</button>
            </fieldset>
          </form>
        </div>
      </div>

    </Layout>
  );
};
