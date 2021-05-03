import { HTTP_REQUEST } from './http.js';
import helpers from '../controller/helpers/helpers.js';

export const GET_FILM = async (URL) => {
  let result;

  await HTTP_REQUEST(URL).then(resp => {
    const { Response : success, Search : data, totalResults } = resp;    

    if(success && data) {
      result = data.map((element) => {
        element["price"] = helpers.RANDOM_NUMBER(50);
        return element;
      });
      result['totalResults'] = totalResults;
    }
    else if (success) {
      resp["price"] = helpers.RANDOM_NUMBER(50);
      result = resp;
    }
  });
  return result;
};
