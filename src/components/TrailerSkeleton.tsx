import { AspectRatio, Skeleton } from "@chakra-ui/react";

const TrailerSkeleton = () => {
  return (
    <AspectRatio ratio={16 / 9} width="100%">
      <Skeleton
        width="100%"
        height="100%"
        borderRadius="8px"
        startColor="gray.700"
        endColor="gray.600"
      />
    </AspectRatio>
  );
};

export default TrailerSkeleton;
