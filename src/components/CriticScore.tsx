import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red';

  return (
    // setting colorScheme will change the background color based on the score as well as the text color, setting just color will only change the text color
    <Badge colorScheme={color} fontSize='15px' paddingX={2} borderRadius='5px'>{score}</Badge>
  )
}

interface Props {
    score: number;
}

export default CriticScore
