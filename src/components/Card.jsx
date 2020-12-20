import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div>
      <div className="card">
        <img src={img} alt="img" />
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="">go</a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card;
