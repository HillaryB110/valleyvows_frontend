import Axios from "../Axios/Axios";

async function getAllGiftsSentAPI() {
  try {
    let result = await Axios.get("/gift-sent");
    return result;
  } catch (error) {}
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
  getAllGiftsSentAPI,
  getGiftSentAPI,
  updateGiftSentAPI,
  deleteGiftSentAPI,
};
