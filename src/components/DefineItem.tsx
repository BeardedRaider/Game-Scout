import { Box, Heading } from '@chakra-ui/react';
import { type ReactNode } from 'react'
    
interface Props {
    term: string;
    children: ReactNode | ReactNode[];
    isLast?: boolean;
}

const DefineItem = ({ term, children, isLast }: Props) => {
  return (
    <Box
      pb={2}
      mb={2}
      borderBottom={isLast ? "none" : "1px solid"}
      borderColor="gray.600"
    >
      <Heading as="dt" size="md" color="gray.500">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

export default DefineItem
