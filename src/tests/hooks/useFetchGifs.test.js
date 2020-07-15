import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("pruebas a  los hooks con libreria. Aqui hook useFetchGifs", () => {
  test("debe retornar el estado inicial", async () => {
    //si no se usa la libreria hook, arroja un error "los hooks deben estar en un functional component"
    //const { data: images, loading } = useFetchGifs(category);
    //console.log(data,loading)

    //destructuring result de renderHook
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Batman")
    );
    //console.log(result);
    //destructuring de result, para acceder a los valores data y loading
    const { data, loading } = result.current;
    //console.log(data, loading); //[], true

    await waitForNextUpdate(); //espera a q se modifique el state y no arroje error de "el componente ha sido desmontado..."

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("debe retornar un array de imgs y setear el loading en false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Batman")
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
