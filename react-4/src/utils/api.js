import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com:443';

class Api {
  static get(uri) {
    console.log(axios.get(`${BASE_URL}${uri}`));
    return axios.get(`${BASE_URL}${uri}`);
  }
}

export default Api;
