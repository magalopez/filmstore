const RANDOM_NUMBER = (length) => {
  const MAX = length;
  const initialRandom = Math.random();
  const multiplied = initialRandom * MAX;
  const answer = Math.floor(multiplied);
  return answer;
};

const GET_URL = (typeSearch, keyword, year, typeFilm, page, ) => {
  switch (typeSearch) {
    case "general":
      typeSearch = "s"
      break;
    case "id":
      typeSearch = "i"
      break;
    default:
      typeSearch = "s"
      break;
  }
  const URL = `http://www.omdbapi.com/?${typeSearch}=${keyword}${year?"&y="+year:""}${typeFilm?"&type="+typeFilm:""}${page?"&page="+page:""}&apikey=41d927ce`;
  return URL;
};

const GET_LOCALSTORAGE = key => JSON.parse(localStorage.getItem(key));

const SET_LOCALSTORAGE = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const REMOVE_LOCALSTORAGE = key => localStorage.removeItem(key);

export default  {
  RANDOM_NUMBER,
  GET_URL,
  GET_LOCALSTORAGE,
  SET_LOCALSTORAGE,
  REMOVE_LOCALSTORAGE
}
