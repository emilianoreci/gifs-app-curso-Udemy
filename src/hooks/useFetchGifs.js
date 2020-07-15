//  @Package
import { useState, useEffect } from "react";

//  @Own
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    getGifs(category).then((gifs) =>
      setState({
        loading: false,
        data: gifs,
      })
    );
  }, [category]);
  return state;
};
