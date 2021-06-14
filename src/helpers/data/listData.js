import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getList = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resourcelist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const sitesArray = Object.values(response.data);
      resolve(sitesArray);
      console.warn('getList', response.data);
    })
    .catch((error) => reject(error));
});

const createList = (list, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/resourcelist.json`, list)
    .then((response) => {
      const body = { listID: response.data.name };
      axios.patch(`${dbUrl}/resourcelist/${response.data.name}.json`, body);
      getList(uid).then((listArray) => resolve(listArray))
        .catch((error) => reject(error));
    });
});

const editList = (list, listID, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/resourcelist/${listID}.json`, list)
    .then(() => getList(uid).then(resolve))
    .catch((error) => reject(error));
});

export { createList, getList, editList };
