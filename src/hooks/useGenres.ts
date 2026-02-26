import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres"; // Local static genre data shaped like RAWG's API
import type { FetchResponse } from "../services/api-client";

// Create a reusable API client for the /genres endpoint
const apiClient = new APIClient<Genre>("/genres");

// Define the Genre type based on RAWG's API response
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: { id: number; slug: string; name: string; added: number }[];
}

// Fetch genres using React Query
const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"], // Cache key for this query
    queryFn: () => apiClient.getAll(), // Fetch genres from RAWG API
    staleTime: ms("24h"), // Keep data fresh for 24 hours
    initialData: genres, // Use static local data immediately (no loading flash)
  });

export default useGenres;
