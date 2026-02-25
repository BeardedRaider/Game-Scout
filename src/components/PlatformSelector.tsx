import  type { Platform } from '../hooks/usePlatforms'
import  usePlatforms from '../hooks/usePlatforms'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform?: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const {data, error} = usePlatforms();

    if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}</MenuButton>
        <MenuList>
            {/* Menu items will go here */}
            {data?.map((platform: Platform) => (
                <MenuItem onClick={() => onSelectPlatform(platform) } key={platform.id}>{platform.name}</MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector