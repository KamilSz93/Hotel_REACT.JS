import axios from "axios";

  const instance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1",
    params: {
      key: "AIzaSyDiRZ2b7wuThCGYlzLNHkQYD_67UDRiZ7I",
    },
  });

export default instance;
