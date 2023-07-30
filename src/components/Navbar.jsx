import React, {useEffect, useState} from "react";

const Navbar = () => {
  const [navBarColor, setNavBarColor] = useState("#4230dd");

  const changeNavBarColorOnScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 100;
    const newNavBarColor = scrollY > scrollThreshold ? "rgba(66, 48, 221, 0.8)" : "#4230dd";
    setNavBarColor(newNavBarColor);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarColorOnScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeNavBarColorOnScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar-container fixed-top" style={{backgroundColor:navBarColor}}>
        <nav className="navbar navbar-expand-lg navbar-container-inner">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e73b9a76a448d16c1d65d34_logo_white.svg" alt="Flashfood logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-container-inner-right" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto d-flex align-items-center">
                <a className="nav-link" href="#">
                  How it works
                </a>
                <a className="nav-link ms-4" href="#">
                  Location
                </a>
                <a className="nav-link ms-4" href="#">
                  About
                </a>
                <a className="nav-link ms-4" href="#">
                  Support
                </a>
                <a className="nav-link ms-4" href="#">
                  Partner
                </a>
                <button className="ms-3">Download</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
