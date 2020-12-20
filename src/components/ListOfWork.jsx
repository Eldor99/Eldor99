import React from "react";
import { works } from "../works";
import Card from "./Card";

const ListOfWork = () => {
  return (
    <div className="works">
      {works.map((work) => {
        return (
          <Card
            img={work.image}
            title={work.title}
            description={work.description}
            key={work.image}
          />
        );
      })}
    </div>
  );
};

export default ListOfWork;
