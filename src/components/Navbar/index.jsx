import React from "react";
import "../Navbar/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" h-screen   lg:py-6 ">
      <div className="  h-full w-full bg-[#5b6b54] rounded-2xl shadow-xl shadow-gray-500 ">
        {/* avatar */}
        <div className=" flex justify-center items-center pt-5 ">
          <img
            //  random image
            src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/272988425_637138334247270_892214224820100350_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0ZcKFgFry9UAX-6ZUIf&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfA0OANG3Ipo4WKj0t6c3ZqRRzBvQwLjvSRRwcqLIskVDg&oe=64387D23
            "
            alt=""
            className="rounded-full h-40 w-40 border p-[2px]"
          />
        </div>

        {/* name */}

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
      </div>
    </div>
  );
}

export default Navbar;
