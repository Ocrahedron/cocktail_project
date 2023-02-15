const React = require('react');
const Layout = require('../Layout');

module.exports = function Account() {
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
        <div className="d-flex justify-content-around flex-wrap" style={{ paddingTop: '44px', position: 'relative', width: '100%' }}>
          <div className="text-center" style={{ width: '30%', height: '500px' }}>
            <div>
              <img src="https://ru.inshaker.com/uploads/cocktail/hires/1098/icon_1537863520-Aperol_spritz-HiRes.jpg" style={{ width: '150px', height: '400px' }} alt="" />
            </div>
            <label className="form-label" style={{ fontSize: '30px', color: 'var(--bs-danger)', fontStyle: 'italic' }}>Label</label>
          </div>
        </div>
      </div>

    </Layout>
  );
};
