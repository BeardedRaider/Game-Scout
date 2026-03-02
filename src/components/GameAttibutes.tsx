import type Game from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefineItem from "./DefineItem";
import { formatDate } from "@/services/date-utils";
import EsrbBadge from "./ErsbBadge";

interface Props {
  game: Game;
}

const GameAttibutes = ({ game }: Props) => {
  const items = [
    {
      term: "Publishers",
      content: game.publishers?.map((publisher) => (
        <Text key={publisher.id}>{publisher.name}</Text>
      )),
    },
    {
      term: "Developers",
      content: game.developers?.map((dev) => (
        <Text key={dev.id}>{dev.name}</Text>
      )),
    },
    {
      term: "Release Date",
      content: <Text>{formatDate(game.released)}</Text>,
    },
    {
      term: "Approx Playtime",
      content: (
        <Text>{game.playtime ? `${game.playtime} hours` : "Unknown"}</Text>
      ),
    },
    {
      term: "ESRB Rating",
      content: <EsrbBadge rating={game.esrb_rating} />,
    },
  ];

  return (
    <SimpleGrid columns={1} as="dl">
      {items.map((item, index) => (
        <DefineItem
          key={item.term}
          term={item.term}
          isLast={index === items.length - 1}
        >
          {item.content}
        </DefineItem>
      ))}
    </SimpleGrid>
  );
};

export default GameAttibutes;
