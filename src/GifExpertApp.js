//  @Package
import React, { useState } from "react";

//  @Own
import { AddCategories } from "./componets/AddCategories";
import { GifGrid } from "./componets/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["goku"]);

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
