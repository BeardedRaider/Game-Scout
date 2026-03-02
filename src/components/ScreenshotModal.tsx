import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Image,
  Flex,
  HStack,
  Box,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  screenshots: string[];
  index: number;
  setIndex: (i: number) => void;
}

const ScreenshotModal = ({
  isOpen,
  onClose,
  screenshots,
  index,
  setIndex,
}: Props) => {
  const next = () => setIndex((index + 1) % screenshots.length);
  const prev = () =>
    setIndex((index - 1 + screenshots.length) % screenshots.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, index]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent bg="transparent" boxShadow="none">
        <ModalBody p={0}>
          <Flex
            height="100vh"
            align="center"
            justify="center"
            position="relative"
            direction="column"
          >
            {/* Main image */}
            <Flex
              flex="1"
              align="center"
              justify="center"
              width="100%"
              position="relative"
            >
              <IconButton
                aria-label="Previous"
                icon={<ArrowBackIcon />}
                position="absolute"
                left={4}
                top="50%"
                transform="translateY(-50%)"
                onClick={prev}
                variant="ghost"
                color="white"
                size="lg"
              />

              <Image
                src={screenshots[index]}
                maxH="85vh"
                maxW="90vw"
                borderRadius="md"
                objectFit="contain"
                transition="opacity 0.25s ease"
              />

              <IconButton
                aria-label="Next"
                icon={<ArrowForwardIcon />}
                position="absolute"
                right={4}
                top="50%"
                transform="translateY(-50%)"
                onClick={next}
                variant="ghost"
                color="white"
                size="lg"
              />

              <IconButton
                aria-label="Close"
                icon={<CloseIcon />}
                position="absolute"
                top={4}
                right={4}
                onClick={onClose}
                variant="ghost"
                color="white"
                size="lg"
              />
            </Flex>

            {/* Thumbnail strip */}
            <HStack
              spacing={2}
              overflowX="auto"
              py={3}
              px={4}
              bg="blackAlpha.600"
              width="100%"
              justify="center"
            >
              {screenshots.map((shot, i) => (
                <Box
                  key={i}
                  border={
                    i === index ? "2px solid white" : "2px solid transparent"
                  }
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => setIndex(i)}
                >
                  <Image
                    src={shot}
                    height="60px"
                    width="100px"
                    objectFit="cover"
                    borderRadius="md"
                    opacity={i === index ? 1 : 0.6}
                    _hover={{ opacity: 1 }}
                  />
                </Box>
              ))}
            </HStack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ScreenshotModal;
