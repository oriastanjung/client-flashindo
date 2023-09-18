import axios from "axios";
export const ENDPOINT = {
  TASKS: "/tasks",
};

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

const api = axios.create({
    baseURL : `${import.meta.env.VITE_APP_BACKEND_URL}`,
    headers
})

export default api