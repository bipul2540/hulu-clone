import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//https://api.themoviedb.org/3/trending/all/week?api_key=0a9f35c23e3bfdeb27a7011df29d671c&language=en-US
