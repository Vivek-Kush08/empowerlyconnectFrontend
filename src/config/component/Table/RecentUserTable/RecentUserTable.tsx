import {
  Avatar,
  Box,
  Flex,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

interface NormalTableProps {
  data: any[];
}

const RecentUserTable: React.FC<NormalTableProps> = ({ data }: any) => {
  const [blue500] = useToken("colors", ["blue.500"]);

  const textColor = useColorModeValue("gray.700", "gray.200");
  const bgHeaderColor = useColorModeValue("blue.500", "blue.900");
  const hoverBgColor = useColorModeValue("blue.100", "blue.700");
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.15)",
    "rgba(255, 255, 255, 0.1)"
  );
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <Box
      mt={5}
      overflowX="auto"
      shadow={shadowColor + " 0px 0px 20px"}
      p={4}
      rounded="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Heading fontSize="lg" color={textColor} fontWeight="bold">
          Recent Users
        </Heading>
        <Input
          placeholder="Search"
          size="md"
          width="auto"
          borderColor={blue500}
          _hover={{ borderColor: "blue.600" }}
          _placeholder={{ color: "gray.500" }}
        />
      </Flex>
      <Box height="auto" overflowY="auto" maxWidth="100%">
        <Table width="100%" size="md" variant="simple">
          <Thead bg={bgHeaderColor} color="white" textAlign="center">
            <Tr>
              {columns.map((column, index) => (
                <Th
                  key={index}
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="medium"
                  color={"white"}
                >
                  {column}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row: any, rowIndex: number) => (
              <Tr
                key={rowIndex}
                _hover={{ background: hoverBgColor, color: "blue.900" }}
              >
                {columns.map((column, colIndex) => (
                  <Td
                    key={colIndex}
                    textAlign="center"
                    fontSize="sm"
                    color={textColor}
                  >
                    {column === "name" ? (
                      <Flex align="center">
                        <Avatar
                          size="xs"
                          name={row.name}
                          src={"https://bit.ly/dan-abramov"}
                          mr={2}
                        />
                        {row.name}
                      </Flex>
                    ) : (
                      row[column]
                    )}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default RecentUserTable;
