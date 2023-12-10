import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full h-14 p-2 bg-sky-400 flex justify-between items-center drop-shadow-2xl">
      <div className=" flex justify-center items-center ml-5">
        <Link className="flex justify-center items-center" to="/">
          <img
            className="w-9 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Logo_CSV.svg"
            alt="Logo"
          ></img>
          <p className="Name text-2xl font-sans font-semibold tracking-wide text-white">
            CSV Viewer
          </p>
        </Link>
      </div>
      <div className="home about mr-3">
        <ul className="text-xl font-sans font-semibold tracking-wide text-white">
          <li className="inline-block mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="inline-block mx-3">
            <Link to="/about">About</Link>
          </li>
          <li className="inline-block mx-3">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
