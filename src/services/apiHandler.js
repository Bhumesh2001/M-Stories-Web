import api from "./api";

export const callApi = async (endpoint, method = "GET", data = null, params = {}) => {
    try {
        const response = await api({
            url: endpoint,
            method,
            data,
            params,
        });
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};
