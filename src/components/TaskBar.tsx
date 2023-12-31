import { Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Text,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  useBoolean,
} from "@chakra-ui/react";
import {
  MdBattery90,
  MdNetworkWifi,
  MdRadioButtonChecked,
} from "react-icons/md";
import NotificationArea from "./NotificationArea";
import StarMenu from "./StarMenu";
import { TASKBAR_APPS } from "./Apps";
import { useAppDispatch, useAppSelector } from "./hooks";
import { toggle } from "./appWindowSlice";
import { toggle as starMenuToggle } from "./starMenuSlice";

function AppButton(props: any) {
    // const {appWindow, setAppWindow} = useContext(AppWindowContext);
    const appWindow = useAppSelector((state) => state.appWindow.visibility);
    const dispatch = useAppDispatch();

  return (
    <Box
      as="button"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      borderRadius="100%"
      marginX="2"
      //   bg="#f5f6f7"
      //   borderColor="#ccd0d5"
      //   color="#4b4f56"
      //   _hover={{ bg: "#ebedf0" }}
      _active={{
        // bg: "#ffffff",
        transform: "scale(0.98)",
        // borderColor: "#ffffff",
      }}
      _focus={
        {
          // boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }
      }
      _focusVisible={{
        borderColor: "#ffffff",
      }}
      onClick={()=>{
        console.log(appWindow);
        // setStarMenuVisibility.toggle();
        // setAppWindow.toggle();
        dispatch(toggle());
    }}
    >
      <Avatar
        bg={props.app.iconShape == "circle" ? "" : "white"}
        p={props.app.iconShape == "circle" ? "0" : "1"}
        size="sm"
        name={props.app.name}
        src={props.app.icon}
      />
    </Box>
  );
}

function TaskBar() {

    // const [starMenuVisibility, setStarMenuVisibility] = useBoolean(false);
    const starMenuVisibility = useAppSelector((state) => state.starMenu.visibility);
    const dispatch = useAppDispatch();
    
  return (
          <HStack h="100%" marginX="1" justify="space-between" alignContent="center">
            <div>
              <Menu isOpen={starMenuVisibility} onClose={()=>{dispatch(starMenuToggle())}}>
                <MenuButton
                  as={Button}
                  size="sm"
                  colorScheme="blackAlpha"
                  bgColor="whiteAlpha.200"
                  color="white"
                  borderRadius="2xl"
                  variant="solid"
                  border="none"
                  onClick={()=>{
                    dispatch(starMenuToggle());
                    console.log(starMenuVisibility);
                    // setStarMenuVisibility.toggle();
                }}
                >
                    <Icon as={MdRadioButtonChecked} />
                </MenuButton>
                <MenuList bg="#1A2A4Bdd" border="0" borderRadius={"2xl"} m={"0 0 8px 0"} backdropFilter='auto' backdropBlur='20px' boxShadow='md'>
                    <StarMenu />
                </MenuList>
              </Menu>
            </div>
            <div>
              {TASKBAR_APPS.map((app) => {
                return (
                  <AppButton key={app.name} app={app} />
                );
              })}
            </div>
            <div>
              <Menu>
                <MenuButton
                  as={Button}
                  size="sm"
                  colorScheme="blackAlpha"
                  bgColor="whiteAlpha.200"
                  color="white"
                  borderRadius="2xl"
                  variant="solid"
                  border="none"
                >
                  <HStack>
                    <Text fontSize="xs">US</Text>
                    <Icon as={MdNetworkWifi}></Icon>
                    <Icon as={MdBattery90}></Icon>
                    <Heading as="h6" size="xs">
                      3:50
                    </Heading>
                  </HStack>
                </MenuButton>
                <MenuList bg="#1A2A4Bdd" border="0" borderRadius={"2xl"} m={"0 15px 8px 0"} backdropFilter='auto' backdropBlur='20px' boxShadow='md'>
                    <NotificationArea />
                </MenuList>
              </Menu>
            </div>
          </HStack>
  );
}

export default TaskBar;
