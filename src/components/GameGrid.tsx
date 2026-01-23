import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
// Define TypeScript interfaces for the game data



const GameGrid = () => {
  const { games, error } = useGames();
  

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
