import {
    Box,
    Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  Spacer,
  VStack,
  Icon,
  useBoolean,
  ScaleFade,
} from "@chakra-ui/react";
import TaskBar from "./TaskBar";
import { Rnd } from "react-rnd";
import { MdClose, MdMinimize, MdOutlineMinimize, MdOutlineSquare } from "react-icons/md";
import Iframe from "react-iframe";
import { MyContext } from "./MyContext";
import { useState } from "react";

function HomeScreen() {

    const [appWindow, setAppWindow] = useBoolean(false);
    const [windowProps, setWindowProps] = useState({
        x: 273,
        y: 84,
        width: 820,
        height: 480,
    });

    const handleMaximize = () => {
        if (windowProps.width == window.innerWidth) {
            setWindowProps({
                x: 273,
                y: 84,
                width: 820,
                height: 480,
            });
        } else {
            setWindowProps({
                x: 0,
                y: 0,
                width: window.innerWidth,
                height: window.innerHeight - 39,
            });
        }
        
        // console.log(e);
    }

  return (
    <MyContext.Provider value={{ appWindow, setAppWindow }}>
    <div className="w-screen h-screen bg-cover bg-[url('../src/assets/chromeos_wallpaper1.webp')]">
      <Grid
        templateAreas={`"main"
                  "footer"`}
        gridTemplateRows={"94% 6%"}
        h="100%"
      >
        <GridItem area={"main"}>    
        <Rnd
        style={{display: `${(appWindow)?"block":"none"}`}}
        default={{
            x: 273,
            y: 84,
            width: 820,
            height: 480,
        }}
        cancel=".cancelDrag"
        position={{x:windowProps.x, y:windowProps.y}}
        size={{ width: windowProps.width,  height: windowProps.height }}
        onDragStop={(e, d) => { setWindowProps(
            {
                ...windowProps,
                x: d.x,
                y: d.y,
            }
        ) }}
        onResize={(e, direction, ref, delta, position) => {
            setWindowProps({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
            });
        }}
        >
        <VStack w="100%" height="100%" bg={"white"} borderRadius={"2xl"}>
        <Flex w="100%" h={5}>
        <Box p='4' >
        </Box>
        <Spacer />
        <Text color={"blackAlpha.700"} fontSize={"xs"} p={1}>Google</Text>
        <Spacer />
        <HStack>
        <Box
          as="button"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          padding="2"
          paddingTop={4}
          _active={{
            transform: "scale(0.98)",
          }}
          _focusVisible={{
            borderColor: "#ffffff",
          }}
          onClick={()=>{
            setAppWindow.toggle()
        }}
        >
            <Icon color={"blackAlpha.700"} as={MdMinimize}></Icon>
        </Box>
        <Box
          as="button"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          padding="2"
          paddingTop={4}
          _active={{
            transform: "scale(0.98)",
          }}
          _focusVisible={{
            borderColor: "#ffffff",
          }}
          onClick={handleMaximize}
        >
            <Icon color={"blackAlpha.700"} as={MdOutlineSquare}></Icon>
        </Box>
        <Box
          as="button"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          padding="2"
          paddingTop={4}
          _active={{
            transform: "scale(0.98)",
          }}
          _focusVisible={{
            borderColor: "#ffffff",
          }}
          onClick={()=>{
            setAppWindow.toggle()
        }}
          
        >
            <Icon style={{}} color={"blackAlpha.700"} as={MdClose}></Icon>
        </Box>
        </HStack>
        </Flex>
        <HStack w="100%" height="100%" className="cancelDrag" borderEndRadius={"2xl"}>
        <Iframe url="https://www.google.com/webhp?igu=1"
        width="100%"
        height="100%"
        id=""
        className=""
        styles={{borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem"}}
        display="block"
        position="relative"/>
        </HStack>
        </VStack>
        </Rnd>
        </GridItem>
        <GridItem area={"footer"} backgroundColor="#1A2A4B" borderTopRadius="2xl">
          <TaskBar/>
        </GridItem>
      </Grid>
    </div>
    </MyContext.Provider>
  );
}

export default HomeScreen;
