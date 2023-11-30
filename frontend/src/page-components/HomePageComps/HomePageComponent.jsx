import { FaRegAddressCard, FaUserCheck, FaHeadphonesSimple } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import slider1 from "/slider-1.jpg"
import slider2 from "/slider-2.jpg"
import slider3 from "/slider-3.jpg"
import { useEffect, useState } from "react";
import CatagoriesListReq, { getAllGigs } from "../../helpers/api";
import GigCards from "../../components/cards/GigCards";
import { NavLink } from 'react-router-dom';
import CategoryCards from './../../components/cards/CategoryCards';

import serviceImg from "/service-img.jpg"

const HomePageComponent = () => {

  const [gigs, setGigs] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {

    (async () => {
      let getGig = await getAllGigs(1, 10)
      setGigs(getGig.gigs)

      let getCategory = await CatagoriesListReq()
      setCategory(getCategory)
    })()

  }, [0])

  return (
    <>
    {/* home section */}
      <section className="home" id="home">
        <div id="home-slider" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="4000">
              <img src={slider1} className="d-block w-100" alt="..." />
              <div className="content">
                <h1 className="display-1">Trust<span>Home</span></h1>
                <p>Your Trusted Partner in Homecare</p>
                <a href="#services" className="bg-btns">see services</a>
              </div>

            </div>

            <div className="carousel-item" data-bs-interval="4000">
              <img src={slider2} className="d-block w-100" alt="..." />

              <div className="content">
                <h1 className="display-1">Any <span>Service</span></h1>
                <p>Your can get from here</p>
                <a href="#category" className="bg-btns">see categories</a>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="4000">
              <img src={slider3} className="d-block w-100" alt="..." />
              <div className="content">
                <h1 className="display-1">We <span>Are</span></h1>
                <p>A platform for all in one home services</p>
                <a href="#contact" className="bg-btns">contact us</a>
              </div>
            </div>

          </div>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#home-slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#home-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#home-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>

      </section>

      {/* needs section */}
      <section className="needs my-section" id="needs">
        <div className="container">

          <div className="section-title">
            <h3>Need something <span>done</span></h3>
            <p>Any kind of services for your home</p>
          </div>

          <div className="row">

            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
              <div className="text-content">
                <p className="icon fs-1"><FaRegAddressCard /></p>
                <h5>Post a job</h5>
                <p>It&apos;s free and easy to post a job. Simply fill
                  in a title, description.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
              <div className="text-content">
                <p className="icon fs-1"><FaUserCheck /></p>
                <h5>Choose Providers</h5>
                <p>Find all kinds of provides needed for your home</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
              <div className="text-content">
                <p className="icon fs-1"><RiMoneyDollarCircleFill /></p>
                <h5>Pay safely</h5>
                <p>Pay any time with no fear with the best security</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
              <div className="text-content">
                <p className="icon fs-1"><FaHeadphonesSimple /></p>
                <h5>We&apos;re here to help</h5>
                <p>Any problem for your home or about services, we are here</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* gigs */}
      <section className="gigs my-section bg-body-tertiary" id="gigs">
        <div className="container">
          <div className="section-title">
            <h3>Popular <span>services</span></h3>
            <p>Best services loved by our users</p>
          </div>

          <div className="row">
            {
              gigs.length != 0 ? gigs.map((e, index) => (
                <GigCards data={e} key={index} />
              )) : <h5 className="py-5 text-center">No services found</h5>
            }
          </div>

          <div className="text-center mt-5">
            <NavLink className="btn btn-lg">all services</NavLink>
          </div>
        </div>
      </section>

      <section className="find-service my-section">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6">
              <div className="text-content">
                <h3>Find services your way</h3>
                <p className="pt-3">Work with the largest network of independent service providers and
                  get things done—from quick turnarounds to big transformations.</p>

                  <NavLink className={"btn btn-lg"}>contact us</NavLink>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="service-img shadow">
                <img src={serviceImg} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* category */}
      <section className="category my-section bg-body-tertiary" id="category">
        <div className="container">
          <div className="section-title">
            <h3>Our service <span>categories</span></h3>
            <p>Best services loved by our users</p>
          </div>

          <div className="row">
            {
              category.length != 0 ? category.map((e, index) => (
                <CategoryCards data={e} key={index} />
              )) : <h5 className="py-5 text-center">No categories found</h5>
            }
          </div>
        </div>
      </section>

    </>
  );
};

export default HomePageComponent;