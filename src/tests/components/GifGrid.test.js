//  @Package
import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

//  @Own
import { GifGrid } from "../../componets/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

//falsea el uso de la funcion useFetchGifs
jest.mock("../../hooks/useFetchGifs");

describe("Prueba al archivo GifGrid", () => {
  const category = "batman";

  test("Se debe mostrar correctamente el componente <GifGrid", () => {
    //falsea el valor que retorna la fn, cuando se carga el componente por 1° vez.
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrarse los items cuando se cargan las imagenes con useFetchGifs", () => {
    const gifs = [
      {
        id: "ab123",
        url: "http://localhost/algo/ray.jpg",
        title: "Algun titulo",
      },
      {
        id: "225",
        url: "http://localhost/algo/otro.jpg",
        title: "titulo 2....",
      },
    ];

    //simula que recibio un gif
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();

    //como el loading esta en false, no deberia existir una <p/>
    expect(wrapper.find("p").exists()).toBe(false);

    //espera que haya tantos GifGridItem como la longitud que tenga el array gifs.
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
