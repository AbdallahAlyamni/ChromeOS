import {
    Box,
    Flex,
  HStack,
  Text,
  Spacer,
  VStack,
  Icon,
  ScaleFade,
} from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { MdClose, MdMinimize, MdOutlineSquare } from "react-icons/md";
import Iframe from "react-iframe";
import {AppWindowContext } from "./MyContext";
import { useState, useContext, useEffect } from "react";

function WindowControlButton(props:any) {

    return(
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
          onClick={props.onClick}
        >
            <Icon color={"blackAlpha.700"} as={props.icon}></Icon>
        </Box>
    );
}

function MinMaxCloseButtons(props:any) {

    return(
        <HStack>
        <WindowControlButton icon={MdMinimize} onClick={props.handleMinimize}/>
        <WindowControlButton icon={MdOutlineSquare} onClick={props.handleMaximize}/>
        <WindowControlButton icon={MdClose} onClick={props.handleClose}/>
        </HStack>
    )
}

function AppWindow() {

    let rnd:any;
    const [windowClassName, setWindowClassName] = useState("transition-all ease-in-out");

    const {appWindow, setAppWindow} = useContext(AppWindowContext);
    const [windowProps, setWindowProps] = useState({
        x: (window.innerWidth - 820)/2,
        y: (window.innerHeight - 480)/2,
        width: 820,
        height: 480,
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWindowClassName("");
        }, 1000)
    
        return () => clearTimeout(timeout)
    
      }, [windowClassName]);

    const handleMaximize = () => {
        setWindowClassName("transition-all ease-in-out");
        if (windowProps.width == window.innerWidth) {
            console.log("downscale");
            console.log((window.innerWidth - 820)/2);
            console.log((window.innerHeight - 480)/2);
            rnd.updatePosition({ x: (window.innerWidth - 820)/2, y: (window.innerHeight - 480)/2 });
            rnd.updateSize({ width: 820, height: 480 });
            setWindowProps({
                x: (window.innerWidth - 820)/2,
                y: (window.innerHeight - 480)/2,
                width: 820,
                height: 480,
            });
        } else {
            console.log("upscale");
            rnd.updatePosition({ x: 0, y: 0 });
            rnd.updateSize({ width: window.innerWidth, height: window.innerHeight - 39 });
            setWindowProps({
                x: 0,
                y: 0,
                width: window.innerWidth,
                height: window.innerHeight - 39,
            });
        }
    }

    const handleMinimize = () => {
        console.log(windowProps);
        setAppWindow.toggle();
    }

    const handleClose = () => {
        setAppWindow.off();
    }

  return (
    <ScaleFade initialScale={0.9} in={appWindow}>
        <Rnd
        resizeHandleClasses={{
            top:'verticalHandleClass',
            bottom:'verticalHandleClass',

            topRight: 'antiDiagonalHandleClass',
            bottomLeft: 'antiDiagonalHandleClass',

            topLeft: 'mainDiagonalHandleClass',
            bottomRight: 'mainDiagonalHandleClass',

            right:'horizontalHandleClass',
            left:'horizontalHandleClass'

          }}

        // dragHandleClassName="dragHandleClass"

        ref={c => { rnd = c; }}
        style={{display: `${(appWindow)?"block":"none"}`}}
        className={windowClassName}
        default={{
            x: 273/2,
            y: 85/2,
            width: 820,
            height: 480,
        }}
        cancel=".cancelDrag"
        // position={{x:windowProps.x, y:windowProps.y}}
        // size={{ width: windowProps.width,  height: windowProps.height }}
        onDragStop={(_e, d) => { setWindowProps(
            {
                ...windowProps,
                x: d.x,
                y: d.y,
            }
        ) }}
        onResize={(_e, _direction, ref, _delta, position) => {
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
        <MinMaxCloseButtons handleMinimize={handleMinimize} handleMaximize={handleMaximize} handleClose={handleClose}  />
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
    </ScaleFade>
  );
}

export default AppWindow;
