import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
import Booking from "./Booking"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function Landpage() {




  return (
        <>
  {/* Favicon */}
  {/* <link to="img/favicon.ico" rel="icon" /> */}
  {/* Google Web Fonts */}
  {/* <link rel="preconnect" to="https://fonts.googleapis.com" /> */}
  {/* <link rel="preconnect" to="https://fonts.gstatic.com" crossOrigin="" /> */}
  {/* <link to="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" /> */}
  {/* Icon Font Stylesheet */}
  {/* <link to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" /> */}
  {/* <link to="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" /> */}
  {/* Libraries Stylesheet */}
  {/* <link to="lib/animate/animate.min.css" rel="stylesheet" /> */}
  {/* <link to="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" /> */}
  {/* <link to="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" /> */}
  
  {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}

  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
  <Navbar />
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Enjoy Your Vacation With Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="img/about.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 className="mb-4">
            Welcome to <span className="text-primary">Travel</span>
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                First Class Flights
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Handpicked Hotels
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />5 Star
                Accommodations
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Latest Model Vehicles
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                150 Premium City Tours
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                24/7 Service
              </p>
            </div>
          </div>
          <Link className="btn btn-primary py-3 px-5 mt-2" to="">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Destination Start */}
  <div className="container-xxl py-5 destination">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Destination
        </h6>
        <h1 className="mb-5">Popular Destination</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <Link className="position-relative d-block overflow-hidden" to="">
                <img className="img-fluid" src="img/destination-1.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  30% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Thailand
                </div>
              </Link>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <Link className="position-relative d-block overflow-hidden" to="">
                <img className="img-fluid" src="img/destination-2.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  25% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Malaysia
                </div>
              </Link>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <Link className="position-relative d-block overflow-hidden" to="">
                <img className="img-fluid" src="img/destination-3.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  35% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Australia
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <Link
            className="position-relative d-block h-100 overflow-hidden"
            to=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="img/destination-4.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
              20% OFF
            </div>
            <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
              Indonesia
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Destination End */}
  {/* Booking Start */}
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Booking
        </h6>
        <h1 className="mb-5">Book Your Ticket</h1>
      </div>
  {/* Booking Start */}

  {<Booking />}
  
  {/* Process Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Process
        </h6>
        <h1 className="mb-5">3 Easy Steps</h1>
      </div>
      <div className="row gy-5 gx-4 justify-content-center">
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-globe fa-3x text-white" />
            </div>
            <h5 className="mt-4">Choose A Destination</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-dollar-sign fa-3x text-white" />
            </div>
            <h5 className="mt-4">Pay Online</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-plane fa-3x text-white" />
            </div>
            <h5 className="mt-4">Fly Today</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Process Start */}
  {/* Back to Top */}
  <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </Link>

  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>

  )
}
