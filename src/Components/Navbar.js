import { Link } from "react-router-dom";


export default function Navbar(){
    return(<>
    

<div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Travel
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="about.html" className="nav-item nav-link">
            About
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="destination.html" className="dropdown-item">
                Destination
              </Link>
              <Link to="booking.html" className="dropdown-item">
                Booking
              </Link>
              <Link to="team.html" className="dropdown-item">
                Travel Guides
              </Link>
              <Link to="testimonial.html" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="404.html" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <Link to="contact.html" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">
          Register
        </Link>
      </div>
    </nav>
    </div>
        </>)
    }