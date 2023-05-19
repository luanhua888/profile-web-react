import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function index() {
  return (
    <div className="p-2 gap-2">
      <h1 className="text-3xl font-bold">FIND US</h1>
      <h2 className="text-2xl text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        quasi iusto explicabo, possimus repudiandae quos quae! Impedit
        laudantium iste quaerat alias asperiores ipsam, est sint neque eos sunt
        corporis amet?
      </h2>
      <div className="text-xl flex flex-row p-2">
        <FontAwesomeIcon icon={faLocationDot} />
        <h2 className="pl-2">Vinhomes Grand Park Quận 9</h2>
      </div>
      {/* address */}
      <div className="text-xl flex flex-row p-2">
        <FontAwesomeIcon icon={faPhone} />
        <h2 className="pl-2">
          <a href="tel:0123456789">+84 961449382</a>
        </h2>
      </div>
      {/* mail */}
      <div className="text-xl flex flex-row p-2">
        <FontAwesomeIcon icon={faEnvelope} />
        <h2 className="pl-2">luanhua8888@gmail.com</h2>
      </div>
    </div>
  );
}

export default index;
