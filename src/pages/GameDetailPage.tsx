import ExpandText from "@/components/ExpandText";
import GameAttibutes from "@/components/GameAttibutes";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2}} spacing={4}>
      {/* //left column, will be used for game details */}
      <Box>
        <Heading>{game?.name}</Heading>
        <ExpandText>{game?.description_raw}</ExpandText>
        <GameAttibutes game={game} />
      </Box>

      {/* //right column, will be used for trailers and screenshots */}
      <Box> 
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />

      </Box>
    </SimpleGrid >
  );
};

export default GameDetailPage;
