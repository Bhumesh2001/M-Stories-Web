import axios from "axios";

// render baseurl
// const baseUrl = "https://m-stories-backend-5ycj.onrender.com";

// vercel baseurl
const baseUrl = 'https://m-stories-backend.vercel.app';

// local
// const baseUrl = "http://localhost:5000";

const api = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
