import type { GameQuery } from "@/App";
import useData from "./useData";

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
  rating_top: number;
}

//the api call to fetch games based on the gameQuery object, basically its using fuzzy search to filter the games based on the text endered in the search box, this causes when searching for grand, it also brings up gran as a result. ~It also filters based on genre, platform and sort order.

// To fix this we can add client-side filtering after fetching the data from the server.
const useGames = (gameQuery: GameQuery) => {
  const result = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery],
  );

  // Exact word match filter (client-side) how this works is by filter them down to exact matches and “grand” will ONLY match: Grand Theft Auto titles & NOT Gran Turismo
  if (gameQuery.searchText && result.data) {
    const regex = new RegExp(`\\b${gameQuery.searchText}\\b`, "i");
    result.data = result.data.filter((game) => regex.test(game.name));
  }
  return result;
};

export default useGames;
