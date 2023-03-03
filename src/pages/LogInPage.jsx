import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsAuthenticated } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/auth/login", {
        username: username,
        password: password,
      });
      setIsAuthenticated(true)
      setToken(response.data.token);
      navigate("/profile");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Connect</button>
      </form>

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
};

export default LoginPage;
