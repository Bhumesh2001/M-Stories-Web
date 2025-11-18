import axios from "axios";
// const baseUrl = "https://m-stories-backend-5ycj.onrender.com";
const baseUrl = "http://localhost:5000";

const api = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
