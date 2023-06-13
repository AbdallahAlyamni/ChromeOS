import { Button, Icon } from "@chakra-ui/react";

function NotiTextButton(props:any) {
    return(
        <Button size="sm" borderRadius="full" p="0 5" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white" fontSize={"xs"}>{props.text}</Button>
    );
}
function NotiIconButton(props:any) {
    return(
        <Button size="sm" borderRadius="full" p="0" colorScheme="whiteAlpha" bgColor="whiteAlpha.200" color="white"><Icon boxSize={5} as={props.icon} /></Button>
    );
}

export { NotiTextButton, NotiIconButton };