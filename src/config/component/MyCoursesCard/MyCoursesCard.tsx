import { Avatar, Box, Flex, Progress, Text } from "@chakra-ui/react";

const MyCoursesCard = () => {
  return (
    <>
      <Text fontWeight="bold" mb={4} >
        My Courses
      </Text>
      <Box p={4} bg={'blue.800'} rounded={12}>
        <Flex gap={4}>
          <Avatar
            name="Figma"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
            borderRadius={8}
          />
          <Box>
            <Text fontSize={"lg"} fontWeight={600}>
              Figma UI UX Design
            </Text>
            <Text fontSize={"sm"} color={"gray"} fontWeight={500}>
              Abcd Academy
            </Text>
          </Box>
        </Flex>
        <Flex justify={"space-between"} mt={4}>
          <Text fontSize={"sm"}>64% Completed</Text>
          <Text fontSize={"sm"}>3 hr 20 min left</Text>
        </Flex>
        <Progress
          value={64}
          size="xs"
          colorScheme="pink"
          mt={2}
          rounded={"full"}
        />
      </Box>
    </>
  );
};

export default MyCoursesCard;
