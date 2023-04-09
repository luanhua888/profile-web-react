import React from "react";
import "../Main/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

function Main() {
  const handleShow = () => {
   document.getElementById("menu").classList.toggle("hidden");
  };

  return (
    <div className="h-screen py-[4%] pr-[2%]  ">
      <div className=" py-4 bg-[#eae8db]  h-full rounded-r-xl shadow-xl">
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
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] ">
              {" "}
              Home{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] ">
              {" "}
              About{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] ">
              {" "}
              Skill{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] ">
              {" "}
              Experient{" "}
            </h1>
            <h1 className="text-4xl text-[#5b6b54] px-4 pt-5 hover:underline underline-[#5b6b54] ">
              {" "}
              Contact{" "}
            </h1>
          </div>

          {/* icon ring */}
          <FontAwesomeIcon icon={faBell} className="text-4xl text-[#5b6b54] px-[10%] pt-5" />
        </div>
        {/* search */}
        <div className="flex flex-row justify-start pl-[10%] gap-4 items-center pt-[4%]">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#d2cdb0] text-[#5b6b54] rounded-full w-[50%] px-2 py-2 outline-none"
            />
            <button className="bg-[#5b6b54] text-[#eae8db] rounded-full px-4 py-2 gap-2 outline-none flex items-center justify-center">
            <FontAwesomeIcon icon={faSearch} className="text-2xl" />
              Search
            </button>
          </div>
      </div>
    </div>
  );
}

export default Main;
