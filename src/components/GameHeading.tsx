import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  //game label / title logic
  const heading = `${platform?.name || ""}  ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={4} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
