const React = require('react');
const Layout = require('../Layout');

module.exports = function Main( {user}) {
  // console.log('allChannels', allChannels);
  return (
    <Layout user={user}>
      <div className="d-flex justify-content-around bothSearchBlocks" style={{ padding: '20px 0px 20px', paddingBottom: '32px', background: 'rgb(25, 133, 161)' }}>
        <div className="text-center d-flex flex-column leftBlockSearch" style={{ marginRight: '0px', width: '50%' }}>
          <h1 className="fs-4">Find cocktail by name</h1>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card m-auto" style={{ maxWidth: '850px' }}>
                <div
                  className="card-body"
                  style={{
                    paddingBottom: '0px', marginTop: '0px', paddingTop: '0px', marginRight: '-16px',
                  }}
                >
                  <form className="d-flex align-items-center">
                    <i className="fas fa-search d-none d-sm-block h4 text-body m-0" />
                    <input className="form-control form-control-lg flex-shrink-1 form-control-borderless" type="search" placeholder="Search cocktail" name="searchbar" />
                    <button className="btn btn-success btn-lg" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column" style={{ width: '50%' }}>
          <h1 className="fs-4 text-center">Find cocktails by ingredient</h1>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card m-auto" style={{ maxWidth: '850px' }}>
                <div
                  className="card-body"
                  style={{
                    paddingBottom: '0px', marginTop: '0px', paddingTop: '0px', marginRight: '-16px',
                  }}
                >
                  <form className="d-flex align-items-center">
                    <i className="fas fa-search d-none d-sm-block h4 text-body m-0" />
                    <input className="form-control form-control-lg flex-shrink-1 form-control-borderless" type="search" placeholder="Search cocktail" name="searchbar" />
                    <button className="btn btn-success btn-lg" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-around flex-wrap"
        style={{
          paddingTop: '44px', position: 'absolute', width: '100%', background: 'rgb(220, 220, 221)',
        }}
      >
        <div className="text-center" style={{ width: '30%' }}>
          <div>
            <img src="https://ru.inshaker.com/uploads/cocktail/hires/1098/icon_1537863520-Aperol_spritz-HiRes.jpg" style={{ width: '150px', height: '450px' }} alt="" />
          </div>
          <label className="form-label" style={{ fontSize: '30px', color: 'var(--bs-danger)', fontStyle: 'italic' }}>Label</label>
        </div>
      </div>

    </Layout>
  );
};
