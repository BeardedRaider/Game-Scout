import { AspectRatio, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const TrailerSkeleton = () => {
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
        background="linear-gradient(90deg, #2d2d2d 0%, #3a3a3a 50%, #2d2d2d 100%)"
        backgroundSize="200% 100%"
        animation={`${shimmer} 1.5s infinite`}
      />
    </AspectRatio>
  );
};

export default TrailerSkeleton;
