import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas al archivo GifExpertApp", () => {
  test("Debe mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrarse una lista de categorias", () => {
    const categories = ["batman", "sun"];

    const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);

    expect(wrapper).toMatchSnapshot();

    //espera que encuentre tantos GifGrid como categories.length
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
