import { Box, Button, PasswordInput, Text, TextInput, Anchor} from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconHome2} from '@tabler/icons-react'

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5005/auth/signup", {
        username: username,
        email: email,
        password: password,
      });
      navigate("/login");
    } catch (error) {
      /*const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);*/
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
      <Text align="center" size="xl" weight="bold">
        Signup
      </Text>

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

        <Button
          type="submit"
          variant="filled"
          color="violet.3"
          sx={{ marginTop: "1rem", alignSelf: "center" }}
        >
          Register
        </Button>
        <Text>Already have account?</Text>
        <Anchor color="violet.3" href="/login" target="_blank">
        Login
    </Anchor>
        
      </Box>
     
    </Box>
  );
};

export default SignupPage;