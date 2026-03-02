import type Game from '@/entities/Game';
import { SimpleGrid, Text } from '@chakra-ui/react';
import DefineItem from './DefineItem';
import { formatDate } from '@/services/date-utils';
import EsrbBadge from './ErsbBadge';

interface Props {
    game: Game;
}

const GameAttibutes = ({ game }: Props) => (
  <SimpleGrid columns={2} as="dl">
    <DefineItem term="Publishers">
      {game.publishers?.map((publisher) => (
        <Text key={publisher.id}>{publisher.name}</Text>
      ))}
    </DefineItem>

    <DefineItem term="Developers">
      {game.developers?.map((dev) => (
        <Text key={dev.id}>{dev.name}</Text>
      ))}
    </DefineItem>

    <DefineItem term="Release Date">
      <Text>{formatDate(game.released)}</Text>
    </DefineItem>

    <DefineItem term="Approx Playtime">
      <Text>{game.playtime ? `${game.playtime} hours` : "Unknown"}</Text>
    </DefineItem>

    <DefineItem term="ESRB Rating">
      <EsrbBadge rating={game.esrb_rating} />
    </DefineItem>
    
  </SimpleGrid>
);

export default GameAttibutes
