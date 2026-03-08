import CriticScore from "@/components/CriticScore";
import ExpandText from "@/components/ExpandText";
import GameAttibutes from "@/components/GameAttibutes";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import PlatformIconList from "@/components/PlatformIconList";
import useGame from "@/hooks/useGame";
import {
  Box,
  Grid,
  Heading,
  HStack,
  Spinner,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box>
      {/* HERO BANNER */}
      <Box
        position="relative"
        height={{ base: "200px", md: "300px", lg: "350px" }}
        borderRadius={10}
        overflow="hidden"
        mb={6}
      >
        <Box
          position="absolute"
          inset={0}
          backgroundImage={`linear-gradient(to bottom,
            rgba(0,0,0,0.3),
            rgba(0,0,0,0.7)
          ), url(${game.background_image})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />

        <Box position="absolute" bottom={4} left={4} color="white" zIndex={1}>
          <Heading size={{ base: "lg", md: "xl", lg: "2xl" }}>
            {game.name}
          </Heading>
        </Box>
      </Box>

      {/* METADATA ROW */}
      <Box mb={4}>
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
            <HStack spacing={2} justify="flex-end" align="center">
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

        {/* MOBILE METADATA */}
        <Box display={{ base: "block", md: "none" }} mb={4}>
          <HStack justify="space-between" align="center">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              size={6}
            />

            <Box textAlign="right">
              <HStack spacing={2} justify="flex-end" align="center">
                <Box fontSize="sm" fontWeight="bold" color="gray.200">
                  Rating
                </Box>
                <CriticScore
                  score={game.metacritic}
                  reviewsCount={game.reviews_count}
                />
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

      {/* ============================
          TOP ROW (Description + Trailer)
          ============================ */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={10}>
        {/* LEFT: DESCRIPTION */}
        <Box>
          <Heading size="md" mb={3} color="gray.100">
            Description
          </Heading>
          <ExpandText>{game.description_raw}</ExpandText>
        </Box>

        {/* RIGHT: TRAILER */}
        <Box>
          <GameTrailer 
            gameId={game.id} 
            gameName={game.name} />
        </Box>
      </Grid>

      {/* ============================
          BOTTOM ROW (Screenshots + Additional Info)
          ============================ */}
      <Grid templateColumns={{ base: "1fr", md: "1fr auto" }} gap={6}>
        {/* LEFT: SCREENSHOTS */}
        <Box>
          <Heading size="md" mb={3} color="gray.100">
            Screenshots
          </Heading>
          <GameScreenShots gameId={game.id} />
        </Box>

        {/* RIGHT: ADDITIONAL INFO */}

        <Box
          maxW={{ base: "100%", md: "320px", lg: "360px" }}
          ml={{ base: 0, md: "auto" }}
        >
          <Heading size="md" mb={3} color="gray.100">
            Additional Information
          </Heading>

          <Box
            p={4}
            borderRadius="md"
            bg="gray.700"
            border="1px solid"
            borderColor="gray.600"
          >
            <GameAttibutes game={game} />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default GameDetailPage;
