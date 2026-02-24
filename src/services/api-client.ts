import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

// Define interface for the API response
export interface FetchResponse<T> {
  count: number;
  results: T[];

}


export default apiClient;
