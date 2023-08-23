import Axios from "../Axios/Axios";


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
    let result = await Axios.delete(`/profile/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllProfilesAPI,
  getUserProfileAPI,
  displayUserProfileAPI,
  updateUserProfileAPI,
  deleteUserProfileAPI
};