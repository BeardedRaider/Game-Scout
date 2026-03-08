import { AspectRatio, Box } from "@chakra-ui/react";

interface Props {
  poster: string;
}

const BlurredPoster = ({ poster }: Props) => {
  return (
    <AspectRatio
      ratio={16 / 9}
      width="100%"
      borderRadius="8px"
      overflow="hidden"
    >
      <Box
        width="100%"
        height="100%"
        backgroundImage={`url(${poster})`}
        backgroundSize="cover"
        backgroundPosition="center"
        filter="blur(20px)"
        transform="scale(1.1)"
      />
    </AspectRatio>
  );
};

export default BlurredPoster;
