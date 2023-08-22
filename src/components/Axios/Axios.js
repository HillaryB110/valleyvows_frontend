import Axios from "axios";

const AxiosInstance = Axios.create({
    baseURL: 
    process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.REACT_APP_API_URL,
    timeout:50000,
});

export default AxiosInstance;