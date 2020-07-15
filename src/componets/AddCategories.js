//  @Package
import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("handleSubmit--llamado, ", inputValue); para el test

    //En vez de recibir las categories por props
    //setCategories([...categories, inputValue]);
    if (inputValue.trim().length > 2) {
      setCategories((cate) => [inputValue, ...cate]); //es un set de useState()
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>AddCategories</h2>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
