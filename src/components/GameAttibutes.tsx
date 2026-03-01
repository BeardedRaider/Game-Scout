import type Game from '@/entities/Game';
import { SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefineItem from './DefineItem';

interface Props {
    game: Game;
}

const GameAttibutes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      {/*Boxes for Platform  - Genres - Developers - Publishers, each with a heading and list of items*/}
      <DefineItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefineItem>

      <DefineItem term="Metacritic Score">
        <CriticScore score={game.metacritic} />
      </DefineItem>

      <DefineItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefineItem>
      <DefineItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefineItem>
    </SimpleGrid>
  );
}

export default GameAttibutes
