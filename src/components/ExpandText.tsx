import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 450; // Character limit before truncation

  if (!children) return null;// Handle empty or undefined text

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = isExpanded ? children : children.substring(0, limit) + "...";

  return (
    <Box fontSize="md" lineHeight="tall" color="gray.200">
      {summary}
      <Button
        size="xs"
        marginLeft={0.5}
        fontWeight="bold"
        colorScheme="green"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Box>
  );
};

export default ExpandText;
