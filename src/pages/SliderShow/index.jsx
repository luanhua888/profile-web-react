import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" ">
      <div className="w-auto flex-auto">
        <div className="bg-[#d2cdb0] justify-center items-center mx-10 rounded-sm p-2">
          <h2 className="flex justify-center items-center font-bold text-2xl">
            Slider Show
          </h2>
          <Slider {...settings} className="flex justify-center items-center">
            <div className="pl-4 flex justify-center items-center rounded-sm">
              <img
                className="w-full max-h-[590px] sm:max-h-[400px] md:max-h-[500px]"
                src="https://i.pinimg.com/564x/17/12/c9/1712c9ec77f883ee3f7d703e4d8f997f.jpg"
                alt=""
              />
            </div>
            <div className="pl-4 flex justify-center items-center rounded-sm">
              <img
                className="w-full max-h-[590px] sm:max-h-[400px] md:max-h-[500px]"
                src="https://i.pinimg.com/564x/95/fd/de/95fddef348c456e99ea14b98f51e52fb.jpg"
                alt=""
              />
            </div>
            <div className="pl-4 flex justify-center items-center rounded-sm">
              <img
                className="w-full max-h-[590px] sm:max-h-[400px] md:max-h-[500px]"
                src="https://i.pinimg.com/564x/18/15/8b/18158b86207d27112fde691d10c5bba1.jpg"
                alt=""
              />
            </div>
            <div className="pl-4 flex justify-center items-center rounded-sm">
              <img
                className="w-full max-h-[590px] sm:max-h-[400px] md:max-h-[500px]"
                src="https://i.pinimg.com/564x/de/09/c2/de09c24466d7c0b26c0f15184cddf2de.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderShow;
