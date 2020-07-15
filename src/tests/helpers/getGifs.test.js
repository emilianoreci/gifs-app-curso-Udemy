import "@testing-library/jest-dom";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas a la fn getGifs del folder helpers", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("one punch");
    expect(gifs.length).toBe(10);
  });

  test("si no paso un argumento a la fn, debe de retornar  []", async () => {
    const gifs = await getGifs("");
    //console.log(gifs);
    expect(gifs.length).toBe(0);
    expect(gifs).toEqual([]);
  });
});
