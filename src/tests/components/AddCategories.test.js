import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategories } from "../../componets/AddCategories";

describe("Pruebas al componente AddCategories", () => {
  //const setCategories = () => {}; // manera provisoria para testear una fn.
  const setCategories = jest.fn(); //es una fn
  let wrapper = shallow(<AddCategories setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategories setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar el valor del input de texto", () => {
    const input = wrapper.find("input");
    const value = "hola mundo";

    //el segundo argumento de simulate, se pone {} que seria el e(event)
    //input.simulate('change', {})
    //al e.target.value
    input.simulate("change", { target: { value: value } });
    expect(wrapper.find("p").text().trim()).toEqual(value);
  });

  test("No debe de postear la informacion con el submit", () => {
    //provee los argumentos que se transformaran en el evento, en éste caso el e.preventDefault
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar a setCategories() y limpiar la caja de texto", () => {
    const value = "banana";

    // simular el inputChange
    wrapper.find("input").simulate("change", { target: { value: value } });

    // simular el submit
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    // se debe de haber llamado setCategories
    expect(setCategories).toHaveBeenCalled();
    //.toHaveBeenCalledTimes(3) se espera que llame a setCategories 3 veces
    //expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //espera q se llame a la fn setCategories y que se le pase como argumento una funcion.

    // el valor de input debe ser ''
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
