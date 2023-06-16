import axios from "axios";

const appAxios = axios.create({
  baseURL: "https://gateway.marvel.com",
  withCredentials: false,
});

export default appAxios;
