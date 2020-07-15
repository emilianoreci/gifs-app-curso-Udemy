//  @Package
import React from "react";
import { PropTypes } from "prop-types";

//  @Own
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //hago destructuring y le cambio el nombre de data a images para usarlo.
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h2 className="animate__animated animate__fadeIn">{category}</h2>
      <div className="card-grid">
        {loading && <p>cargando...</p>}
        {images.map((eachElement) => (
          <GifGridItem key={eachElement.id} {...eachElement}></GifGridItem>
          /* <GifGridItem key={eachElement.id} img={eachElement}></GifGridItem> */
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
