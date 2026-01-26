import { SimpleGrid } from "@chakra-ui/react";
import useGames, { type Game, type Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
// Define TypeScript interfaces for the game data

interface Props {
  gameQuery: GameQuery

}

// Functional component to display a grid of games
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6]; // Create an array of 6 skeletons

  return (
    // This fragment displays either an error or the list of games
    <>
      {error && <div>Error: {error}</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={3}
      >
        {/* Game card container this is for loading state */}
        {isLoading &&
          skeletons.map((skeleton) => (
            // Render a GameCardSkeleton for each item in the skeletons array
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {/* // Map through the games and display their names */}
        {data.map((game) => (
          // Each game is rendered as a list item with a unique key
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
