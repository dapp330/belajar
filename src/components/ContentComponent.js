import { Carousel, Avatar, Card, Col, Row } from "antd";
import {
  UserOutlined,
  BookTwoTone,
  WifiOutlined,
  BugTwoTone,
} from "@ant-design/icons";
import "../App.css";
import { logo, logo1, logo2, ava1, ava2, ava3 } from "../Picture";

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

const AvatarComponent = () => {
  return (
    <div class="tc pa4 center flex-wrap mar1">
      <img
        src={ava1}
        class="color1 br-100 pa3  ba b b--black-10 h5 w5"
        alt="avatar"
      />
    </div>
  );
};

const { Meta } = Card;
const CardComponent = ({ title, img, description }) => {
  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src={img} class="db w-100 br2 br--top" />
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0">{title}</h1>
          </div>
        </div>
        <h2 class="f6 lh-copy measure mt2 mid-gray">{description}</h2>
      </div>
    </article>
  );
};

export { CarouselComponent, AvatarComponent, CardComponent };
