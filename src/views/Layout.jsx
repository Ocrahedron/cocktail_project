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
        <script defer src="/js/account.js" />

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
        {/* <script src="/js/style/select2-placeholders.jquery.min.js" /> */}
        <script src="/js/style/select2-placeholders.js" />
        <script src="/js/style/select2-prettify.min.js" />
        {/* <script src="/js/style/select2-select2.full.js" /> */}
        {/* <script src="/js/style/select2-zcontent.js" /> */}
        {/* <script src="/js/style/select2.js" /> */}
      </head>

      <body style={{ width: '100%', background: 'rgb(220, 220, 221)' }}>
        <div style={{ width: '100%', color: 'rgb(220, 220, 221)' }}>
          {/* <div>
            <video width="100%" height="315" controls="" autoPlay loop>
              <source src="/pictures/barVideo.mp4" type="video/mp4" />
            </video>
          </div> */}
          <div>
            <div className="navbar navbar-expand-md navbar-dark bg-dark">
              <div id="main-nav" className="navbar-collapse collapse">
                { !user ? (
                  <ul className="navbar-nav nav-fill w-100">
                    <li id="login" className="fs-3 nav-item nav-link">Login</li>
                    <li className="nav-item"><a className="fs-3 nav-link" href="/">Home</a></li>
                    <li id="registration" className="nav-item fs-3 nav-link">Registration</li>
                  </ul>
                ) : (
                  <ul className="navbar-nav nav-fill w-100">
                    <li className="fs-3 nav-item"><a className="nav-link" href="/account">Account</a></li>
                    <li className="nav-item"><a className="fs-3 nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="fs-3 nav-link" href="/logout">Logout</a></li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div>
            <div id="registrationStyle" className="container full-height" style={{ width: '100%', position: 'absolute' }}>
              <div className="row flex center v-center full-height">
                <div className="col-8 col-sm-4">
                  <div className="form-box" style={{ background: 'rgb(25, 133, 161)', marginTop: '50px' }}>
                    <form id="buttonRegistration">
                      <fieldset>
                        <legend>Registration</legend>
                        <img id="avatar" className="avatar round" src="" alt="" />
                        <input className="form-control" type="text" id="usernameRegistration" name="name" placeholder="username" />
                        <input className="form-control" type="email" id="username-1" name="email" placeholder="email" />
                        <input className="form-control" type="password" id="password" name="password" placeholder="password" />
                        <button className="btn btn-primary d-block w-100" type="button">REGISTRATION</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div id="loginStyle" className="container full-height" style={{ width: '100%', position: 'absolute' }}>
              <div className="row flex center v-center full-height">
                <div className="col-8 col-sm-4">
                  <div className="form-box" style={{ background: 'rgb(25, 133, 161)', marginTop: '50px' }}>
                    <form id="buttonLogin">
                      <fieldset>
                        <legend>Sign in</legend>
                        <img id="avatar-1" className="avatar round" src="" alt="" />
                        <input className="form-control" type="text" id="username-2" name="name" placeholder="username" />
                        <input className="form-control" type="email" id="username-3" name="email" placeholder="email" />
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
