import { Box, Heading } from '@chakra-ui/react';
import { type ReactNode } from 'react'
    
interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefineItem = ({ term, children }: Props) => {
  return (
    <Box marginY={4}>
        <Heading as='dt' size='md' color='gray.500'>
            {term}
        </Heading>
        <dd>
            {children}
        </dd>
    </Box>
    )
}

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

export default DefineItem
