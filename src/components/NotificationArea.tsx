import { Avatar, Button, HStack, Icon, VStack } from "@chakra-ui/react";
import { MdLockOutline, MdOutlineKeyboardArrowDown, MdOutlinePowerSettingsNew, MdOutlineSettings } from "react-icons/md";

function NotificationArea() {

  return (
          <VStack height="350px" width="300px">
            <HStack height="15%" width="100%" justifyContent="center">
            <Avatar size="sm" name="Abdallah Alyamni" src="../src/assets/ME_2022.png" />
            <Button size="sm" borderRadius="full" p="0 5" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white">Sign out</Button>
            <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={5} as={MdLockOutline}/></Button>
            <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white" ><Icon boxSize={5} as={MdOutlineSettings}/></Button>
            <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={5} as={MdOutlinePowerSettingsNew}/></Button>
            <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white" className="arrowButton"><Icon boxSize={5} as={MdOutlineKeyboardArrowDown}/></Button>
            </HStack>
            <HStack bg="green" height="70%" width="100%">r</HStack>
            <HStack bg="blue" height="30%" width="100%">r</HStack>
            <HStack bg="yellow" height="15%" width="100%">g</HStack>
          </VStack>
  );
}

export default NotificationArea;
