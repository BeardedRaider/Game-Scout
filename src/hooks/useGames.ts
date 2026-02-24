import type { GameQuery } from "@/App";
import type { FetchResponse } from "./useData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms?: { id: number; name: string; slug: string }[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  // Convert parent platform → child platform IDs
  const platformIds = gameQuery.platform
    ? gameQuery.platform?.platforms?.map((p) => p.id).join(",")
    : undefined;

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            platforms: platformIds,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
};

export default useGames;
