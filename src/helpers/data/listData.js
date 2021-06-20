import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getList = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resourcelist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const listArray = Object.values(response.data);
      const withoutListNameArray = listArray.filter((listObj) => !listObj.listName);
      resolve(withoutListNameArray);
      debugger;
    })
    .catch((error) => reject(error));
});
const getListByListName = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resourcelist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const listNameArray = Object.values(response.data);
      const withListNameArray = listNameArray.filter((listNameObj) => !!listNameObj.listName);
      resolve(withListNameArray);
    })
    .catch((error) => reject(error));
});

const createList = (list, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/resourcelist.json`, list)
    .then((response) => {
      const body = { listID: response.data.name };
      axios.patch(`${dbUrl}/resourcelist/${response.data.name}.json`, body)
        .then(() => {
          getListByListName(uid).then((listArray) => resolve(listArray));
        })
        .catch((error) => reject(error));
    });
});

const editList = (list, listID, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/resourcelist/${listID}.json`, list)
    .then(() => getListByListName(uid).then(resolve))
    .catch((error) => reject(error));
});

const deleteList = (listID, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/resourcelist/${listID}.json`)
    .then(() => getListByListName(uid).then((listArray) => resolve(listArray))
      .catch((error) => reject(error)));
});

export {
  getList, getListByListName, createList, editList, deleteList
};
