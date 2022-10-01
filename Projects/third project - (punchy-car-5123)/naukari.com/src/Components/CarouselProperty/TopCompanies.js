import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@chakra-ui/react";

export const TopCompanies = () => {
  return (
<Carousel>
      {/* first outer box  */}

    <Box 
    display="grid" 
    gridTemplateColumns={{
        base: "repeat(2, 1fr)", 
        sm: "repeat(2, 1fr)", 
        md: "repeat(4, 1fr)", 
        lg: "repeat(4, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Fintech ➤</p>
            <p style={{color: "#a0a2a3"}}>104 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4582197.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4458256.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1535428.gif" 
            alt="FintechImg"
            />

          </div>
        </div>
        {/* second inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>FMCG & Retail ➤</p>
            <p style={{color: "#a0a2a3"}}>32 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3867866.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4625071.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/26418.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/32956.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* third inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Startups ➤</p>
            <p style={{color: "#a0a2a3"}}>234 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2873502.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4620345.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3789768.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* fourth inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Edtech ➤</p>
            <p style={{color: "#a0a2a3"}}>136 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4614807.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1733538.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5914168.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3272908.gif" 
            alt="FintechImg"
            />
            
          </div>

        </div>
    </Box>

      {/* Second outer box  */}

      <Box
      display="grid" 
      gridTemplateColumns={{
          base: "repeat(2, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(4, 1fr)", 
          lg: "repeat(4, 1fr)"
      }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Healthcare ➤</p>
            <p style={{color: "#a0a2a3"}}>106 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2187308.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/552300.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2948968.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4655735.gif" 
            alt="FintechImg"
            />

          </div>
        </div>
        {/* second inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Unicorns ➤</p>
            <p style={{color: "#a0a2a3"}}>90 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/495928.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/135332.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1027760.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/509622.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* third inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Internet ➤</p>
            <p style={{color: "#a0a2a3"}}>132 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5856222.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5729808.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4613275.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2428666.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* fourth inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Manufacturing ➤</p>
            <p style={{color: "#a0a2a3"}}>172 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5290682.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/62866.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1980034.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/297712.gif" 
            alt="FintechImg"
            />
            
          </div>
          
        </div>
    </Box>

      {/* third outer box  */}

      <Box 
      display="grid" 
      gridTemplateColumns={{
          base: "repeat(2, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(4, 1fr)", 
          lg: "repeat(4, 1fr)"
      }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Fortune 500 ➤</p>
            <p style={{color: "#a0a2a3"}}>84 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/84158.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/247012.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/169656.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/867498.gif" 
            alt="FintechImg"
            />

          </div>
        </div>
        {/* second inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>B2C ➤</p>
            <p style={{color: "#a0a2a3"}}>948 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/26216.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/492152.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/19328.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4656649.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* third inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Startups ➤</p>
            <p style={{color: "#a0a2a3"}}>234 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2873502.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4620345.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3789768.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* fourth inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Edtech ➤</p>
            <p style={{color: "#a0a2a3"}}>136 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4614807.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1733538.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5914168.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3272908.gif" 
            alt="FintechImg"
            />
            
          </div>

        </div>
    </Box>

      {/* fourth outer box  */}
      <Box 
      display="grid" 
      gridTemplateColumns={{
          base: "repeat(2, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(4, 1fr)", 
          lg: "repeat(4, 1fr)"
      }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
      {/* first inner box */}

      <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Fintech ➤</p>
            <p style={{color: "#a0a2a3"}}>104 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4582197.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4458256.gif" 
            alt="FintechImg"
            />

            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1535428.gif" 
            alt="FintechImg"
            />

          </div>
        </div>
        {/* second inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>FMCG & Retail ➤</p>
            <p style={{color: "#a0a2a3"}}>32 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3867866.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4625071.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/26418.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/32956.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* third inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Startups ➤</p>
            <p style={{color: "#a0a2a3"}}>234 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2873502.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4620345.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3789768.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />
            
          </div>
        </div>

        {/* fourth inner box */}

        <div
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "8%",
            margin: "3%",
            marginRight: "5%",
            marginLeft: "5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "25px",
            textAlign: "left"
          }}
        >
          <div>
            <p style={{fontWeight: "500", fontSize: "20px"}}>Edtech ➤</p>
            <p style={{color: "#a0a2a3"}}>136 are actively hiring</p>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4614807.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1733538.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5914168.gif" 
            alt="FintechImg"
            />
            
            <img style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3272908.gif" 
            alt="FintechImg"
            />
          </div>
        </div>
    </Box>
</Carousel>
  );
};
