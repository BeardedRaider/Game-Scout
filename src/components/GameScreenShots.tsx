import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import useScreenShots from "../hooks/useScreenShots";
import ScreenshotModal from "./ScreenshotModal";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading } = useScreenShots(gameId);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (isLoading) return null;

  const screenshots = data?.results?.map((s) => s.image) || [];

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={3}>
        {screenshots.slice(0, 9).map((shot, i) => (
          <Image
            key={i}
            src={shot}
            borderRadius={8}
            objectFit="cover"
            cursor="pointer"
            onClick={() => {
              setIndex(i);
              setIsOpen(true);
            }}
          />
        ))}
      </SimpleGrid>

      <ScreenshotModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        screenshots={screenshots}
        index={index}
        setIndex={setIndex}
      />
    </Box>
  );
};

export default GameScreenShots;
