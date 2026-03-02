import ExpandText from "@/components/ExpandText";
import GameAttibutes from "@/components/GameAttibutes";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AspectRatio } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box>
      {/* HERO BANNER */}
      <AspectRatio ratio={16 / 6} mb={6}>
        <Box position="relative" borderRadius={10} overflow="hidden">
          {/* Background image + gradient overlay to make text more readable */}
          <Box
            position="absolute"
            inset={0} // inset 0 means top: 0, right: 0, bottom: 0, left: 0
            backgroundImage={`linear-gradient(to bottom, 
            rgba(0,0,0,0.3), 
            rgba(0,0,0,0.7)), 
            url(${game.background_image})`}
            backgroundSize="cover"
            backgroundPosition="center"
          />
          {/* Title overlay */}
          <Box 
            position="absolute" 
            bottom={4} left={4} 
            color="white" 
            zIndex={1}>
            <Heading size={{ base: "lg", md: "xl", lg: "2xl" }}>
              {game.name}
            </Heading>
          </Box>
        </Box>
      </AspectRatio>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
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
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
