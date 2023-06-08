import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import NoteContext from '../context/notes/NoteContext';

const Signup = () => {
  const context = useContext(NoteContext);
  const { showAlert } = context

  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", rpassword: "" });

  const history = useHistory(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // using fecth request to api for create a new user of singup
    // API CALL :

    const { name, email, password, rpassword } = signupData;

    if (password !== rpassword) {
      history.push("/signup");
      showAlert("warning", "Passwords doesn't mached !")
    }
    else {
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });
      const json = await response.json();

      if (json.success === true) {
        localStorage.setItem("token" , json.authToken);
        history.push("/");
        showAlert("success" , "Signed Up Successfully  !")
      } 

    }
  }

  const onChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  }


  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee", marginTop: "35px" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "20px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-2 " style={{ marginTop: "-20px" }}>Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="name" className="form-control" name='name' value={signupData.name} onChange={onChange} />
                            <label className="form-label" htmlFor="name">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <di className="form-outline flex-fill mb-0">
                            <input type="email" id="email" className="form-control" name='email' value={signupData.email} onChange={onChange} />
                            <label className="form-label" htmlFor="email">Your Email</label>
                          </di>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" className="form-control" name='password' value={signupData.password} onChange={onChange} required minLength={5}/>
                            <label className="form-label" htmlFor="password">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="rpassword" className="form-control" name='rpassword' value={signupData.rpassword} onChange={onChange} required minLength={5}/>
                            <label className="form-label" htmlFor="rpassword">Repeat your password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-2 mb-2 mb-lg-2">
                          <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="singup" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
