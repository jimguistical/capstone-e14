import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getList = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resourcelist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const listArray = Object.values(response.data);
        const withoutListNameArray = listArray.filter((listObj) => !listObj.listName);
        resolve(withoutListNameArray);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
const getListByListName = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resourcelist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const listNameArray = Object.values(response.data);
        const withListNameArray = listNameArray.filter((listNameObj) => !!listNameObj.listName);
        resolve(withListNameArray);
      } else {
        resolve([]);
      }
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

const getAllListData = (uid) => new Promise((resolve, reject) => {
  const getListNameArray = getListByListName(uid);
  const getSitesList = getList(uid);
  Promise.all([getListNameArray, getSitesList]);
  console.warn(getListNameArray, getSitesList)
    .then((listNameResponse, siteListResponse) => resolve(
      { getListNameArray: listNameResponse, getSitesList: siteListResponse }
    ))
    .catch((error) => reject(error));
});
// new FB call use Promise.All to get list array + sites array with same ListID

export {
  getList, getListByListName, createList, editList, getAllListData
};
