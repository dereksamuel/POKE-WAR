const getAPI = async (id) => {
  const API = 'https://pokeapi.co/api/v2/pokemon/';
  let response;
  const ApiUrl = id ? `${API}${id}` : API;
  try {
    response = await fetch(ApiUrl);
    const data = await response.json();
    return data;
  } catch(e) {
    console.log('FETCH ERROR: ', e);
    return e;
  }
}

export default getAPI;
