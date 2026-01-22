import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '10a98ccdc35b40b2b03f6aaf9651ad4c'
    },
});

export default apiClient;