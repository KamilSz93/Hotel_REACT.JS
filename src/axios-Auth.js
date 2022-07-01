import axios from "axios";

  const instance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1",
    params: {
        key: "AIzaSyD7rn6Fv8Qu02b_HCNu_TmVd67J9AV8uf4",
    } 
        
  });

export default instance;
