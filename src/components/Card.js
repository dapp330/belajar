import React from "react";

const CardComponent = ({ title, img, description }) => {
  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src={img} class="db w-100 br2 br--top" />
      <div class="pa2 ph3-ns pb3-ns bg-black">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0 b near-white">{title}</h1>
          </div>
        </div>
        <h2 class="f6 lh-copy measure mt2 mid-gray">{description}</h2>
      </div>
    </article>
  );
};

export { CardComponent };
