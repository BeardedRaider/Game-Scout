import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //lrg devices more than 1024px
      }}
    >
      {/* Your components will go here */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside Section
        </GridItem>
      </Show>
      <GridItem area="main">
        Main Content
      </GridItem>
    </Grid>
  );
}

export default App;
