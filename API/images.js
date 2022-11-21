const obtenerImagenes = async () => {
  let data = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_limit=100',
  );
  let json = await data.json();
  return json;
};

export {obtenerImagenes};
