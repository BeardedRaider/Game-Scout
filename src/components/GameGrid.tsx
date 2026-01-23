import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
// Define TypeScript interfaces for the game data



const GameGrid = () => {
  const { games, error } = useGames();
  

  return (
    // This fragment displays either an error or the list of games
    <>
      {error && <div>Error: {error}</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={10}> 
        {/* // Map through the games and display their names */}
        {games.map((game) => (
            // Each game is rendered as a list item with a unique key
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
