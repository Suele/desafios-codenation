import Api from '../utils/api';

class CharacterService {
  static getCharacters(payload) {
    const query = Object.keys(payload).reduce((query, key) => {
      return `${query}&${key}=${payload[key]}`;
    }, '?');

    return Api.get(`/v1/public/characters${query}`).then(res => res.data.data);
  }
}

export default CharacterService;
