import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../componets/GifGridItem";

describe("Pruebas al <GifGridItem />", () => {
  const title = "La musica de hoy";
  const url = "https://localhost/algo";

  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test("Debe mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un <p/> con el title", () => {
    expect(wrapper.find("p").text().trim()).toBe(title);
  });

  test("La etiqueta img debe recibir los atributos/props src y alt", () => {
    const img = wrapper.find("img").props(); //prop() singular o props() plural
    //console.log(img.props().src);
    //console.log(img.props());
    //<img src="https://localhost/algo" alt="La musica de hoy"/>

    expect(img.src).toBe(url);
    expect(img.alt).toBe(title);
  });

  test("El div debe de tener la clase animate__fadeIn ", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
