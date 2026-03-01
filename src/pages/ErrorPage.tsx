import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5} marginTop={5}>
      <Heading>Oh No! Something went wrong.</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This is not the page you were you were looking for."
          : "An unexpected error occurred."}
      </Text>
        </Box>
    </>
  );
};

export default ErrorPage;
