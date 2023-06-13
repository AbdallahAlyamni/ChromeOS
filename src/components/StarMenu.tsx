import { Avatar, Button, Image, HStack, Text, Icon, VStack, SliderTrack, SliderFilledTrack, SliderThumb, Slider, Box, Input, InputGroup, InputLeftElement, Divider, Wrap, WrapItem } from "@chakra-ui/react";
import { MdArrowDropDown, MdBrightnessLow, MdLockOutline, MdNightlight, MdOutlineAccessibilityNew, MdOutlineBluetooth, MdOutlineDoNotDisturbOn, MdOutlineKeyboardArrowDown, MdOutlinePowerSettingsNew, MdOutlineSettings, MdSignalWifi4BarLock, MdVolumeUp } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { NotiTextButton, NotiIconButton } from "./CustomButtons"
import { PhoneIcon } from "@chakra-ui/icons";

const APPS = [
    {
      name: "Chrome",
      icon: "../src/assets/apps/chrome.svg",
      iconShape: "circle",
      link: "",
    },
    {
      name: "Gmail",
      icon: "../src/assets/apps/gmail.svg",
      iconShape: "non-circle",
      link: "",
    },
    {
      name: "Calendar",
      icon: "../src/assets/apps/google-calendar.svg",
      iconShape: "non-circle",
      link: "",
    },
    {
      name: "Photos",
      icon: "../src/assets/apps/google-photos.svg",
      iconShape: "non-circle",
      link: "",
    },
    {
      name: "Docs",
      icon: "../src/assets/apps/docs.svg",
      iconShape: "non-circle",
      link: "",
    },
  ];

  const APPS2 = [
    {
      name: "Chrome",
      icon: "../src/assets/apps/chrome.svg",
      iconShape: "circle",
      link: "",
    },
    {
      name: "Gmail",
      icon: "../src/assets/apps/gmail.svg",
      iconShape: "non-circle",
      link: "",
    },
    {
      name: "Calendar",
      icon: "../src/assets/apps/google-calendar.svg",
      iconShape: "non-circle",
      link: "",
    },
    {
      name: "Photos",
      icon: "../src/assets/apps/google-photos.svg",
      iconShape: "non-circle",
      link: "",
    },
    {
      name: "Docs",
      icon: "../src/assets/apps/docs.svg",
      iconShape: "non-circle",
      link: "",
    },
    {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
      {
        name: "Docs",
        icon: "../src/assets/apps/docs.svg",
        iconShape: "non-circle",
        link: "",
      },
  ];

function AppButtonWithText(props:any) {
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
        >
          <Avatar
            bg={props.app.iconShape == "circle" ? "" : "white"}
            p={props.app.iconShape == "circle" ? "0" : "1"}
            size="sm"
            name={props.app.name}
            src={props.app.icon}
          />
          <Text m={0} color="whiteAlpha.600" fontSize="10px">{props.app.name}</Text>
        </Box>
      );
}

function StarMenu() {

  return (
          <VStack height="400px" width="550px">
            <HStack height="10%" width="100%">
            <InputGroup>
                <InputLeftElement boxSize={"32px"} pl={"2"} pointerEvents='none'>
                <Image
                    boxSize='16px'
                    verticalAlign="center"
                    src='../src/assets/google.svg'
                    alt='Google'
                />
                </InputLeftElement>
                <Input size={"sm"} bg={"transparent"} variant='Flushed' placeholder='Search your tabs, files, apps and more' />
            </InputGroup>
            </HStack>
            <HStack height="20%" width="100%" mx={"25px"} spacing={0} justify={"center"}>
                {APPS.map(app => {
                    return(
                        <div style={{margin:"0 25px"}}>
                        <AppButtonWithText app={app}/>
                        </div>
                    );
                })}
            </HStack>
            <Divider width={"85%"} borderColor={"whiteAlpha.300"} />
            <HStack height="300px" width="100%" overflowY={"scroll"}>
            <Wrap mt={"20px"} mx={"25px"} spacing='20px 0px' justify='flex-start'>
            {
                APPS2.map((app) => {
                    return(
                        <WrapItem mx={"25px"}>
                            <AppButtonWithText app={app}/>
                        </WrapItem>
                    );
                })
            }
            </Wrap>
            </HStack>
          </VStack>
  );
}

export default StarMenu;
