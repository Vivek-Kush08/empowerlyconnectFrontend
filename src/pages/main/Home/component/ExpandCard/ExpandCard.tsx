import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColorScheme?: any;
}

const ExpandCard = ({
  image,
  title,
  description,
  buttonText,
  buttonColorScheme = 'blue',
}: Props) => {
  return (
    <Box m={2}>
      <Card
        h={"29rem"}
        maxW="xs"
        transition="box-shadow 0.3s ease-in-out" // Add transition for boxShadow
        _hover={{
          boxShadow: "md",
          ".image": { filter: "brightness(0.5)" },
          ".content": { transform: "translateY(-30px)", marginTop: "-20px" },
          ".buttons": { opacity: 1 },
        }}
        bg={useColorModeValue("gray.100", "blue.800")}
      >
        <Box position="relative">
          <Image
            className="image"
            src={image}
            alt="Green double couch with wooden legs"
            transition="filter 0.3s ease-in-out, transform 0.3s ease-in-out" // Add transitions for image
          />
          <Stack
            p={4}
            bg={useColorModeValue("gray.100", "blue.800")}
            className="content"
            position="relative"
            zIndex="1"
            transition="transform 0.3s ease-in-out, margin-top 0.2s ease-in-out" // Add transitions for content
          >
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text mb={2} color="red.300" fontSize="xl">
              $450
            </Text>
          </Stack>
          <CardFooter
            p={0}
            position="absolute"
            bottom="0"
            width="full"
            transition="opacity 0.6s ease-in-out" // Add transition for footer opacity
            zIndex="1"
            ml={3}
          >
            <ButtonGroup
              className="buttons"
              width="full"
              opacity="0"
              _hover={{ opacity: 1 }}
              transition="opacity 0.3s ease-in-out" // Add transition for button opacity
            >
              <Button variant="solid" colorScheme={buttonColorScheme}>
                {buttonText}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Box>
      </Card>
    </Box>
  );
};

export default ExpandCard;
