import React from 'react';
import { Text, Button, Badge, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

function AboutPage() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , paddingTop:"80px" }} >

  {/* first div with the header  */}
    <div
        style={{  
            paddingRight: "100px", 
            display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"
          }}
        >
          <h1 style={{ color: "#5b64cf"  }}
          > about </h1>
    </div>
{/* end of header div */}

{/* second div with 2 divs - left with info, right with avatar */}
<div
          style={{  
            margin: "0 auto", 
            display:"flex", flexDirection:"row", 
            justifyContent:"center", alignContent:"center"
            }}
        >

{/* left div with mission */}
      <div
          style={{  
            margin: "0 auto", 
            padding: "10px" ,
            maxWidth: "500px",
            display:"flex", flexDirection:"column", 
            justifyContent:"center", alignContent:"center"
            }}
        >

          <Badge 
              style={{ 
                margin: "30px auto",
                textTransform: "none",
                color: "blue",
                }}
              size="xl"
              color="pink"
            >
                    mission
          </Badge>

          <Text 
            weight={500}
            style={{ 
              margin: "30px auto", 
              paddingLeft: "30px" ,
              paddingRight: "30px" ,
              fontWeight: "bold",
              color: "#5b64cf" ,
              textAlign:"center"
            }}
            >
                  create an information exchange platform for teens and emerging adults on sexuality and relationship topics so that they will feel empowered (more confident and stronger)
          </Text>

      </div>
{/* end of left div --- mission */}

            <div>
                <img
                      width={350}
                      fit="contain"
                      mx="auto"
                      src="../../images/powerpuff.gif"
                      alt="powerpuff girls"
                  />
              </div>

      </div>
{/* end of (mission + image) div */}

{/* team div */}
<div
    style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      margin: "20px"

    }}
  >
          <Badge 
              style={{ 
                margin: "0 auto",
                textTransform: "none",
                color: "blue",
                }}
              size="xl"
              color="pink"
            >
                    team
          </Badge>

        <div
          style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              marginTop: "10px"
            }}
        >
                <div
                  style={{ margin:"10px" }}
                  >
                  <Link to={"https://github.com/jaya-anna"} style={{textDecoration:"none"}}>
                    <Text 
                      weight={500}
                      style={{ 
                        margin: "10px auto", 
                        paddingLeft: "30px" ,
                        paddingRight: "50px" ,
                        fontWeight: "bold",
                        color: "#5b64cf" ,
                        textAlign:"center",
                      }}
                      >
                                            Anna
                    </Text>

                    <Image 
                      src="../../images/bubbles.png"
                      alt="bubbles"
                      width={80}
                      style={{ marginLeft:"13px" }}
                      /> 
                  </Link>
                </div>

                <div
                  style={{ margin:"33px"  }}
                  >
                  <Link to={"https://github.com/Leiladany"} style={{textDecoration:"none"}}>
                    <Text 
                      weight={500}
                      style={{ 
                        margin: "25px auto", 
                        paddingLeft: "35px" ,
                        paddingRight: "30px" ,
                        fontWeight: "bold",
                        color: "#5b64cf" ,
                        textAlign:"center"
                      }}
                      >
                                          Leila
                    </Text>

                    <Image 
                      src="../../images/blossom.webp"
                      alt="blossom"
                      width={70}
                      style={{ marginLeft:"20px" }}
                      /> 
                  </Link>
                </div>

                <div
                  style={{ margin:"15px" }}
                  >
                  <Link to={"https://github.com/dianaligiapena"} style={{textDecoration:"none"}}>
                    <Text 
                      weight={500}
                      style={{ 
                        margin: "15px auto", 
                        paddingLeft: "45px" ,
                        paddingRight: "30px" ,
                        fontWeight: "bold",
                        color: "#5b64cf" ,
                        textAlign:"center"
                      }}
                      >
                                        Diana
                    </Text>


                    <Image 
                      src="../../images/buttercup.png"
                      alt="buttercup"
                      width={65}
                      style={{ marginLeft:"35px" }}
                      /> 
                  </Link>
                </div>
        </div>

</div>
{/* end of team div */}

{/* instagram */}
    <div style={{ display:"flex", flexDirection:"column", margin:"30px auto" }}>
          <Badge 
              style={{ 
                margin: "20px auto",
                textTransform: "none",
                color: "blue",
                }}
              size="xl"
              color="pink"
            >
                    instagram
          </Badge>

        <Button
          variant="transparent"
          size="xl"
          component="a"
          href="https://www.instagram.com/empoweredemp/"
          target="_blank"
          rel="noopener noreferrer"
        >
              <Image 
                src="../../images/instagram.png"
                alt="instagram logo"
                width={50}
                /> 
        </Button>
    </div>
{/* end of instagram div */}

{/* location */}
    <div style={{ display:"flex", flexDirection:"column", margin:"30px auto" }}>
        <Badge 
              style={{ 
                margin: "10px auto",
                textTransform: "none",
                color: "blue",
                }}
              size="xl"
              color="pink"
            >
                    visit us
          </Badge>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1V9vrpxRAdI-G66_1-QRtHEgAo0k&ehbc=2E312F"
          width="640"
          height="480"
          title="Empowered Emp location"
          style={{ border: 0, marginTop: '1rem' }}
        />
    </div>
{/* end of location div */}

        <Button 
          style={{ position: "fixed", bottom: "20px", right: "20px" }} 
          onClick={scrollToTop}
          variant="gradient" 
          gradient={{ from: '#ed6ea0', to: 'indigo', deg: 35 }}
        >
            scroll to top
        </Button>

    </div>
  );
}

export default AboutPage;
