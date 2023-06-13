import { ArrowForwardIcon, Icon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Avatar,
  Button,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdBattery90, MdExitToApp, MdNetworkWifi, MdOutlinePowerSettingsNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function LockScreen() {
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useBoolean(false);
  const navigate = useNavigate();
//   const [loading, setloading] = useBoolean(false);

  const handleLogin = () => {
    // setloading.toggle();
    if (password === "1234") {
      setFlag.off();
      navigate("/");
    //   setloading.toggle();
    } else {
      setFlag.on();
    }
  };

  return (
    <div className="w-screen h-screen bg-cover bg-[url('../src/assets/chromeos_wallpaper1.webp')]">
      <div className="backdrop-blur-sm bg-slate-800/90 w-screen h-screen">
        <Grid
          templateAreas={`"main"
                  "footer"`}
          gridTemplateRows={"93% 7%"}
          h="100%"
        >
          <GridItem area={"main"}>
            <AbsoluteCenter p="4" color="white" axis="both">
              <VStack spacing={4} align="center">
                <Avatar size="xl" name="Abdallah ALyamni" src="../src/assets/ME_2022.png" />
                <Heading as="h5" size="sm">
                  Abdallah Alyamni
                </Heading>
                <InputGroup>
                  <FormControl isInvalid={flag}>
                    <Input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      color="gray.500"
                      size="sm"
                      width="50"
                      variant="flushed"
                      placeholder="Password"
                    />
                    <FormErrorMessage fontSize="xs">Wrong password</FormErrorMessage>
                  </FormControl>
                  <InputRightElement justifyContent="end" onClick={handleLogin}>
                    <ArrowForwardIcon color="gray.500" />
                  </InputRightElement>
                </InputGroup>

                {/* {loading && <Spinner thickness="4px" speed="0.65s" color="blue.500" size="md" />} */}

              </VStack>
            </AbsoluteCenter>
          </GridItem>
          <GridItem area={"footer"}>
            <HStack justify="space-between">
              <div>
                <Button
                  m="1"
                  size="sm"
                  leftIcon={<Icon as={MdOutlinePowerSettingsNew} />}
                  colorScheme="blackAlpha"
                  bgColor="whiteAlpha.200"
                  color="white"
                  borderRadius="2xl"
                  variant="solid"
                  border="none"
                >
                  Shut down
                </Button>
                <Button
                  m="1"
                  size="sm"
                  leftIcon={<Icon as={MdExitToApp} />}
                  colorScheme="blackAlpha"
                  bgColor="whiteAlpha.200"
                  color="white"
                  borderRadius="2xl"
                  variant="solid"
                  border="none"
                >
                  Sign out
                </Button>
              </div>
              <div>
                <Button
                  m="1"
                  size="sm"
                  colorScheme="blackAlpha"
                  bgColor="whiteAlpha.200"
                  color="white"
                  borderRadius="2xl"
                  variant="solid"
                  border="none"
                >
                  <HStack>
                    <Icon as={MdNetworkWifi}></Icon>
                    <Icon as={MdBattery90}></Icon>
                    <Heading as="h6" size="xs">
                      3:50
                    </Heading>
                  </HStack>
                </Button>
              </div>
            </HStack>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default LockScreen;
