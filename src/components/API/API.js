import Axios from "../Axios/Axios";

async function getAllDatingPoolUsersAPI() {
  try {
    let result = await Axios.get("dating-pool");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getSingleDatingPoolUserAPI(id) {
  try {
    let result = await Axios.get(`/dating-pool/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getAllProfilesAPI() {
  try {
    let result = await Axios.get("/profile");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getUserProfileAPI(id) {
  try {
    let result = await Axios.get(`/profile/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function displayUserProfileAPI(data) {
  try {
    let result = Axios.post(`/profile`, data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function updateUserProfileAPI(id, data) {
  try {
    let result = await Axios.put(`/profile/${id}`, data);
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function deleteUserProfileAPI(id) {
  try {
    await Axios.delete(`/profile/${id}`);
  } catch (error) {
    console.log(error);
  }
}

async function getAllGiftsSentAPI() {
  try {
    let result = await Axios.get("/gift-sent");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getGiftSentAPI(id) {
  try {
    let result = await Axios.get(`/gift-sent/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function updateGiftSentAPI(id, data) {
  try {
    let result = await Axios.put(`/gift-sent/${id}`, data);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function deleteGiftSentAPI(id) {
  try {
    let result = await Axios.delete(`/gift-sent/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
 

export {
  getAllDatingPoolUsersAPI,
  getSingleDatingPoolUserAPI,
  getAllProfilesAPI,
  getUserProfileAPI,
  displayUserProfileAPI,
  updateUserProfileAPI,
  deleteUserProfileAPI,
  getAllGiftsSentAPI,
  getGiftSentAPI,
  updateGiftSentAPI,
  deleteGiftSentAPI,
};