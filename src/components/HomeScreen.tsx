import {
  Grid,
  GridItem,
} from "@chakra-ui/react";
import TaskBar from "./TaskBar";
import AppWindow from "./AppWindow";

function HomeScreen() {

  return (
    <div className="w-screen h-screen bg-cover bg-[url('../src/assets/images/wallpapers/chromeos_wallpaper1.webp')]">
      <Grid
        templateAreas={`"main"
                  "footer"`}
        gridTemplateRows={"94% 6%"}
        h="100%"
      >
        <GridItem area={"main"}>    
        <AppWindow />
        </GridItem>
        <GridItem area={"footer"} backgroundColor="#1A2A4B" borderTopRadius="2xl">
          <TaskBar/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default HomeScreen;
