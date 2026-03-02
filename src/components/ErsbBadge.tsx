import { Badge, Tooltip } from "@chakra-ui/react";

interface Props {
  rating: { id: number; name: string } | null;
}

const EsrbBadge = ({ rating }: Props) => {
  if (!rating) return null;

  const name = rating.name;

  // Colour mapping
  let color: string;
  switch (name) {
    case "Everyone":
    case "Everyone 10+":
      color = "green";
      break;
    case "Teen":
      color = "yellow";
      break;
    case "Mature":
      color = "red";
      break;
    case "Adults Only":
      color = "purple";
      break;
    default:
      color = "gray";
  }

  // Tooltip descriptions with age numbers
  const descriptions: Record<string, string> = {
    Everyone: "Suitable for all ages (0+).",
    "Everyone 10+": "Suitable for ages 10 and up.",
    Teen: "Suitable for ages 13 and up. May contain mild violence or language.",
    Mature:
      "Suitable for ages 17 and up. May contain intense violence or strong language.",
    "Adults Only": "Suitable only for adults 18+. Contains explicit content.",
  };

  const tooltip = descriptions[name] || "ESRB rating information unavailable.";

  return (
    <Tooltip label={tooltip} hasArrow placement="top">
      <Badge
        colorScheme={color}
        fontSize="md"
        marginTop={1}
        paddingX={3}
        paddingY={1}
        borderRadius="md"
        cursor="help"
      >
        {name}
      </Badge>
    </Tooltip>
  );
};

export default EsrbBadge;
