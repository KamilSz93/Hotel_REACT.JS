import axios from "axios";

const instance = axios.create({
  baseURL:"https://hotels-react-156ed-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
