import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

import slider1 from "/slider-1.jpg"
import slider2 from "/slider-2.jpg"
import slider3 from "/slider-3.jpg"
import serviceImg from "/service-img.jpg"

import CatagoriesListReq, { getAllGigs } from "../../helpers/api";

import GigCards from "../../components/cards/GigCards";
import CategoryCards from './../../components/cards/CategoryCards';
import CardLoader from "../../components/loaders/CardLoader";
import HomeLoader from "../../components/loaders/HomeLoader";
import SectionTitle from "../../components/SectionTitle";
import NeedsSection from "../../components/NeedsSection";

const HomePageComponent = () => {

  const [gigs, setGigs] = useState([])
  const [category, setCategory] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    (async () => {
      let getGig = await getAllGigs(1, 10)
      let getCategory = await CatagoriesListReq()
      
      if(getGig && getCategory){
        setGigs(getGig.gigs)
        setCategory(getCategory)
        setLoader(false)
      }
    })()

  }, [0])

  return (
    <>
    {/* home section */}
      <section className="home" id="home">

        {
          loader && <HomeLoader />
        }
        
        {
          !loader && <div id="home-slider" className="carousel slide" data-bs-ride="carousel">
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
        }

      </section>

      {/* needs section */}
      <NeedsSection bg_class={"bg-white"} />

      {/* gigs */}
      <section className="gigs my-section bg-body-tertiary" id="services">
        <div className="container">
          <SectionTitle title="Popular" titleHighlight="services" text="Best services loved by our users" />

          {
            loader && <CardLoader />
          }

          <div className="row">
            {
              gigs.length > 0 && gigs.map((e, index) => (
                <GigCards data={e} key={index} />
              ))
            }
          </div>

          {
            gigs.length > 0 && <div className="text-center mt-5">
              <NavLink className="btn btn-lg" to={"/services?category=0&page=1&limit=10"}>all services</NavLink>
            </div>
          }
        </div>
      </section>

      <section className="find-service my-section">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6 mt-3">
              <div className="text-content">
                <h3>Find services your way</h3>
                <p className="pt-3">Work with the largest network of independent service providers and
                  get things done—from quick turnarounds to big transformations.</p>

                  <NavLink className={"btn btn-lg"}>contact us</NavLink>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-3">
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

          {
            loader && <CardLoader />
          }

          <div className="row">
            {
              category.length >= 0 && category.map((e, index) => {
                return(
                  index < 8 ? (<CategoryCards data={e} key={index} />) : ""
                )
              })
            }
          </div>

          <div className="text-center mt-5">
            <NavLink className="btn btn-lg" to={"/all-category"}>all categories</NavLink>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomePageComponent;