import React from "react";
import image1 from "../../images/6C8488825-130802-slsphoto-hmed-0835a-files.webp";
import "./banner.css";
import { Link } from "react-router-dom";
import { MotionAnimate } from "react-motion-animate";
const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen bg-[#E4F3FF] banner">
        <div className="hero-content flex-col lg:flex-row-reverse sm:content-start">
        <MotionAnimate
          animation='fadeInUp'
          reset={true}
          distance={200}
          delay={1}
          speed={1}
        >
          <img src={image1} className=" shadow-3xl lg:mr-[0px] sm:mr-[300px] sm:mt-11 md:mt-0 w-[100%]" />
          </MotionAnimate>
          <div className="sm:ml-[-368px] lg:ml-0">
            <h1 className="text-5xl font-bold">
              Live Your <br></br> Dream With Us
            </h1>
            <p className="py-6 sm:px-0">
              With us, you can keep learning, growing, and <br /> doing what you
              love to make your dreams come true.
            </p>
            <Link to="/">
              <button className="btn btn-primary mt-5">Join Us</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
