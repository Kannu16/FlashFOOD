import React from "react";
import Brandsection from "./Brandsection";
import HIWcontainer from "./HIWcontainer";
import HeadToStore from "./HeadToStore";
import EnjoymentSection from "./EnjoymentSection";
import Testimonial from "./Testimonial";
import FootterContainer from "./FootterContainer";

const Maincontainer = () => {
  return (
    <>
    <div className="header-container">
      <div className="main-container position-realtive">
        <div className="main-container-inner position-absolute w-50">
          <h1>Save money and <br />fight against food <br/> waste</h1>
          <p className="my-4 lh-base text">
            Get massive savings on fresh food items like meat and <br /> produce that
            are nearing their best before date at grocery <br /> stores across Canada
            and the U.S.{" "}
          </p>
        </div> 
        <div className="appstore-logo d-flex align-items-center">
          <a href=""><img width="140" src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1e309d48fb5d5f2be24_Apple%201.svg" alt="fdsf" /></a>
          <a className="ms-3" href=""><img width="140"  src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1e309d48fb5d5f2be24_Apple%201.svg" alt="fdsf" /></a>
          <a style={{color:"#caf4e0", textTransform:"capitalize"}} className="nav-link fw-bolder ms-3" href="/">how It works</a>
        </div>
      </div> 
      </div>
      <div className="brand-main-container">
        <Brandsection />
      </div>
      <div className="how-it-works-container">
          <HIWcontainer />
      </div>
      <div className="head-to-store-container my-5">
        <HeadToStore />
      </div>
      <div className="enjoyment-section-container my-5">
        <EnjoymentSection />
      </div>
      <div className="testimonial-container my-5">
        <h1 className="my-5 text-center">We’ve helped thousands of people <br /> save money on their groceries</h1>
        <Testimonial />
      </div>
      <div className="footer-container">
        <FootterContainer />
        
      </div>
    </>
  );
};

export default Maincontainer;
