import useData from "./useData";

// Define interface for the API response
interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useData<Genre>("/genres");



export default useGenres;