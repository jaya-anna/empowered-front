import axios from 'axios';
import { Badge, Text, Button } from '@mantine/core'
import React, { useContext } from "react";
import { useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../apiURLs";

function Profile( ){
  const { user, setUser, setIsAuthenticated, setToken } = useContext(SessionContext);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  // handler for deleting profile
  const handleDeleteProfile = async () => {
    setDeleting(true);
    try {
      await axios.delete(`${baseURL.production}/auth/profile/${user._id}`)

      localStorage.removeItem("holder");
      setIsAuthenticated(false);
      setToken(null);
      setUser(null);

      navigate('/');
    } catch (error) {
      console.log("Error: ", error);
      setDeleting(false);
    }
  }

  return (
    <div>


{/* first div with the header PROFILE */}
        <div
        style={{  
            margin: "80px 300px 5px", 
            display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"
          }}
        >
          <h1 style={{ color: "#5b64cf"  }}
          > profile</h1>
        </div>
{/* end of header div */}

{/* second div with 2 divs - left with info, right with avatar */}
        <div
          style={{  
            margin: "5px 50px 10px", 
            display:"flex", flexDirection:"row", 
            justifyContent:"center", alignContent:"center"
            }}
        >

        {/* div with profile info */}
        <div
          style={{  
            margin: "20px 50px 10px", 
            display:"flex", flexDirection:"column", 
            justifyContent:"space-evenly", alignContent:"center"
            }}
        >

{/* username */}
      <div
          style={{  
            margin: "20px", 
            display:"flex", flexDirection:"column", 
            justifyContent:"center", alignContent:"center"
            }}
      >
          <Text 
            weight={500}
            style={{ 
              margin: 10, 
              fontWeight: "bold",
              color: "#5b64cf" ,
            }}
          >
            username
          </Text>

            <Badge 
              style={{ 
                margin: "10px 135px 10px 60px",
                textTransform: "none",
                color: "blue",
                }}
              size="xl"
              color="pink"
            >
                {user.username}
            </Badge>
      </div>
{/* end of username */}

{/* email div */}
      <div
      style={{  
                  margin: "20px", 
                  display:"flex", flexDirection:"column", 
                  justifyContent:"center", alignContent:"center"
                  }}
      >
            <Text 
            weight={500}
            style={{ 
              margin: "10px 30px 10px", 
              fontWeight: "bold" ,
              color: "#5b64cf" ,
            }}
          >
            email
          </Text>

            <Badge 
              style={{ 
                margin: "10px 50px 10px 50px",
                textTransform: "none",
                color: "blue"
                }}
              size="xl"
              color="pink"
            >
                {user.email}
            </Badge>
        </div>
{/* end of email */}

          </div>
        {/* end of div with profile info */}

          <div>
                <img
                      width={300}
                      height={300}
                      fit="contain"
                      mx="auto"
                      src="../../images/profile-avatar.jpeg"
                      alt="profile avatar"
                      style={{borderRadius: "50%"}}
                  />
          </div>

        </div>
{/* end of second div - left with info, right with avatar */}


{/* last div  with buttons */}
      <div
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginTop: "30px"

        }}
      >
            <Button 
              variant="gradient" 
              gradient={{ from: '#ed6ea0', to: 'indigo', deg: 35 }}
              style={{ margin:"40px" }}
            >
                <Link type="button" component={Link} to={`/update/${user._id}`} style={{ textDecoration:"none", color:"white" }} >
                  update profile
                </Link>
            </Button>

            <Button 
              style={{ margin:"40px" }}
              variant="gradient" 
              gradient={{ from: 'indigo', to: '#ed6ea0', deg: 35 }}
              onClick={handleDeleteProfile}
            > 
              delete profile
            </Button>
      </div>
{/* end of last div with buttons */}
      
    </div>
  );
}

export default Profile;