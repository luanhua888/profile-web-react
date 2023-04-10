import React from "react";
import "../Main/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import avt1 from "../../assets/1.jpg";
import avt2 from "../../assets/2.jpg";
import avt3 from "../../assets/3.jpg";
import avt4 from "../../assets/4.jpg";
import avt5 from "../../assets/5.jpg";

function Main() {
  const handleShow = () => {
    document.getElementById("menu").classList.toggle("hidden");
  };

  return (
    <div className=" ">
      <div className="  ">
        {/* icon menu */}
        <div className="flex flex-row justify-between items-center">
          <FontAwesomeIcon
            icon={faBars}
            className="text-4xl text-[#5b6b54] px-[10%] pt-5 cursor-pointer "
            onClick={() => {
              handleShow();
            }}
          />
          <div
            className="flex  flex-row justify-items-end items-center   "
            id="menu"
          >
            <h1
              className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] cursor-pointer "
              to="/"
            >
              {" "}
              Home{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] cursor-pointer">
              {" "}
              <Link to="/about">About</Link>{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] cursor-pointer">
              {" "}
              <Link to="/skill">Skill</Link>{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] cursor-pointer">
              {" "}
              <Link to="/experient">Experient </Link>{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] cursor-pointer">
              <Link to="/contact">Contact </Link>{" "}
            </h1>
          </div>

          {/* icon ring */}
          <FontAwesomeIcon
            icon={faBell}
            className="text-4xl text-[#5b6b54] px-[10%] pt-5"
          />
        </div>
        {/* search */}
        <div className="flex flex-row justify-start pl-[10%] gap-4 items-center pt-[4%]">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#d2cdb0] text-[#5b6b54] rounded-full w-[60%] px-2 py-2 outline-none"
          />
          <button className="bg-[#5b6b54] text-[#eae8db] rounded-full px-4 py-2 gap-2 outline-none flex items-center justify-center">
            <FontAwesomeIcon icon={faSearch} className="text-2xl" />
            Search
          </button>
        </div>

        {/* content */}
        <div className="flex flex-col justify-center items-center pt-[4%]">
          <h1 className="text-6xl text-[#5b6b54] font-bold">
            Welcome to my website
          </h1>

          <h1 className="text-4xl text-[#5b6b54] font-bold pt-[4%]">
            I'm a web developer
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 ">
          <img
            src={avt4}
            alt=""
            className=" w-full max-h-[250px] rounded-sm shadow-xl "
          />

          <img
            src={avt5}
            alt=""
            className=" w-full max-h-[250px] rounded-sm shadow-xl  "
          />

          <img
            src={avt3}
            alt=""
            className=" w-full max-h-[250px] rounded-sm shadow-xl "
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
