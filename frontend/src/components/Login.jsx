import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import NoteContext from '../context/notes/NoteContext';

const Login = () => {
  const context = useContext(NoteContext);
  const { showAlert } = context

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const history = useHistory(null);

  /// handling login after click on the button
  const handleLogin = async (e) => {
    e.preventDefault();

    // API CALL :
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const json = await response.json();
    console.log(json)
    // todo api calls

    if (json.success === true) {
      // save the auth token and redirect to the home page
      localStorage.setItem("token", json.authToken);
      history.push("/");
      showAlert("success", "Login Successfully..!");

    }
    else {
      showAlert("warning", "Login with valid credentials...");
    }
  }

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }


  return (
   
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" alt="login phone img" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <h1 className='text-center mb-3'> Login </h1>
              <div className="form-outline mb-4">
                <input type="email" id="email" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="email" name="email" value={loginData.email} onChange={onChange}>Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="password" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="password" name="password" onChange={onChange} value={loginData.password}>Password</label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block text-center" onClick={handleLogin}> Login</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
