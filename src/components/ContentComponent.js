import { Carousel } from "antd";
import "../App.css";
import { logo, logo1, logo2 } from "../Picture";

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      <div>
        <img className="carouselStyle" src={logo} onClick="openNav()" />
      </div>
      <div>
        <img className="carouselStyle" src={logo1} />
      </div>
      <div>
        <img className="carouselStyle" src={logo2} />
      </div>
    </Carousel>
  );
};

export { CarouselComponent };
