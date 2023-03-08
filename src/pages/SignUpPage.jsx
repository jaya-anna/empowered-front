import {
  Box,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Anchor,
  Checkbox,
  Title,
  Center,
  rem, Divider
} from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowRight, IconAlertCircle } from "@tabler/icons-react";
import baseURL from "../apiURLs.js"
const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseURL.production}/auth/signup`, {
        username: username,
        email: email,
        password: password,
      });
      navigate("/login");
    } catch (error) {
     // setErrorMessage(error.response.data.errorMessage);
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


      <Center maw={400} h={100} mx="auto">
        <Title order={1}>Signup</Title>
      </Center>
      
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
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          label="Email"
          variant="filled"
          withAsterisk
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          variant="filled"
          withAsterisk
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox label="I accept terms & conditions" mt="sm" />
        <Center maw={800} h={40} mx="auto">
        <Text fz="sm" color="red.8" icon={<IconAlertCircle size="1rem" />}>
          {errorMessage}
        </Text>
        </Center>
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: "#ff9c6b", to: "#e34f4f", deg: 60 }}
          sx={{ marginTop: "1rem", alignSelf: "center" }}
        >
          Register
        </Button>

        <Center maw={700} h={70} mx="auto">
          <Text td="underline" fz="sm">
            Already have account?
          </Text>
          </Center>

          <Center maw={700} h={10} mx="auto">
          <Anchor color="#ff9c6b" href="/login">
            <Center inline>
              <Box ml={5} fw={700} fz="sm">
                Go to Login
              </Box>
              <IconArrowRight size={rem(16)} />
            </Center>
          </Anchor>
          </Center>

      </Box>
    </Box>
  );
};

export default SignupPage;