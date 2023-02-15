const React = require('react');

module.exports = function Layout({ children, user }) {
  
  return (
    <html lang="en">

      <head>
        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" /> */}
        <meta charSet="UTF-8" />
        <script defer src="/js/application.js" />
        <script defer src="/js/recieveAPI.js" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Cocktail-Project</title>
        <link rel="stylesheet" href="/stylesheets/bootstrap.min.css" />
        <link rel="stylesheet" href="/stylesheets/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/stylesheets/login-form-styles.css" />
        <link rel="stylesheet" href="/stylesheets/login-form.css" />
        <link rel="stylesheet" href="/stylesheets/Login-with-overlay-image.css" />
        <link rel="stylesheet" href="/stylesheets/navbar-center-Joce-styles.css" />
        <link rel="stylesheet" href="/stylesheets/navbar-center-Joce.css" />
        <link rel="stylesheet" href="/stylesheets/Rowfcards-styles.css" />
        <link rel="stylesheet" href="/stylesheets/Search-Input-Responsive-with-Icon.css" />
        <link rel="stylesheet" href="/stylesheets/select2.css" />
        <link rel="stylesheet" href="/stylesheets/styles.css" />

        <script src="/js/style/bootstrap.min.js" />
        <script src="/js/style/select2-anchor.min.js" />
        <script src="/js/style/select2-placeholders.jquery.min.js" />
        <script src="/js/style/select2-placeholders.js" />
        <script src="/js/style/select2-prettify.min.js" />
        <script src="/js/style/select2-select2.full.js" />
        <script src="/js/style/select2-zcontent.js" />
        <script src="/js/style/select2.js" />
      </head>

      <body style={{ width: '100%', background: 'rgb(220, 220, 221)' }}>
        <div style={{ width: '100%', color: 'rgb(220, 220, 221)' }}>
          <div>
            <video width="100%" height="315" controls="" autoPlay="" loop="">
              <track src="/pictures/barVideo.mp4" kind="captions" srcLang="en" label="english_captions" />
            </video>
          </div>
          <div>
            <div className="navbar navbar-expand-md navbar-dark bg-dark">
              <div id="main-nav" className="navbar-collapse collapse">
                {/* { user ? ( */}
                  <ul className="navbar-nav nav-fill w-100">
                    <li className="fs-3 nav-item"><a className="nav-link" href="#Login">Login</a></li>
                    <li className="nav-item"><a className="fs-3 nav-link" href="#Home">Home</a></li>
                    <li className="nav-item"><a className="fs-3 nav-link" href="#Registration">Registration</a></li>
                  </ul>
                {/* // ) : (
                //   <ul className="navbar-nav nav-fill w-100">
                //     <li className="fs-3 nav-item"><a className="nav-link" href="#Account">Account</a></li>
                //     <li className="nav-item"><a className="fs-3 nav-link" href="#Home">Home</a></li>
                //     <li className="nav-item"><a className="fs-3 nav-link" href="#Logout">Logout</a></li>
                //   </ul>
                // )} */}
              </div>
            </div>
            {/* <div className="d-flex justify-content-around bothSearchBlocks" style={{ padding: '20px 0px 20px', paddingBottom: '32px', background: 'rgb(25, 133, 161)' }}>
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
            </div> */}
          </div>
          <div>
            {/* <div
              className="d-flex justify-content-around flex-wrap"
              style={{
                paddingTop: '44px', position: 'absolute', width: '100%', background: 'rgb(220, 220, 221)',
              }}
            >

              <div className="text-center" style={{ width: '30%' }}>
                <div>
                  <img src="https://ru.inshaker.com/uploads/cocktail/hires/1098/icon_1537863520-Aperol_spritz-HiRes.jpg" style={{ width: '150px', height: '400px' }} alt="" />
                </div>
                <label className="form-label" style={{ fontSize: '30px', color: 'var(--bs-danger)', fontStyle: 'italic' }}>Label</label>
              </div>
            </div> */}
            <div className="container full-height" style={{ width: '100%', position: 'absolute' }}>
              <div className="row flex center v-center full-height">
                <div className="col-8 col-sm-4">
                  <div className="form-box" style={{ background: 'rgb(25, 133, 161)', marginTop: '50px' }}>
                    <form>
                      <fieldset>
                        <legend>Registration</legend>
                        <img id="avatar" className="avatar round" src="" alt="" />
                        <input className="form-control" type="email" id="username" name="username" placeholder="username" />
                        <input className="form-control" type="email" id="username-1" name="username" placeholder="email" />
                        <input className="form-control" type="password" id="password" name="password" placeholder="password" />
                        <button className="btn btn-primary d-block w-100" type="button">REGISTRATION</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container full-height" style={{ width: '100%', position: 'absolute' }}>
              <div className="row flex center v-center full-height">
                <div className="col-8 col-sm-4">
                  <div className="form-box" style={{ background: 'rgb(25, 133, 161)', marginTop: '50px' }}>
                    <form>
                      <fieldset>
                        <legend>Sign in</legend>
                        <img id="avatar-1" className="avatar round" src="" alt="" />
                        <input className="form-control" type="email" id="username-2" name="username" placeholder="username" />
                        <input className="form-control" type="email" id="username-3" name="username" placeholder="email" />
                        <input className="form-control" type="password" id="password-1" name="password" placeholder="password" />
                        <button className="btn btn-primary d-block w-100" type="button">LOGIN</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>

    </html>
  );
};
