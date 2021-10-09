import { CardComponent } from "./ContentComponent";
import { card3, card2, card1 } from "../Picture";
const datas = [
  {
    img: card1,
    title: "haloo",
    description: "haloo",
  },
  {
    img: card2,
    title: "haloo",
    description: "haloo",
  },
  {
    img: card3,
    title: "haloo",
    description: "haloo",
  },
];

const CardsComponent = () => {
  return (
    <div class="flex flex-wrap">
      {datas.map((data) => {
        return (
          <CardComponent
            img={data.img}
            title={data.title}
            description={data.description}
          />
        );
      })}
    </div>
  );
};

export default CardsComponent;
