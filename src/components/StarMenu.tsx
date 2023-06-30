import {
  Avatar,
  HStack,
  Text,
  Image,
  VStack,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  WrapItem,
  SimpleGrid,
  useBoolean,
  Icon,
} from "@chakra-ui/react";
import { STAR_MENU_APPS, STAR_MENU_DEFAULT_APPS } from "./Apps";
import { useAppDispatch, useAppSelector } from "./hooks";
import { on } from "./appWindowSlice";
import { off as starMenuOff } from "./starMenuSlice";
import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";

function AppButtonWithText(props: any) {
  // const {appWindow, setAppWindow} = useContext(AppWindowContext);
  const appWindow = useAppSelector((state) => state.appWindow.visibility);
  const starMenuVisibility = useAppSelector((state) => state.starMenu.visibility);
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
      onClick={() => {
        console.log(appWindow);
        dispatch(starMenuOff());
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
      <Text m={0} color="whiteAlpha.600" fontSize="10px">
        {props.app.name}
      </Text>
    </Box>
  );
}

function StarMenu(props: any) {
//   const [menuSearch, setMenuSearch] = useBoolean(true);
  // const MotionVStack = motion(VStack);

  return (
    <VStack
      height="500px"
      width="500px"
      //   variants={{
      //     open: { backgroundColor: '#000000'},
      //     closed: { backgroundColor: '#ffffff'}
      //   }}
      //   animate={menuSearch?"open":"closed"}
    >
      <StarMenuSearch />
    </VStack>
  );
}

function StarMenuMain(pdrops: any) {
  return (
    <>
      <HStack height="10%" width="100%" align="flex-start">
        <InputGroup pb={1} borderBottom={"1px"} borderColor={"blackAlpha.200"}>
          <InputLeftElement boxSize={"32px"} pl={"3"} pointerEvents="none">
            <Image
              boxSize="16px"
              verticalAlign="center"
              src="../src/assets/images/custom_icons/google.svg"
              alt="Google"
            />
          </InputLeftElement>
          <Input
            size={"sm"}
            fontSize={"xs"}
            bg={"transparent"}
            variant="Flushed"
            color={"whiteAlpha.700"}
            placeholder="Search your tabs, files, apps and more"
          />
        </InputGroup>
      </HStack>
      <SimpleGrid columns={5} spacing={10}>
        {STAR_MENU_DEFAULT_APPS.map((app, index) => {
          return (
            <div key={app.name + index} style={{ margin: "0" }}>
              <AppButtonWithText app={app} />
            </div>
          );
        })}
      </SimpleGrid>
      <Divider py={1} width={"85%"} borderColor={"blackAlpha.300"} />
      <SimpleGrid columns={5} spacing={10} height="350px" overflowY={"scroll"} mt={5} mr={5} ml={7}>
        {STAR_MENU_APPS.map((app, index) => {
          return (
            <WrapItem key={app.name + index} mx={"0"}>
              <AppButtonWithText app={app} />
            </WrapItem>
          );
        })}
      </SimpleGrid>
    </>
  );
}

function StarMenuSearch(props: any) {
    const [temp, setTemp] = useState("hidden");
  const MotionStarMenuSearchItem = motion(StarMenuSearchItem);
  const MotionVStack = motion(VStack);
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const [searchArr, setsearchArr] = useState([] as typeof STAR_MENU_APPS);

  const search = (e:ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    // console.log(searchText);
    if(searchText!='')
    {
    const newSearchArr = STAR_MENU_APPS.filter(app => app.name.toLowerCase().includes(searchText));
    // console.log(newSearchArr);
    setsearchArr(newSearchArr);
    setTemp("visible");
    }
    else{
        setsearchArr([]);
        setTemp("hidden");
    }
  };

  return (
    <VStack width={"100%"} height={"100%"} align="flex-start">
      <HStack width="100%" align="flex-start">
        <InputGroup pb={1} borderBottom={"1px"} borderColor={"#32608790"}>
          <InputLeftElement boxSize={"32px"} pl={"3"} pointerEvents="none">
            <Image
              boxSize="16px"
              verticalAlign="center"
              src="../src/assets/images/custom_icons/google.svg"
              alt="Google"
            />
          </InputLeftElement>
          <Input
        //   onFocus={()=>{setTemp("visible")}}
          onChange={search}
        //   onBlur={()=>{setTemp("hidden")}}
            size={"sm"}
            fontSize={"xs"}
            bg={"transparent"}
            variant="Flushed"
            color={"whiteAlpha.700"}
            placeholder="Search your tabs, files, apps and more"
          />
        </InputGroup>
      </HStack>
      <VStack height={"100%"} width={"100%"} align="flex-start" gap={"0"}>
        <Text ml={"4"} mb={"2"} fontSize={"xs"} color={"whiteAlpha.600"}>
          Apps
        </Text>
        <MotionVStack className="starMenuContainer" variants={container} initial="hidden" animate={temp} gap={"0"}>
        
        {
            searchArr.map((element)=>
            <motion.li variants={item} style={{width:'100%'}} >
            <MotionStarMenuSearchItem app={element} />
            </motion.li>
            )
        }

        </MotionVStack>
        {/* <Text ml={"4"} mb={"2"} fontSize={"xs"} color={"whiteAlpha.600"}>
          Search and Assistant
        </Text>
        <MotionVStack className="starMenuContainer" variants={container} initial="hidden" animate={temp} gap={"0"}>
        
        {
            [0,1].map((element)=>
            <motion.li variants={item} style={{width:'100%'}} >
            <MotionStarMenuSearchItem source=" - Google Search"/>
            </motion.li>
            )
        }

        </MotionVStack> */}
      </VStack>
    </VStack>
  );
}

const StarMenuSearchItem = (props:any) => (
  <Box as="button" className="starMenuSearchItem">
    <HStack>
      {/* <Image boxSize="14px" src="../src/assets/images/custom_icons/google.svg" /> */}
      <Avatar
        // bg={props.app.iconShape == "circle" ? "" : "white"}
        // p={props.app.iconShape == "circle" ? "0" : "1"}
        size="sm"
        h={"16px"}
        w={"16px"}
        name={props.app.name}
        src={props.app.icon}
      />
      <Text fontSize={"xs"} color={"whiteAlpha.700"}>
      {props.app.name} {props.source}
      </Text>
    </HStack>
  </Box>
);

export default StarMenu;
