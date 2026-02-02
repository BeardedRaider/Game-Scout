import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './Searchinput';

const NavBar = () => {
  return (
    <HStack padding='10px'>
        {/* Navigation bar content goes here */}
        <Image src={logo} boxSize= '60px' />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
