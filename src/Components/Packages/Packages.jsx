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
import {AiFillStar} from 'react-icons/ai'
import {FaAngleRight} from 'react-icons/fa'

import p1 from '../../Assets/images/packages/p1.jpg'
import p2 from '../../Assets/images/packages/p2.jpg'
import p3 from '../../Assets/images/packages/p3.jpg'
import p4 from '../../Assets/images/packages/p4.jpg'
import p5 from '../../Assets/images/packages/p5.jpg'
import p6 from '../../Assets/images/packages/p6.jpg'


const Packages=()=> {
  return (
<section id="pack" className="packages">
    <div className="container">
      <div className="gallary-header text-center">
        <h2>special packages</h2>
        <p>
          Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
        </p>
      </div>
      {/*/.gallery-header*/}
      <div className="packages-content">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src={p1} alt='' />
              <div className="single-package-item-txt">
                <h3>
                  italy <span className="pull-right">$499</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <FaAngleRight/> <FaAngleRight/> 3 Days 2 nights
                    </span>
                    <FaAngleRight/> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <FaAngleRight/> transportation
                    </span>
                    <FaAngleRight/> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar/>
                    <AiFillStar/>
                    <span>254 reviews</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src={p2} alt='' />
              <div className="single-package-item-txt">
                <h3>
                  england <span className="pull-right">$1499</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <FaAngleRight/> 6 Days 7 nights
                    </span>
                    <FaAngleRight /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <FaAngleRight/> transportation
                    </span>
                    <FaAngleRight /> Free food
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar/>
                    <AiFillStar/>
                    <span>344 reviews</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src={p3} alt='' />
              <div className="single-package-item-txt">
                <h3>
                  france <span className="pull-right">$1199</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <FaAngleRight /> 5 Days 6 nights
                    </span>
                    <FaAngleRight /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <FaAngleRight /> transportation
                    </span>
                    <FaAngleRight/> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>544 reviews</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src={p4} alt='' />
              <div className="single-package-item-txt">
                <h3>
                  india <span className="pull-right">$799</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <FaAngleRight/> 4 Days 5 nights
                    </span>
                    <FaAngleRight/> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <FaAngleRight/> transportation
                    </span>
                    <FaAngleRight/> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>625 reviews</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src={p5} alt='' />
              <div className="single-package-item-txt">
                <h3>
                  spain <span className="pull-right">$999</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <FaAngleRight/> 4 Days 4 nights
                    </span>
                    <FaAngleRight/> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <FaAngleRight/> transportation
                    </span>
                    <FaAngleRight/> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>379 reviews</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src={p6} alt='' />
              <div className="single-package-item-txt">
                <h3>
                  thailand <span className="pull-right">$799</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <FaAngleRight/> 5 Days 6 nights
                    </span>
                    <FaAngleRight/> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <FaAngleRight/> transportation
                    </span>
                    <FaAngleRight/> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>447 reviews</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.packages-content*/}
    </div>
    {/*/.container*/}
  </section>
 )
}
export default Packages