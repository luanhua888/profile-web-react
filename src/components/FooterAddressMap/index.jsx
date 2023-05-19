import React from "react";

function index() {
  return (
    <div
      className="
        flex flex-row justify-around items-center  p-8 rounded-sm 
    "
    >
      <div
        className="
        text-2xl 
        text-center
        items-center    
        "
      >
        <h1 className="font-bold text-3xl ">Find Us</h1>
        <h2>Vinhomes Grand Park Quận 9</h2>
      </div>
      <div
        className="
        text-2xl 
        text-center
        items-center    
       
        "
      >
        <h1 className="font-bold text-3xl ">Call Us</h1>
        <h2>+84 961449382</h2>
      </div>
      <div
        className="
        text-2xl 
        text-center
        items-center    
      
        "
      >
        <h1 className="font-bold  text-3xl  ">Email</h1>
        <h2>
          <a href="mailto: luanhua8888@gmail.com ">luanhua8888@gmail.com</a>
        </h2>
      </div>
    </div>
  );
}

export default index;
