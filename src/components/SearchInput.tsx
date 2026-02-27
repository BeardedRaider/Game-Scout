import useGameQueryStore from '@/store';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      // Add search logic here
        if (ref.current) {
            setSearchText(ref.current.value);
        }
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
        </InputGroup>
    </form>
  )
}

export default SearchInput
