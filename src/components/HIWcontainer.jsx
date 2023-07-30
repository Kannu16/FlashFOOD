import React from "react";

const HIWcontainer = () => {
  return (
    <>
      <div className="HIWcontainer-inner-container">
        <h1 className="fs-1 text-center my-5">How it Works</h1>
        <div className="HIWcontainer-inner-container-card card my-4 d-flex flex-row justify-content-around" style={{  backgroundColor: "#f2f2ff"}}>
          <div className="HIWcontainer-inner-left p-5" style={{width:"58%"}}>
            <h2>
              First, use the free app to quickly and easily find discounted food
              from wherever you are.
            </h2>
            <ul className="my-5">
              <li className="my-4">
                Browse deals of up to 50% off at a grocery store location near
                you.<br /><a href="/">See more</a>
              </li>
              <li className="my-4">Choose your discounted food items.</li>
              <li className="my-4">
                Pay right in the app using any major credit card, VISA debit
                card, or SNAP EBT card.
              </li>
            </ul>
          </div>
          <img
            width="30%"
            height="20"
            className="img-fluid"
            src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/636bdc73528dc750114b5323_ebt_homepagepic-p-1080.png"
            alt="map"
          />
        </div>
      </div>
    </>
  );
};

export default HIWcontainer;
