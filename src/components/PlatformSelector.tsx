import usePlatforms from '@/hooks/usePlatforms'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const PlatformSelector = () => {
    const {data, error} = usePlatforms();

    if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />}>Platform</MenuButton>
        <MenuList>
            {/* Menu items will go here */}
            {data.map(platform => (
                <MenuItem key={platform.id}>{platform.name}</MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector