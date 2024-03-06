import React, { useState } from "react";
import { Box, Text, Button, Container } from "@chakra-ui/react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [user, setUser] = useState({
    username: userInfo.name,
    email: userInfo.email,
    isTeacher: userInfo.isTeacher,
  });

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/", { replace: "true" });
  };

  return (
    <>
      <Navbar />
      <Container maxW="lg" py={8} mt={10}>
        <Box
          borderWidth="1px"
          p={4}
          borderRadius="md"
          background="white"
          textAlign="center"
          mt={5}
        >
          <Text fontSize="3xl" fontWeight="bold">
            Profile
          </Text>
          <Text mt={2} fontSize="xl">
            Role: {user.isTeacher ? <>Teacher</> : <>Student</>}
          </Text>
          <Text fontSize="xl">Name: {user.username}</Text>
          <Text fontSize="xl">Email: {user.email}</Text>
          <Button colorScheme="red" mt={5} onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;
