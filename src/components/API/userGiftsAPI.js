import Axios from "../Axios/Axios";

async function getAllUsersGiftsAPI() {
  try {
    let result = await Axios.get("/user-gifts");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getUserGiftAPI(id) {
  try {
    let result = await Axios.get(`/user-gifts/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function createUserGiftAPI(data) {
  try {
    let result = await Axios.post("/user-gifts", data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function updateUserGiftAPI(id, data) {
  try {
    let result = await Axios.put(`/user-gifts/${id}`, data);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function deleteUserGiftAPI(id) {
  try {
    let result = await Axios.delete(`/user-gifts/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllUsersGiftsAPI,
  getUserGiftAPI,
  createUserGiftAPI,
  updateUserGiftAPI,
  deleteUserGiftAPI,
};