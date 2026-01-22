import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Logo.webp';


const NavBar = () => {
  return (
    <HStack>
        {/* Navigation bar content goes here */}
        <Image src={logo} boxSize= '60px' />
        <Text fontSize='2xl' fontWeight='bold'>Game Scout</Text>
    </HStack>
  )
}

export default NavBar
