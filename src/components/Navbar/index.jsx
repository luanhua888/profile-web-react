import React, { useState } from "react";
import "../Navbar/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [fileAvt, setFileAvt] = useState(
    "https://i.pinimg.com/564x/f2/9e/d6/f29ed68554a4d63677fe7a90dd1b6fd7.jpg"
  );

  return (
    <div className=" h-screen   lg:py-6 ">
      <div className="  h-full w-full bg-[#5b6b54] rounded-2xl shadow-xl shadow-gray-500 ">
        {/* avatar can update  */}
        <div
          className=" flex flex-col justify-center items-center pt-5 
        "
        >
          <img
            src={fileAvt}
            alt=""
            className="rounded-full h-40 w-40 border p-[2px] bg-cover"
            onClick={() => {
              const inputFile = document.querySelector("input[type=file]");
              inputFile.click();
            }}
          />
          {/* chọn file ảnh từ máy tính */}
          <div className="flex  justify-center items-center">
            <input
              type="file"
              name=""
              id=""
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                  setFileAvt(fileReader.result);
                };
              }}
            />
          </div>
        </div>

        <h1 className=" p-4  font-bold justify-center items-center flex text-2xl text-[#eae8db]">
          Hứa Minh Luân
        </h1>

        <Link
          className="flex pl-10 py-4 justify-start items-center text-2xl text-[#eae8db] w-full hover:bg-[#e8ede4] hover:text-[#5b6b54]"
          to={"/"}
        >
          <FontAwesomeIcon
            icon={faHouse}
            className="flex justify-center items-center"
          />
          <p className="px-4">Home</p>
        </Link>

        <Link
          className="flex pl-10 py-4 justify-start items-center text-2xl text-[#eae8db] w-full hover:bg-[#e8ede4] hover:text-[#5b6b54]"
          to={"/about"}
        >
          <FontAwesomeIcon icon={faUser} className="" />
          <p className="px-4">About</p>
        </Link>

        <Link
          className="flex pl-10 py-4 justify-start items-center text-2xl text-[#eae8db] w-full hover:bg-[#e8ede4] hover:text-[#5b6b54]"
          to={"/contact"}
        >
          <FontAwesomeIcon icon={faUserFriends} className="" />
          <p className="px-3">Contact</p>
        </Link>

        <Link
          className="flex pl-10 py-4 justify-start items-center text-2xl text-[#eae8db] w-full hover:bg-[#e8ede4] hover:text-[#5b6b54]"
          to={"/"}
          onClick={() => {
            const dropdownUtil = document.querySelector(".dropdown-util");
            dropdownUtil.classList.toggle("hidden");
          }}
        >
          <FontAwesomeIcon icon={faFish} className="" />
          <p className="px-3">Utilities</p>
        </Link>

        {/* dropdown */}
        <div className="dropdown-util ">
          <Link
            className="flex pl-[20%] py-4 justify-start items-center text-2xl text-[#eae8db] w-full hover:bg-[#e8ede4] hover:text-[#5b6b54] "
            to={"/slider"}
          >
            <FontAwesomeIcon icon={faFire} className="" />
            <p className="px-3">Slider</p>
          </Link>

          
          <Link
            className="flex pl-[20%] py-4 justify-start items-center text-2xl text-[#eae8db] w-full hover:bg-[#e8ede4] hover:text-[#5b6b54] "
            to={"/slider"}
          >
            <FontAwesomeIcon icon={faFire} className="" />
            <p className="px-3">Slider</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
