import useGameQueryStore from "@/store";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const SortSelector = () => {
  const SortOrders = [
    { value: "relevance", label: " Relevance" },
    { value: "-added", label: " Date Added" }, // '-' means descending order add it to the start of the value
    { value: "name", label: " Name" },
    { value: "-released", label: " Release date" },
    { value: "-metacritic", label: " Popularity" },
    { value: "-rating", label: " Average Rating" },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = SortOrders.find(
    (order) => order.value === sortOrder,
  );
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const onSelectSortOrder = (sortOrder: string) => {
    setSelectedSortOrder(sortOrder);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by: {currentSortOrder ? currentSortOrder.label : " Relevance "}
      </MenuButton>
      <MenuList>
        {SortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
