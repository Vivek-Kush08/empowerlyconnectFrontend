import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import HeaderNotification from "./HeaderNotification/HeaderNotification";
import HeaderThemeSwitch from "./HeaderThemeSwitch/HeaderThemeSwitch";
import HeaderLanguageSwitch from "./HeaderLanguageSwitch/HeaderLanguageSwitch";
import HeaderChatMessage from "./HeaderChatMessage/HeaderChatMessage";
import Header from "../../../../dashboardLayout/HeaderLayout/menu/HeaderMenu";
import { main } from "../../../../../constant/routes";

const HeaderNavbar = observer(() => {
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  return (
    <Flex
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={isLargerThan1020 ? "45%" : "10%"}
    >
      {isLargerThan1020 ? (
        <>
          <Header title="Home" link={main.home}/>
          <Header title="About" link={main.about}/>
          <Header title="Contact" link={main.contact}/>
          <Header title="Blogs" link={main.blog}/>
          <Header title="Help" link={main.about}/>
          <Box display="none">
            <HeaderLanguageSwitch />
            <HeaderThemeSwitch />
            <HeaderChatMessage />
            <HeaderNotification />
          </Box>
          <HeaderProfile />
        </>
      ) : (
        <FaBars cursor="pointer" />
      )}
    </Flex>
  );
});

export default HeaderNavbar;
