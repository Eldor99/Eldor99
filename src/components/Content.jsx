import React from "react";

const Content = () => {
  return (
    <div className="container">
      <div className="text">
        <div className="header">
          <h1>Hi, I am Eldor, Front-End Developer</h1>
        </div>
        <div className="paragraph">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            et consectetur earum commodi dolorem reprehenderit nisi perspiciatis
            distinctio eaque alias!
          </p>
        </div>
        <button>
          <a href="">Download Resume</a>
        </button>
      </div>
      <div className="image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
          alt="cat"
        />
      </div>
    </div>
  );
};

export default Content;
