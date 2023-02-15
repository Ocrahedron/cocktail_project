const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form name="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="block mar-b-1">Add name</label>
          <input name="name" type="text" className="block w-100 no-outline no-border pad-1 mar-b-2" id="exampleInputName1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="block mar-b-1">Add email address</label>
          <input name="email" type="text" className="block w-100 no-outline no-border pad-1 mar-b-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="block mar-b-1">Add password</label>
          <input name="password" type="password" className="block w-100 no-outline no-border pad-1 mar-b-2" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline">Registration</button>
      </form>
    </Layout>
  );
};
