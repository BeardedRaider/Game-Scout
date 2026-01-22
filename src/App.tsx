import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //lrg devices more than 1024px
      }}
    >
      {/* Your components will go here */}
      <GridItem area="nav" bg="Coral">
        Navigation Bar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="LightBlue">
          Aside Section
        </GridItem>
      </Show>
      <GridItem area="main" bg="LightGreen">
        Main Content
      </GridItem>
    </Grid>
  );
}

export default App;
