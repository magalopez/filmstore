const randomNumber = (length) => {
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

export default  {
  randomNumber,
  GET_URL,
}
