//  @Package
import React, { useState } from "react";

//  @Own
import { AddCategories } from "./componets/AddCategories";
import { GifGrid } from "./componets/GifGrid";

const GifExpertApp = ({ defaultCategory = [] }) => {
  //const [categories, setCategories] = useState(["goku"]);
  //En vez de poner directamente goku en el useState, lo paso por propsDefault
  const [categories, setCategories] = useState(defaultCategory);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategories setCategories={setCategories} />

      {categories.map((each) => (
        <GifGrid key={each} category={each} />
      ))}
    </>
  );
};

export default GifExpertApp;
