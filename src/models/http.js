export const httpRequest = async (search = "comedy", year = "2020", type = "movie", page = "1", ) => {
  const url = `http://www.omdbapi.com/?s=${search}&y=${year}&type=${type}&page=${page}&apikey=41d927ce`;
  const response = await fetch(url)
  return response.json();
};