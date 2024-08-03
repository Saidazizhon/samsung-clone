import React from "react";
const Banner = ({
  title,
  links,
  bg,
  name,
  desc,
  btn,
  btnColor,
  btnTextColor,
  descColor,
}) => {
  let link = links.map((el, i) => (
    <li key={i}>
      <a href="">{el}</a>
    </li>
  ));
  return (
    <div
      className="banner"
      style={{
        width: "100%",
        height: "810px",
        background: `url(${bg}) no-repeat center/cover`,
      }}
    >
      <h1 style={{color: descColor}}>{title}</h1>
      <ul style={{color: descColor}}>{link}</ul>
      <h2 style={{color: descColor}}>{name}</h2>
      <p style={{color: descColor}}>{desc}</p>
      <button style={{ background: btnColor, color: btnTextColor }}>
        {btn}
      </button>
    </div>
  );
};

export default Banner;