import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface Game {
  id: number;
  name: string;
}// Define interface for the API response

interface FetchGamesResponse {
  count: number;
  results: Game[];
}// GameGrid component to fetch and display games

const useGames = () => {
  // Hook implementation goes here
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
// Fetch games from the API on component mount

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);// Render the list of games or an error message

    return { games, error };
};



export default useGames;