import axios from "axios";

const instance = axios.create({
  baseURL: "https://hotel-react-b1c20-default-rtdb.firebaseio.com",
});

export default instance;
