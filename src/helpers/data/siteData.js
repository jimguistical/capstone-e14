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

const addSite = (site) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/list.json`, site)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/list.json/${site.building}`, body);
      getSites().then((sitesArray) => resolve(sitesArray))
        .catch((error) => reject(error));
    });
});

export { getSites, addSite };
