import { Badge, Tooltip } from "@chakra-ui/react";

interface Props {
  score: number;
  reviewsCount?: number;
}

const CriticScore = ({ score, reviewsCount }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  const descriptions: Record<string, string> = {
    green: "Generally favourable reviews (75+).",
    yellow: "Mixed or average reviews (50–74).",
    red: "Generally unfavourable reviews (below 50).",
  };

  const baseText = descriptions[color];
  const countText = reviewsCount ? `Based on ${reviewsCount} reviews.` : "No reviews yet.";

  const tooltip = baseText + countText;

  return (
    <Tooltip label={tooltip} hasArrow placement="top">
      <Badge
        colorScheme={color}
        fontSize="md"
        paddingX={3}
        paddingY={1}
        borderRadius="md"
        cursor="help"
      >
        {score}
      </Badge>
    </Tooltip>
  );
};

export default CriticScore;
