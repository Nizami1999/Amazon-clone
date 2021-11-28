import React from "react";
import bannerImg from "../../Images/banner.jpg";
import "./Banner.scss";

const Banner: React.FunctionComponent = () => {
  return (
    <div className="banner">
      <img className="banner-img" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
