import React from 'react';

import '../../Assets/css/animate.css';
import '../../Assets/css/font-awesome.min.css';
import '../../Assets/css/hover-min.css';
import '../../Assets/css/datepicker.css';
import '../../Assets/css/owl.carousel.min.css';
import '../../Assets/css/owl.theme.default.min.css';
import '../../Assets/css/jquery-ui.min.css';
import '../../Assets/css/bootstrap.min.css';
import '../../Assets/css/bootsnav.css';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';



import g1 from '../../Assets/images/gallary/g1.jpg';
import g2 from '../../Assets/images/gallary/g2.jpg';
import g3 from '../../Assets/images/gallary/g3.jpg';
import g4 from '../../Assets/images/gallary/g4.jpg';
import g5 from '../../Assets/images/gallary/g5.jpg';
import g6 from '../../Assets/images/gallary/g6.jpg';
const Destination=()=> {
  return (
<section id="gallery" className="gallery">
  <div className="container">
    <div className="gallery-details">
      <div className="gallary-header text-center">
        <h2>top destination</h2>
        <p>Where do you wanna go? How much you wanna explore?</p>
      </div>
      {/*/.gallery-header*/}
      <div className="gallery-box">
        <div className="gallery-content">
          <div className="filtr-container">
            <div className="row">
              <div className="col-md-6">
                <div className="filtr-item">
                  <img src={g1} alt="portfolio image" />
                  <div className="item-title">
                    <a href="#">china</a>
                    <p>
                      <span>20 tours</span><br />
                      <span>15 places</span>
                    </p>
                  </div>
                  {/* /.item-title */}
                </div>
                {/* /.filtr-item */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                <div className="filtr-item">
                  <img src={g2} alt="portfolio image" />
                  <div className="item-title">
                    <a href="#">venuzuala</a>
                    <p>
                      <span>12 tours</span><br />
                      <span>9 places</span>
                    </p>
                  </div>{" "}
                  {/* /.item-title*/}
                </div>
                {/* /.filtr-item */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                <div className="filtr-item">
                  <img src={g3} alt="portfolio image" />
                  <div className="item-title">
                    <a href="#">brazil</a>
                    <p>
                      <span>25 tours</span><br />
                      <span>10 places</span>
                    </p>
                  </div>
                  {/* /.item-title */}
                </div>
                {/* /.filtr-item */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                <div className="filtr-item">
                  <img src={g4} alt="portfolio image" />
                  <div className="item-title">
                    <a href="#">australia</a>
                    <p>
                      <span>18 tours</span><br />
                      <span>9 places</span>
                    </p>
                  </div>{" "}
                  {/* /.item-title*/}
                </div>
                {/* /.filtr-item */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                <div className="filtr-item">
                  <img src={g5} alt="portfolio image" />
                  <div className="item-title">
                    <a href="#">netharlands</a>
                    <p>
                      <span>14 tours</span><br />
                      <span>12 places</span>
                    </p>
                  </div>{" "}
                  {/* /.item-title*/}
                </div>
                {/* /.filtr-item */}
              </div>
              {/* /.col */}
              <div className="col-md-8">
                <div className="filtr-item">
                  <img src={g6} alt="portfolio image" />
                  <div className="item-title">
                    <a href="#">turkey</a>
                    <p>
                      <span>14 tours</span><br />
                      <span>6 places</span>
                    </p>
                  </div>{" "}
                  {/* /.item-title*/}
                </div>
                {/* /.filtr-item */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.filtr-container*/}
        </div>
        {/* /.gallery-content */}
      </div>
      {/*/.galley-box*/}
    </div>
    {/*/.gallery-details*/}
  </div>
  {/*/.container*/}
</section>

	
		
	  )
}
export default Destination