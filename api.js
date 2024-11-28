import axios from "axios";

const api = axios.create({
  baseURL: "http://10.68.153.76:3000", // URL base da API
});

export default api;
