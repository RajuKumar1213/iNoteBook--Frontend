import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {
    return (
        <div>
            {/* Remove the container if you want to extend the Footer to full width. */}

            {/* Footer */}
            <footer
                className="text-center text-lg-start text-white my-5"
                style={{ backgroundColor: "#929fba" }}
            >
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Links */}
                    <section className="">
                        {/*Grid row*/}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Raju Vishwakarma
                                </h6>
                                <p>
                                    This is the website where you can save you to do list , college notes and this single website works as the social media app and here chating with other friends and other facility will be availabe.
                                </p>
                            </div>
                            {/* Grid column */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Functions</h6>
                                <p>
                                    <Link className="text-white">To-do list </Link>
                                </p>
                                <p>
                                    <Link className="text-white">Save college notes</Link>
                                </p>
                                <p>
                                    <Link className="text-white">Chat with friends</Link>
                                </p>
                                <p>
                                    <Link className="text-white">Download notes anytime-anywhere</Link>
                                </p>
                            </div>
                            {/* Grid column */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold"> Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Daltongang, palamu, jharkhand</p>
                                <p><i className="fas fa-envelope mr-3"></i> rajuvis778@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +91 9646953892</p>
                                <p><i className="fas fa-print mr-3"></i> +1 -----------</p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                {/* Facebook */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#3b5998" }}
                                    href="https://www.facebook.com"
                                    role="button"
                                    target='_blank'
                                    rel="noreferrer"
                                ><i className="fab fa-facebook-f"></i
                                ></a>

                                {/* Twitter */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#55acee" }}
                                    href="https://www.twitter.com"
                                    role="button"
                                    target='_blank'
                                    rel="noreferrer"
                                ><i className="fab fa-twitter"></i
                                ></a>

                                {/* Google */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#dd4b39" }}
                                    href="https://www.google.com"
                                    role="button"
                                    target='_blank'
                                    rel="noreferrer"
                                ><i className="fab fa-google"></i
                                ></a>

                                {/* Instagram */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#ac2bac" }}
                                    href="https://www.instagram.com"
                                    role="button"
                                    target='_blank'
                                    rel="noreferrer"
                                ><i className="fab fa-instagram"></i
                                ></a>

                                {/* Linkedin */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#0082ca" }}
                                    href="https://in.linkedin.com/"
                                    role="button"
                                    target='_blank'
                                    rel="noreferrer"
                                ><i className="fab fa-linkedin-in"></i
                                ></a>
                                {/* Github */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#333333" }}
                                    href="https://www.github.com"
                                    role="button"
                                    target='_blank'
                                    rel="noreferrer"
                                ><i className="fab fa-github"></i
                                ></a>
                            </div>
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* Section: Links */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}

                >
                    © 2023 Copyright :
                    <Link className="text-white" to="#"
                    >  iNoteBook</Link>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </div>
        
    )
}

export default Footer
