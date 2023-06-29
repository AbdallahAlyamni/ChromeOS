import { Avatar, Button, HStack, Text, Icon, VStack, SliderTrack, SliderFilledTrack, SliderThumb, Slider, Box } from "@chakra-ui/react";
import { MdArrowDropDown, MdBrightnessLow, MdLockOutline, MdNightlight, MdOutlineAccessibilityNew, MdOutlineBluetooth, MdOutlineDoNotDisturbOn, MdOutlineKeyboardArrowDown, MdOutlinePowerSettingsNew, MdOutlineSettings, MdSignalWifi4BarLock, MdVolumeUp } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { NotiTextButton, NotiIconButton } from "./CustomButtons"

function NotificationArea() {

  return (
          <VStack height="400px" width="350px">
            <HStack height="15%" width="100%" justifyContent="space-around" px={"3"}>
            <Avatar size="sm" name="Abdallah Alyamni" src="../src/assets/images/ME_2022.png" />
            <NotiTextButton text="Sign out"/>
            <NotiIconButton icon={MdLockOutline}/>
            <NotiIconButton icon={MdOutlineSettings}/>
            <NotiIconButton icon={MdOutlinePowerSettingsNew}/>
            <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white" className="arrowButton"><Icon boxSize={5} as={MdOutlineKeyboardArrowDown}/></Button>
            </HStack>
            <HStack height="70%" width="100%">
                <VStack height="100%" width="100%" px={"5"}>
                    <HStack height="100%" width="100%" justifyContent="space-evenly">
                        <VStack spacing={1}>
                        <Button size="sm" height='36px' width='36px' borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={6} as={MdSignalWifi4BarLock}/></Button>
                        <HStack ml={"1"} spacing={0}><Text m={0} color="whiteAlpha.800" fontSize="11px">Alyamni</Text><Icon color="whiteAlpha.800" as={MdArrowDropDown} /></HStack>
                        <Text m={0} color="whiteAlpha.600" fontSize="10px">Strong</Text>
                        </VStack>
                        <VStack spacing={1}>
                        <Button size="sm" height='36px' width='36px' borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={6} as={MdOutlineBluetooth}/></Button>
                        <HStack ml={"1"} spacing={0}><Text m={0} color="whiteAlpha.800" fontSize="11px">Bluetooth</Text><Icon color="whiteAlpha.800" as={MdArrowDropDown} /></HStack>
                        <Text m={0} color="whiteAlpha.600" fontSize="10px">Off</Text>
                        </VStack>
                        <VStack spacing={1}>
                        <Button size="sm" height='36px' width='36px' borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={6} as={MdOutlineDoNotDisturbOn}/></Button>
                        <HStack ml={"1"} spacing={0}><Text m={0} color="whiteAlpha.800" fontSize="11px">Notifications</Text><Icon color="whiteAlpha.800" as={MdArrowDropDown} /></HStack>
                        <Text m={0} color="whiteAlpha.600" fontSize="10px">Off for 2 apps</Text>
                        </VStack>
                    </HStack>
                    <HStack height="100%" width="100%" justifyContent="space-evenly">
                        <VStack spacing={1}>
                        <Button size="sm" height='36px' width='36px' borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={6} as={MdNightlight}/></Button>
                        <HStack ml={"1"} spacing={0}><Text m={0} color="whiteAlpha.800" fontSize="11px">Night Light</Text><Icon color="whiteAlpha.800" as={MdArrowDropDown} /></HStack>
                        <Text m={0} color="whiteAlpha.600" fontSize="10px">Off</Text>
                        </VStack>
                        <VStack spacing={1}>
                        <Button size="sm" height='36px' width='36px' borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={6} as={MdOutlineAccessibilityNew}/></Button>
                        <HStack ml={"1"} spacing={0}><Text m={0} color="whiteAlpha.800" fontSize="11px">Accessibility</Text><Icon color="whiteAlpha.800" as={MdArrowDropDown} /></HStack>
                        <Text m={0} color="whiteAlpha.600" fontSize="10px">Off</Text>
                        </VStack>
                        <VStack spacing={1} justifyContent={"center"} alignItems={"center"}>
                        <Button size="sm" height='36px' width='36px' borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={6} as={MdOutlineDoNotDisturbOn}/></Button>
                        <HStack spacing={0}><Text m={0} color="whiteAlpha.800" fontSize="11px">Notifications</Text><Icon color="whiteAlpha.800" as={MdArrowDropDown} /></HStack>
                        <Text m={0} color="whiteAlpha.600" fontSize="10px">Off for 2 apps</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </HStack>
            <HStack height="30%" width="100%">
                <VStack width="inherit" spacing={5}>
                    <HStack width="90%">
                    <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={5} as={MdVolumeUp}/></Button>
                    <Slider aria-label='slider-ex-4' defaultValue={30}>
                        <SliderTrack h={"0.5"} bg='white' borderRadius={"full"}>
                            <SliderFilledTrack bg='#4485F5' />
                        </SliderTrack>
                        <SliderThumb bg='#4485F5' boxSize={3}>
                            <Box bg='#4485F5' />
                        </SliderThumb>
                    </Slider>
                    </HStack>
                    <HStack width="90%">
                    <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={5} as={MdBrightnessLow}/></Button>
                    <Slider aria-label='slider-ex-4' defaultValue={30}>
                        <SliderTrack h={"0.5"} bg='white' borderRadius={"full"}>
                            <SliderFilledTrack bg='#4485F5' />
                        </SliderTrack>
                        <SliderThumb bg='#4485F5' boxSize={3}>
                            <Box bg='#4485F5' />
                        </SliderThumb>
                    </Slider>
                    </HStack>
                </VStack>
            </HStack>
            <HStack height="15%" width="100%" alignItems={"flex-end"} spacing={0}>
                <Text  fontSize={"xs"} color={"white"} pl={"4"}>Sat Sep 22 </Text>
                <Icon color={"whiteAlpha.500"} as={RxDividerVertical}/>
                <Text fontSize={"xs"} color={"whiteAlpha.500"}>Battery Full</Text>
            </HStack>
          </VStack>
  );
}

export default NotificationArea;
