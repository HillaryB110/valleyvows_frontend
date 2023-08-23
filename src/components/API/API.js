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
   let result =  await Axios.delete(`/profile/${id}`);
   return result;
  } catch (error) {
    console.log(error);
  }
}

async function getAllGiftsSentAPI() {
  try {
    let result = await Axios.get("/gift-sent");
    return result;
  } catch (error) {
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


async function getAllGiftsAPI() {
  try {
    let result = await Axios.get("/gifts");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getGiftAPI(id) {
  try {
    let result = await Axios.get(`/gifts/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function createGiftAPI(data) {
  try {
    let result = await Axios.post("/gifts", data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function updateGiftAPI(id, data) {
  try {
    let result = await Axios.put(`/gifts/${id}`, data);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function deleteGiftAPI(id) {
  try {
    let result = await Axios.delete(`/gifts/${id}`);
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
  getAllUsersGiftsAPI,
  getUserGiftAPI,
  createUserGiftAPI,
  updateUserGiftAPI,
  deleteUserGiftAPI,
  getAllGiftsAPI,
  getGiftAPI,
  createGiftAPI,
  updateGiftAPI,
  deleteGiftAPI
};
