import React from "react";
import "../Navbar/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="pt-4 pl-4 pb-4">
      <div className="container pb-[120%]  ">
        {/* avatar */}
        <div className=" flex justify-center items-center pt-5 ">
          <img
            //  random image
            src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/272988425_637138334247270_892214224820100350_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0ZcKFgFry9UAX-6ZUIf&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfA0OANG3Ipo4WKj0t6c3ZqRRzBvQwLjvSRRwcqLIskVDg&oe=64387D23
            "
            alt=""
            className="rounded-full h-20 w-20 border p-[2px]"
          />
        </div>

        {/* name */}

        <h1 className=" p-4  font-bold justify-center items-center flex">
          Hứa Minh Luân
        </h1>

        <button className="px-4 py-2 font-bold justify-start items-center flex w-full hover:bg-[#c0caba]">
          <FontAwesomeIcon icon={faHouse} className="flex justify-center items-center" />
          <p className="pl-4">Home</p>
        </button>

        <button className="px-4 py-2 font-bold justify-start items-center flex w-full hover:bg-[#c0caba]">
          <FontAwesomeIcon icon={faUser} className="" />
          <p className="pl-4">About</p>
        </button>
        <button className="px-4 py-2 font-bold justify-start items-center flex w-full hover:bg-[#c0caba]">
          <FontAwesomeIcon icon={faUserFriends} className="" />
          <p className="pl-4">Contact</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
