import { useQuery } from "@tanstack/react-query";
import genresData from "../data/genres";
import APIClient from "@/services/api-client";
import type { FetchResponse } from "../services/api-client";


const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: { id: number; slug: string; name: string; added: number }[];
}

const genresArray = genresData.results;

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
    placeholderData: {
      count: genresArray.length,
      results: genresArray,
    },
  });

export default useGenres;
