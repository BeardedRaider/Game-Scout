import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}

// Functional component to display a grid of games
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6]; // Create an array of 6 skeletons

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding={"10px"}>
      // This fragment displays either an error or the list of games
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {/* Game card container this is for loading state */}
        {isLoading &&
          skeletons.map((skeleton) => (
            // Render a GameCardSkeleton for each item in the skeletons array
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              // Each game is rendered as a list item with a unique key
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && ( 
        <Button onClick={() => fetchNextPage()} marginY={4}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </Button>
      )}
    </Box>
  );
};

export default GameGrid;
