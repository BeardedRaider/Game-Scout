import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder?: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const SortOrders = [
    { value: "relevance", label: " Relevance" },
    { value: "-added", label: " Date Added" }, // '-' means descending order add it to the start of the value
    { value: "name", label: " Name" },
    { value: "-released", label: " Release date" },
    { value: "-metacritic", label: " Popularity" },
    { value: "-rating", label: " Average Rating" },
  ];

  const currentSortOrder = SortOrders.find(order => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by: {currentSortOrder ? currentSortOrder.label : " Relevance "}
      </MenuButton>
      <MenuList>
        {SortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
