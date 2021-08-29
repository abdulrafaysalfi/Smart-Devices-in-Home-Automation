import axios from "axios";

const instance = axios.create({
  baseURL: "https://homeautomationproject.herokuapp.com/",
});

export default instance;
