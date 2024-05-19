import { Avatar, Box, Flex, Progress, Text } from "@chakra-ui/react";

const MyCoursesCard = ({ course }:any) => {
  return (
    <Box p={4} bg={'blue.800'} rounded={12} mb={4}>
      <Flex gap={4}>
        <Avatar
          name={course.name}
          src={course.imageUrl}
          borderRadius={8}
        />
        <Box>
          <Text fontSize={"lg"} fontWeight={600}>
            {course.title}
          </Text>
          <Text fontSize={"sm"} color={"gray"} fontWeight={500}>
            {course.academy}
          </Text>
        </Box>
      </Flex>
      <Flex justify={"space-between"} mt={4}>
        <Text fontSize={"sm"}>{course.completion}% Completed</Text>
        <Text fontSize={"sm"}>{course.timeLeft}</Text>
      </Flex>
      <Progress
        value={course.completion}
        size="xs"
        colorScheme="pink"
        mt={2}
        rounded={"full"}
      />
    </Box>
  );
};

export default MyCoursesCard;
