import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes,Grid } from "@mui/system";
import HttpsIcon from "@mui/icons-material/Https";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import logo from "../../assets/mainpage/logo.png";
import ridar from "../../assets/mainpage/rideeeer.png";
import { CustomButton, DarkPaper } from "../../../Theme/ThemeProvider";


// Card content
const cardarr = [
  {
    id: 1,
    icon: <MobileFriendlyIcon />,
    title: "Integrated with your devices",
    description:
      "We're everywhere, mobile or desktop, online or offline. Everything is synced in real-time.",
  },
  {
    id: 2,
    icon: <HttpsIcon />,
    title: "Secure but open",
    description:
      "End-to-end encryption keeps your notes secure. Our export and API keeps your notes accessible.",
  },
];

// Radar scanner animation
const scan = keyframes`
  0% {
    transform: rotate(0deg);
    filter: blur(3px);
    opacity: 1;
  }
  25% {
    filter: blur(3px);
    opacity: 0.6;
  }
  50% {
    filter: blur(4px);
    opacity: 0.4;
  }
  75% {
    filter: blur(3px);
    opacity: 0.6;
  }
  100% {
    transform: rotate(360deg);
    filter: blur(0px);
    opacity: 1;
  }
`;

const Scanner = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "39%",
    
    height: "2px",
    transformOrigin: "left center",
    transform: "rotate(0deg)",
    animation: `${scan} 5s linear infinite`,
    background:
      "linear-gradient(to right, white, #3498db 50%, transparent 100%)",
    boxShadow: "0 0 10px 4px rgba(52, 152, 219, 0.3)",
  },
});

export const RadarBackground = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  backgroundImage: `
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(3, 0, 20, 0.85) 50%),
    url(${ridar})
  `,
  backgroundSize: "cover, contain",
  backgroundRepeat: "no-repeat, no-repeat",
  backgroundPosition: "center, center",
  backgroundColor: "#030014",
});

const FrictionThoughts = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "1000px",
        zIndex: 10, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RadarBackground />
      <Scanner sx={{
        width:{
          xl:"25%"
        }
      }} />

      {/* Main Content */}
      <Box
        mt={-3}
        sx={{
          position: "absolute",
          top: "50%",
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          width="100%"
          gap="10px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="100%"
          >
            <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />

            <CustomButton sx={{ mt: "10px" }}>
              Research and Reading
            </CustomButton>

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "40px",
                  sm: "40px",
                  md: "40px",
                  lg: "56px",
                },
                my: 2,
                textAlign: "center",
                maxWidth: {
                  xs: "100%",
                  sm: "199px",
                  md: "400px",
                  lg: "unset",
                },
              }}
            >
              Never Lose Information
            </Typography>

            <Typography
              sx={{
                px: { xs: 2, sm: 3 },
                textAlign: "center",
                color: "#efedfdb3",
                maxWidth: {
                  xs: "316px",
                  sm: "400px",
                  md: "614px",
                },
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                  lg: "16px",
                },
              }}
            >
              Collect your web snippets, Kindle highlights and important links
              – all in one place. Then quickly find them again from any device.
            </Typography>

            {/* Card Grid */}
            <Box sx={{ width: "100%", backgroundColor: "#030014", mt: 3 }}>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
              >
                {cardarr.map((item) => (
                  <Grid
                    item
                    key={item.id}
                    xs={12}
                    sm={6}
                    md={3}
                    display="flex"
                    justifyContent="center"
                  >
                    <DarkPaper
                      sx={{
                        width: "100%",
                        maxWidth: 400,
                        maxHeight: 200,
                        backgroundColor: "transparent",
                        p: {
                          xs: 1.5,
                          sm: 2,
                          md: 2.5,
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        height: {
                          xs: "auto",
                          sm: "auto",
                          md: "240px",
                        },
                      }}
                    >
                      <Box sx={{ fontSize: 32, mb: 1 }}>{item.icon}</Box>

                      <Typography variant="h6" fontSize={17} sx={{ mb: 1 }}>
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="#efedfdb3"
                        sx={{
                          maxWidth: { xs: "100%" },
                          fontSize: {
                            xs: "16px",
                            sm: "15px",
                            md: "15px",
                          },
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </DarkPaper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FrictionThoughts;
