import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  //game label / title logic
  const heading = `${platform?.name || ""}  ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={4} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
