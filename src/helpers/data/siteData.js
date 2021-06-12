import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const apiUrl = `https://data.nashville.gov/resource/797j-5xh2.json?$$app_token=${firebaseConfig.appToken}`;
// const headers = {
//   Host: 'data.seattle.gov',
// Accept: 'application/json',
// X-App-Token: {appToken}
// }

const getSites = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}`)
    .then((response) => {
      const sitesArray = Object.values(response.data);
      resolve(sitesArray);
    })
    .catch((error) => reject(error));
});

const getList = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/list.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const sitesArray = Object.values(response.data);
      resolve(sitesArray);
      // console.warn('getList', response.data);
    })
    .catch((error) => reject(error));
});

const addSite = (site, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/list.json`, site)
  // console.warn(site)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      console.warn(response.data.name);
      axios.patch(`${dbUrl}/list/${response.data.name}.json`, body);
      getList(uid).then((listArray) => resolve(listArray))
        .catch((error) => reject(error));
    });
});

export { getSites, addSite };
