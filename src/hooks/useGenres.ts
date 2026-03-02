import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres"; // Local static genre data shaped like RAWG's API
import type { FetchResponse } from "../services/api-client";
import type Genre from "../entities/Genre";

// Create a reusable API client for the /genres endpoint
const apiClient = new APIClient<Genre>("/genres");

// Fetch genres using React Query
const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"], // Cache key for this query
    queryFn: () => apiClient.getAll(), // Fetch genres from RAWG API
    staleTime: ms("24h"), // Keep data fresh for 24 hours
    initialData: genres, // Use static local data immediately (no loading flash)
  });

export default useGenres;
