import React, { useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SessionContext } from "../contexts/SessionContext";
import { Button, Input, Text, Badge, Box, TextInput
} from "@mantine/core";

function UpdatePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const {token , setUser, user} = useContext(SessionContext)
  const navigate = useNavigate();

    //handle Button Update 
    const handleUpdate = async (event) => {
        event.preventDefault();
        console.log("updated Username:", username)

        try {
          const response = await axios.put(`http://localhost:5005/auth/update/${user._id}`, {
            username: username,
            email: email,
          } ,{headers: {
            authorization: `Bearer ${token}`
        }},);

          console.log(response.data);
          setUser(response.data);

          navigate('/profile');
        } catch (error) {
          console.log("Error: ", error);
        };
      };

  return (
    <Box
        component="form"
        sx={{
          margin: "0 auto",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 100px)",
        }}
      >

{/* username */}
          <Badge 
                  sx={{ 
                    margin: "0 auto",
                    textTransform: "none",
                    color: "blue",
                    }}
                  size="xl"
                  color="pink"
                >
                    username
                </Badge>

            <TextInput
              value={username}
              variant="filled"
              onChange={(e) => setUsername( e.target.value )}
              sx={{ margin:"10px 30px 50px" }}
            />
{/* end of username */}

{/* email */}
        <Badge 
              sx={{ 
                margin: "0 auto",
                textTransform: "none",
                color: "blue"
                }}
              size="xl"
              color="pink"
            >
                email
            </Badge>

        <TextInput
          type="email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail( e.target.value )}
          sx={{ margin:"10px" }}
        />
{/* end of email */}

        <Button type="submit"
              variant="gradient" 
              gradient={{ from: '#ed6ea0', to: 'indigo', deg: 35 }}
              style={{ margin:"40px",  alignSelf: "center" }}
              onClick={handleUpdate}
        >update</Button>

    </Box>    
  );
}

export default UpdatePage;