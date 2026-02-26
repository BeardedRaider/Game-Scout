import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
    const platform = platforms?.find((p) => p.id === gameQuery.platformId);

  //game label / title logic
  const heading = `${platform?.name || ""}  ${
    genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={4} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
