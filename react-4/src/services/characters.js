import Api from '../utils/api';
import moment from 'moment';
import md5 from 'crypto-js/md5';

class CharacterService {
  static getCharacters(payload) {
    payload = {
      publicKey: '48cad6d96d0302f3ce04409e00e49572',
      privateKey: '50ff75690f39e084e3e09e5621a4fcc434f1440e',
      timeStamp: moment().format(),
      hash: md5((payload.timeStamp + payload.privateKey + payload.publicKey).toString()),
      limit: '3000',
      name: 'Project Marvel'
    };
    console.log(payload);
    return Api.get(`/v1/public/comics/${payload}`).then(results => console.log(results));
  }
}

export default CharacterService;
