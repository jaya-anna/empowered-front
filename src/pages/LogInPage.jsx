import {
  Box,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title, Center
} from "@mantine/core";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(SessionContext);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/auth/login", {
        username: username,
        password: password,
      });
      setToken(response.data.token);
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <Center maw={400} h={100} mx="auto"><Title order={1}>Login</Title></Center>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "2rem",
        }}
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Username"
          variant="filled"
          withAsterisk
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInput
          label="Password"
          variant="filled"
          withAsterisk
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: "#ff9c6b", to: "#e34f4f", deg: 60 }}
          sx={{ marginTop: "1rem", alignSelf: "center" }}
        >
          Connect
        </Button>
        <Text fw={700} fz="sm" color="red.8">
          {errorMessage}
        </Text>
      </Box>
    </Box>
  );
};

export default LoginPage;