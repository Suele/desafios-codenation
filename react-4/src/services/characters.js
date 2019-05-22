import Api from '../utils/api';
//publicKey: '48cad6d96d0302f3ce04409e00e49572',

class CharacterService {
  static getCharacters(payload) {
    const { publicKey: '48cad6d96d0302f3ce04409e00e49572', timeStamp, hash, limit, name } = payload;
    return Api.get(`/v1/public/comics/${payload}`).then(results => console.log(results));
  }
}

export default CharacterService;
