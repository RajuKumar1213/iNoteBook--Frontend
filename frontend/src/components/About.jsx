import React from 'react'
import Footer from './Footer';
import rajuImg from "./image/raju.jpg"
import rakeshImg from "./image/rakesh.jpg"
import rahuldImg from "./image/rahul-darling.jpg"

const About = () => {

  return (
    <div>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Raju Kr. Vishwakarma</h1>
              <p className="lead text-muted mb-0">I am a Diploma student and I am very fond of making Web Apps and android apps .</p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Eat Sleep And Code Repeat..</h2>
              <p className="font-italic text-muted mb-4">If debugging is the process of removing bugs, then programming must be the process of putting them in</p><a href="/about" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">A boy who is Designer</h2>
              <p className="font-italic text-muted mb-4">“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.” “Intuitive design is how we give the user new superpowers.” “One man's crappy software is another man's full time job.” “Digital design is like painting, except the paint never dries.</p><a href="/about" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">“Coming together is a beginning; keeping together is progress; working together is success.” - ...</p>
            </div>
          </div>

          <div className="row text-center">
            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-2">
              <div className="bg-white rounded shadow-sm py-5 px-4"><img src={rajuImg} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Raju kr. Vishwakarma</h5><span className="small text-uppercase text-muted">Frontend & backend </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.facebook.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.twitter.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.in" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* End*/}

            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-2">
              <div className="bg-white rounded shadow-sm py-5 px-4"><img src={rakeshImg} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Rakesh Kumar</h5><span className="small text-uppercase text-muted">ui-ux designer & bakwas</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.facebook.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.twitter.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.in" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* End*/}

            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-2">
              <div className="bg-white rounded shadow-sm py-5 px-4"><img src={rahuldImg} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Rahul kumar</h5><span className="small text-uppercase text-muted">Topography, writing & masti</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.facebook.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.twitter.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.in" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* End*/}

            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-2">
              <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Rahul Mandal</h5><span className="small text-uppercase text-muted">Only talking and chating </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.facebook.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.twitter.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.in" rel="noreferrer" target='_blank' className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* End*/}

          </div>
        </div>
      </div>


      {/* FOOTER  */}
      <Footer />
    </div>
  )
}

export default About
