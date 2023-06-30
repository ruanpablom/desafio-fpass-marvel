import axios from "axios";

const baseService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export { baseService };