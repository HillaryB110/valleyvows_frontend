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

export {
  getAllDatingPoolUsersAPI,
  getSingleDatingPoolUserAPI,
}