import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getList = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resourcelist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const listArray = Object.values(response.data);
      resolve(listArray);
    })
    .catch((error) => reject(error));
});
const getListNameObj = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resourcelist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      // debugger;

      const listNameObj = Object.values(response.data);
      // if (listNameObj.includes('My')) {
      resolve(listNameObj);
      // } else {
      // resolve({});
      // }
    })
    .catch((error) => reject(error));
});

const createList = (list, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/resourcelist.json`, list)
    .then((response) => {
      const body = { listID: response.data.name };
      axios.patch(`${dbUrl}/resourcelist/${response.data.name}.json`, body)
        .then(() => {
          getList(uid).then((listArray) => resolve(listArray));
        })
        .catch((error) => reject(error));
    });
});

const editList = (list, listID, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/resourcelist/${listID}.json`, list)
    .then(() => getList(uid).then(resolve))
    .catch((error) => reject(error));
});

const deleteList = (listID, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/resourcelist/${listID}.json`)
    .then(() => getList(uid).then((listArray) => resolve(listArray))
      .catch((error) => reject(error)));
});

export {
  getList, getListNameObj, createList, editList, deleteList
};
