import React from "react";
import { TestimonialArray } from "../Utils/TestimonialArray";

const Testimonial = () => {
  return (
    <>
      {TestimonialArray.map((items, index) => {
        const { commaImg, startImg, userComment, regards } = items;
        return (
          <div className="testimonial-container-inneer my-3" key={index}>
            <div className="card p-4">
              <img alt="img" src={commaImg} width="60" />
              <img alt="img" src={startImg} width="140" className="mt-3 mb-4" />
              <p className="fw-semibold">{userComment}</p>
              <a
                href="/"
                className="nav-link my-3 fw-bold"
                style={{ color: "#1c1279" }}
              >
                {regards}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Testimonial;
