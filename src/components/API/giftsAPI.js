import Axios from "../Axios/Axios";






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
  getAllGiftsAPI,
  getGiftAPI,
  createGiftAPI,
  updateGiftAPI,
  deleteGiftAPI
};