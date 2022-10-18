import { 
    Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'


export const AboutPage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Drawer onClose={onClose} isOpen={isOpen} size="100%">
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Consequat nisl vel pretium lectus quam id. Semper quis lectus
                    nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                    quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                    magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                    Lectus vestibulum mattis ullamcorper velit.
                    </p>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}