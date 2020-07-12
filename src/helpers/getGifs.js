export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=DDHuVVy4Vd8FgtogWGafHmiYTZvxdVqM&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  //console.log(data);
  const gifs = data.map((each) => {
    return {
      id: each.id,
      title: each.title,
      url: each.images?.downsized_medium.url,
    };
  });
  //console.log(gifs);
  return gifs;
};
