import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const Profile = () => {
    const context = useContext(NoteContext);
    const { user, notes } = context;

    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#f4f5f7", marginTop: "23px", width: "80%", margin: "auto" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-black" style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar " className="img-fluid my-5" style={{ width: "100px" }} />
                                        <h5>{user.name}</h5>
                                        <span className="badge text-bg-info d-block my-2" >General</span>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-8 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted ">{user.email}</p>
                                                </div>

                                            </div>
                                            <h6>No. Of notes</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>{notes.length} Notes.</h6>
                                                    <p className="text-muted"></p>
                                                </div>

                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                            </div>
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

export default Profile
