import type { GameQuery } from "@/App";
import useData from "./useData";
import type { Genre } from "@/hooks/useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  // Define interface for a game
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = ( gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    { params: { 
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id 
    } },
    [
// This array contains the dependencies for the hook that will trigger a refetch when they change
      gameQuery
    ],
  );

export default useGames;
