import React from "react";
import FruitCard from "./FruitCard";
import { fruits } from "../data/fruits";

const FruitContent = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {fruits.map((fruit) => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};

export default FruitContent;
