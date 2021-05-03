export const HTTP_REQUEST = async (url) => {
  const response = await fetch(url)
  return response.json();
};