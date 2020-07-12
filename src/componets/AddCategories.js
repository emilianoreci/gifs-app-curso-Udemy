import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //En vez de recibir las categories por props
    //setCategories([...categories, inputValue]);
    if (inputValue.trim().length > 2) {
      setCategories((cate) => [inputValue, ...cate]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>AddCategories</h2>
      <input type="text" value={inputValue} onChange={handleValueChange} />
    </form>
  );
};

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
