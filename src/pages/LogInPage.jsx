import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(SessionContext);
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
      console.log("Error: ", error);
    }
  };

  return (
    <div
      className="login"
      style={{
        margin: "0 auto",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <h1>Login</h1>


      <form
        component="form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "2rem",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          Username
          <input
            label="Username"
            variant="filled"
            withAsterisk
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            label="Password"
            variant="filled"
            withAsterisk
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          variant="filled"
          color="cyan"
          style={{ marginTop: "1rem", alignSelf: "center" }}
        >
          Connect
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
