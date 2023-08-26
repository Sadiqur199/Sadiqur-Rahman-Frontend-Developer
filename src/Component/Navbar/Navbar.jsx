import React from "react";
import image1 from "../../images/brainStationForce.png";
import image2 from "../../images/young.avif";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#E4F3FF] text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#E4F3FF] text-black rounded-box w-52"
            >
              <li>
                <Link className="hover:bg-[#E4F3FF]" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:bg-[#E4F3FF]" to="/">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="w-10 h-10" src={image1} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="hover:bg-[#E4F3FF]" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:bg-[#E4F3FF]" to="/">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={image2} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-400 text-black rounded-box w-52"
            >
              <li>
                <Link className="justify-between">Login</Link>
              </li>
              <li>
                <Link>Registration</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
