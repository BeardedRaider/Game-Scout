import ExpandText from "@/components/ExpandText";
import GameAttibutes from "@/components/GameAttibutes";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AspectRatio } from "@chakra-ui/react";
import { Tag, TagLabel, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import CriticScore from "@/components/CriticScore";
import PlatformIconList from "@/components/PlatformIconList";

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
          <Box position="absolute" bottom={4} left={4} color="white" zIndex={1}>
            <Heading size={{ base: "lg", md: "xl", lg: "2xl" }}>
              {game.name}
            </Heading>
          </Box>
        </Box>
      </AspectRatio>

      <Box mb={4}>
        {/* DESKTOP metadata tags section for genres, platforms, etc. */}
        <HStack
          spacing={6}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <Wrap>
            {game.genres.map((genre) => (
              <WrapItem key={genre.id}>
                <Tag size="lg" variant="subtle" colorScheme="gray">
                  <TagLabel>{genre.name}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
            size={8}
          />
          <Box textAlign="right">
            <HStack spacing={2} justify="flex end" align="center">
              <Box fontSize="sm" fontWeight="bold" color="gray.200">
                Critic Score
              </Box>
              <CriticScore
                score={game.metacritic}
                reviewsCount={game.reviews_count}
              />
            </HStack>
          </Box>
        </HStack>

        {/* MOBILE stacked vertically, desktop shows metadata tags in a horizontal row */}
        <Box display={{ base: "block", md: "none" }} mb={4}>
          <HStack justify="space-between" align="center">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              size={6}
            />

            <Box textAlign="right">
              <HStack spacing={2} justify="flex end" align="center">
                <Box fontSize="sm" fontWeight="bold" color="gray.200">
                  Rating
                </Box>
                <CriticScore score={game.metacritic} reviewsCount={game.reviews_count} />
              </HStack>
            </Box>
          </HStack>

          <Box mt={2}>
            <Wrap>
              {game.genres.map((genre) => (
                <WrapItem key={genre.id}>
                  <Tag size="sm" variant="subtle" colorScheme="gray">
                    <TagLabel>{genre.name}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Box>
      </Box>

      {/* //this is the main content area, will be a 2 column layout on desktop and stacked on mobile */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {/* //left column (not mobile), will be used for game details */}
        <Box>
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
