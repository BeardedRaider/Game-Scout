import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
// Define TypeScript interfaces for the game data

interface Game {
  id: number;
  name: string;
}// Define interface for the API response

interface FetchGamesResponse {
  count: number;
  results: Game[];
}// GameGrid component to fetch and display games

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
// Fetch games from the API on component mount

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);// Render the list of games or an error message

  return (
    // This fragment displays either an error or the list of games
    <>
      {error && <div>Error: {error}</div>}
      <ul> 
        {/* // Map through the games and display their names */}
        {games.map((game) => (
            // Each game is rendered as a list item with a unique key
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
