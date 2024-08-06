import React from "react";
import BannerImage from "../banner.jpeg";

function Banner() {
  return (
    <div
      className="flex items-end h-[20vh] md:h-[40vh] bg-cover"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    ></div>
  );
}

export default Banner;
