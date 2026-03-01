import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5} display="flex" flexDirection="column">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
