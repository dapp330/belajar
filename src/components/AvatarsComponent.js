import react from "react";
import { AvatarComponent } from "./Avatar";
import { pic1, pic2, pic3 } from "../Picture";

const avas = [
  {
    img: pic1,
  },
  {
    img: pic2,
  },
  {
    img: pic3,
  },
];

const AvatarsComponent = ({ additionalClassname }) => {
  return (
    <div className={additionalClassname}>
      {avas.map((ava) => {
        return <AvatarComponent img={ava.img} />;
      })}
    </div>
  );
};

export { AvatarsComponent };
