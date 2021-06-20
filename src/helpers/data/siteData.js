import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getList } from './listData';

const dbUrl = firebaseConfig.databaseURL;
const apiUrl = `https://data.nashville.gov/resource/797j-5xh2.json?$$app_token=${firebaseConfig.appToken}`;
// const headers = {
//   Host: 'data.seattle.gov',
// Accept: 'application/json',
// X-App-Token: {appToken}
// }

const getAllSites = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}`)
    .then((response) => {
      const sitesArray = Object.values(response.data);
      resolve(sitesArray);
    })
    .catch((error) => reject(error));
});

// new FB call use Promise.All to 1) getList 2 getSites with same ListID

const addSite = (site) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/resourcelist.json`, site)
    .then((response) => {
      const body = { listID: response.data.name };
      axios.patch(`${dbUrl}/resourcelist/${response.data.name}.json`, body);
      getList().then((listArray) => resolve(listArray))
        .catch((error) => reject(error));
    });
});

export {
  getAllSites,
  addSite
};
