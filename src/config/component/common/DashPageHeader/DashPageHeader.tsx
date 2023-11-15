import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import CustomBreadcrumb from "../../CustomBreadcrumb/CustomBreadcrumb";

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface PageHeaderProps {
  title?: string;
  subTitle?: string;
  btnTitle?: string;
  titleIcon?: any;
  breadcrumb?: BreadcrumbItem[];
  btnAction?: () => void;
}

const DashPageHeader = observer(
  ({
    title,
    subTitle,
    btnTitle,
    btnAction,
    breadcrumb,
    titleIcon,
  }: PageHeaderProps) => {
    const theme = useTheme();
    const headingColor = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.gray[200]
    );
    const textColor = useColorModeValue(
      theme.colors.gray[600],
      theme.colors.gray[400]
    );

    return (
      <>
        <Flex
          justify="space-between"
          alignItems="center"
          mt={{ base: 1 }}
          mb={{ base: 5 }}
          mr={{ base: 1, sm: 2 }}
        >
          <Box>
            {breadcrumb ? (
              <Box>
                <CustomBreadcrumb items={breadcrumb} />
              </Box>
            ) : (
              <>
                <Heading fontSize={20} color={headingColor}>
                  {title}
                </Heading>
                <Text color={textColor}>{subTitle}</Text>
              </>
            )}
          </Box>
          {btnAction && (
            <Box>
              <Button
                leftIcon={titleIcon}
                onClick={btnAction}
                colorScheme="blue"
                variant="solid" // Change to "solid" for a filled button
                size="sm"
                // Customize other button styles here
                _hover={{
                  bg: theme.colors.blue[600],
                  color: "white",
                }}
              >
                {btnTitle}
              </Button>
            </Box>
          )}
        </Flex>
      </>
    );
  }
);

export default DashPageHeader;
