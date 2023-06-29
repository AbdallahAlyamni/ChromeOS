import { Avatar, HStack, Text, Image, VStack, Box, Input, InputGroup, InputLeftElement, Divider, WrapItem, SimpleGrid } from "@chakra-ui/react";
import { STAR_MENU_APPS, STAR_MENU_DEFAULT_APPS } from "./Apps";
import { useAppDispatch, useAppSelector } from "./hooks";
import { on } from "./appWindowSlice";

function AppButtonWithText(props:any) {
    
    // const {appWindow, setAppWindow} = useContext(AppWindowContext);
    const appWindow = useAppSelector((state) => state.appWindow.visibility);
    const dispatch = useAppDispatch();

    return (
        <Box
          as="button"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          borderRadius="100%"
          marginX="2"
          _active={{
            transform: "scale(0.98)",
          }}
          _focusVisible={{
            borderColor: "#ffffff",
          }}
          onClick={()=>{
            console.log(appWindow);
            props.setStarMenuVisibility.off();
            // setAppWindow.on();
            dispatch(on());
        }}
        >
          <Avatar
            bg={props.app.iconShape == "circle" ? "" : "white"}
            p={props.app.iconShape == "circle" ? "0" : "1"}
            size="sm"
            h={"40px"}
            w={"40px"}
            name={props.app.name}
            src={props.app.icon}
          />
          <Text m={0} color="whiteAlpha.600" fontSize="10px">{props.app.name}</Text>
        </Box>
      );
}

function StarMenu(props:any) {

  return (
          <VStack height="500px" width="500px">
            <HStack height="10%" width="100%" align="flex-start">
            <InputGroup pb={1} borderBottom={"1px"} borderColor={"blackAlpha.200"}>
                <InputLeftElement boxSize={"32px"} pl={"3"} pointerEvents='none'>
                <Image
                    boxSize='16px'
                    verticalAlign="center"
                    src='../src/assets/images/custom_icons/google.svg'
                    alt='Google'
                />
                </InputLeftElement> 
                <Input size={"sm"} fontSize={"xs"} bg={"transparent"} variant='Flushed' color={"whiteAlpha.700"} placeholder='Search your tabs, files, apps and more' />
            </InputGroup>
            </HStack>
            <SimpleGrid columns={5} spacing={10}>
            {STAR_MENU_DEFAULT_APPS.map((app,index) => {
                    return(
                        <div key={app.name+index} style={{margin:"0"}}>
                        <AppButtonWithText app={app} StarMenuVisibility={props.starMenuVisibility} setStarMenuVisibility={props.setStarMenuVisibility}/>
                        </div>
                    );
                })}
            </SimpleGrid>
            <Divider py={1} width={"85%"} borderColor={"blackAlpha.300"} />
                <SimpleGrid columns={5} spacing={10} height="350px" overflowY={"scroll"} mt={5} mr={5} ml={7}>
            {
                STAR_MENU_APPS.map((app,index) => {
                    return(
                        <WrapItem key={app.name+index} mx={"0"}>
                            <AppButtonWithText app={app}/>
                        </WrapItem>
                    );
                })
            }
            </SimpleGrid>
          </VStack>
  );
}

export default StarMenu;
