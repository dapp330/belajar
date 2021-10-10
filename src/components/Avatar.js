import react from "react";

const AvatarComponent = ({ img }) => {
  return (
    <div
      style={{
        height: 150,
        width: 150,
      }}
      className="mb-50 br-100 ba b b--black-10 center mr3 flex justify-center bg-white"
    >
      <img src={img} className="w-60 mt3 mb4 h-60" />
    </div>
  );
};

export { AvatarComponent };
