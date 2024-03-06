import React from "react";
import {
  Flex,
  Link,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  };
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center" bg="#8e44ad" p={4} color="white" style={navbarStyle}>
      <Avatar size="sm" name={user.name} ml={4} />
      <Link
        href="/profile"
        fontSize={{ base: "sm", md: "lg" }}
        bg="#8e44ad"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{
          textDecoration: "none",
          textColor:"#8e44ad",
          bg: "white",
          transform: "scale(1.1)", // Increase the size on hover
          transition: "transform 0.3s ease", // Add a smooth transition effect
        }}
        display="flex"  // Use display flex to arrange children in a row
        alignItems="center" // Align items vertically at the center
        ml={4}
      >
        Profile
      </Link>
    </Flex>
  );
};

export default Navbar;
