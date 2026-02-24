import { useQuery } from "@tanstack/react-query";
import genresData from "../data/genres";
import apiClient from "@/services/api-client";
import type { FetchResponse } from "./useData";

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
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    placeholderData: {
      count: genresArray.length,
      results: genresArray,
      next: null,
      previous: null,
    },
  });

export default useGenres;
