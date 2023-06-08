import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  let location = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">inotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {localStorage.getItem("token") ?  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about"  ? "active" : ""} `} aria-current="page" to="/about">About</Link>
            </li>
          </ul> : <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>}
          {!localStorage.getItem("token") ? <form className="d-flex" role="search">
            <Link className="btn btn-primary mx-1" to="/login" type="button">Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup" type="button">Signup</Link>
          </form> :
            <div>
              <button className="btn btn-primary d-inline" onClick={handleLogout}>Logout</button>
              <li className="nav-item d-inline">
              <Link className={`nav-link ${location.pathname === "/profile" ? "active" : ""} d-inline m-2`} aria-current="page" to="/profile"> <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="profile-img" width="40" className="img-fluid rounded-circle  shadow-sm"/></Link>
              </li>
            </div>
          }

        </div>
      </div>
    </nav>
  )
}

export default Navbar
