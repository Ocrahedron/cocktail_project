const React = require('react');
const Layout = require('../Layout');

module.exports = function CocktailCard() {
  return (
    <Layout>
      <div className="d-flex flex-row flex-grow-0 flex-shrink-0 justify-content-start" style={{ height: '1500px', background: 'rgb(220, 220, 221)' }}>
        <div className="text-center d-inline-flex flex-column" style={{ width: '30%', padding: '20px 0px' }}>
          <div><img src="https://barrister-gin.com/upload/medialibrary/18f/18f844898bb0399243bbfe28d6a59af1.jpg" style={{ width: '200px', height: '150px', margin: '10px' }} alt="" /></div>
          <div><img src="https://barrister-gin.com/upload/medialibrary/18f/18f844898bb0399243bbfe28d6a59af1.jpg" style={{ width: '200px', height: '150px', margin: '10px' }} alt="" /></div>
        </div>
        <div className="d-flex justify-content-around" style={{ paddingTop: '44px', position: 'relative', width: '100%' }}>
          <div className="d-flex flex-column align-items-center" style={{ width: '80%' }}>
            <div style={{ width: '50%', height: '30%' }}>
              <img src="https://ru.inshaker.com/uploads/cocktail/hires/55/icon_1629728461-%D0%9D%D0%B5%D0%B3%D1%80%D0%BE%D0%BD%D0%B8.jpg" style={{ width: '100%' }} alt="" />

            </div>
            <label
              className="form-label"
              style={{
                fontSize: '30px', color: 'var(--bs-danger)', fontStyle: 'italic', paddingTop: '20px',
              }}
            >
              Label
            </label>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                width: '70%', height: '75px', margin: '15%', padding: '10px', background: 'transparent', border: '3px solid var(--bs-teal)', color: 'var(--bs-code-color)', fontSize: '25px', marginTop: '26px', marginBottom: '62px',
              }}
            >
              Add to favourite
            </button>
            <label className="form-label" style={{ fontSize: '30px', color: 'var(--bs-danger)', fontStyle: 'italic' }}>Information about the cocktail</label>
            <textarea style={{
              width: '100%', background: 'rgb(197, 195, 198)', borderRadius: '20px', height: '300px', borderWidth: '0px',
            }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
