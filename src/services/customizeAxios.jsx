import axios from "axios";

const instance = axios.create({
  baseURL: "https://websitebook-api.vercel.app",
});

export default instance;
