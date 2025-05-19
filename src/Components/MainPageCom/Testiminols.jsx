import React from "react";
import { Box, Typography } from "@mui/material";

import manimg from "../../assets/mainpage/man.jpg";
import womenimg from "../../assets/mainpage/woman.png";
import man2 from "../../assets/mainpage/man2.png";



import { keyframes } from "@emotion/react"; // ✅ Import keyframes

import {
  Customdiv,
  DarkPaper,
  GradientBorderBox,
  TestimonialCard,
  TestimonialsImg,
} from "../../../Theme/ThemeProvider";

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Testiminols = () => {
  const cardarr = [
    {
      id: 1,
      icon: manimg,
      title: "Jeremy McPeak",
      tag: "@jwmcpeak",
      description:
        " open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.",
    },
    {
      id: 2,
      icon: womenimg,
      title: "Jeremy McPeak",
      tag: "@jwmcpeak",
      description:
        " open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.",
    },
    {
      id: 3,
      icon: manimg,
      title: "Jeremy McPeak",
      tag: "@jwmcpeak",
      description:
        " open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.",
    },
    {
      id: 4,
      icon: man2,
      title: "Publishing",
      tag: "@jwmcpeak",
      description:
        " open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.",
    },
  
  ];

  // const cardarry = [
  //   {
  //     id: 5,
  //     icon: <HttpsIcon />,
  //     title: 'Instant Capture',
  //     description: 'This product is very good And reflect app is soo ammazing',
  //   },
  //   {
  //     id: 6,
  //     icon: <SensorOccupiedIcon />,
  //     title: 'Networks Notes',
  //     description: 'This product is very good And reflect app is soo ammazing',
  //   },
  //   {
  //     id: 7,
  //     icon: <SendToMobileOutlinedIcon />,
  //     title: 'Buit for speed',
  //     description: 'This product is very good And reflect app is soo ammazing',
  //   },
  //   {
  //     id: 8,
  //     icon: <PublishedWithChangesIcon />,
  //     title: 'Frictionless search',
  //     description: 'This product is very good And reflect app is soo ammazing',
  //   },
  // ];

  return (
    <Customdiv>
      <TestimonialsImg />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
          alignItems: "center",
          height: "max-content",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          paddingTop: {
            lg: "150px ",
            xs: "120px",
          },
        }}
      >
          <GradientBorderBox>
            Well of love
          </GradientBorderBox>


        <Box
          color={"white"}
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: { xs: "10px", sm: "15px", md: "20px" },
            width: "100%",

            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              fontSize: {
                xs: "40px",
                sm: "1.8rem",
                md: "2.2rem",
                lg: "56px",
              },
              fontWeight: 500,
              lineHeight: 1,
              fontFamily: "sans-serif",
            }}
          >
            Loved by thinkers
          </Box>
          <Box
            sx={{
              fontSize: {
                xs: "0.7rem",
                sm: "0.8rem",
                md: "0.9rem",
                lg: "1rem",
              },
              color: "rgba(255,255,255,0.8)",
              maxWidth: "600px",
              mx: "auto",
              fontFamily: "sans-serif",
            }}
          >
            Here's what people are saying about us
          </Box>
        </Box>

        <Box mt={5} sx={{ overflow: "hidden", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              gap: "22px",
              width: "fit-content",
              animation: `${scrollLeft} 80s linear infinite`,
            }}
          >
            {[...cardarr, ...cardarr].map((content, index) => (
              <TestimonialCard key={index}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                      fontSize:"16px"
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        width: "40px",
                        height: "40px",
                        mt:1
                      }}
                    >
                      <img
                        src={content.icon}
                        alt="User"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      
                      fontWeight={500}
                      fontFamily={"sans-serif"}
                    >
                      <Typography  variant="subtitle1">
                        {content.title}
                      </Typography>
                      <Typography fontSize= "16px" color="gray">{content.tag}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ fontSize: "16px" ,color:"gray" }}>{content.description}</Box>
                </Box>
              </TestimonialCard>
            ))}
          </Box>
        </Box>

        {/* Second Row – Scroll Right */}
        <Box mt={2} sx={{ overflow: "hidden", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              gap: "22px",
              flexDirection: "row-reverse", // ← reverse direction of flex children
              width: "fit-content",
              animation: `${scrollRight}  80s linear infinite`, // ← same scroll as left
            }}
          >
            {cardarr.map((content, index) => (
              <TestimonialCard key={index}>
                <Box    sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "15px" }}
                  >
                    <Box
                      sx={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        width: "40px",
                        height: "40px",
                        mt:1
                      }}
                    >
                      <img
                        src={content.icon}
                        alt="User"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      fontWeight={500}
                      fontFamily={"sans-serif"}
                    >
                      <Typography variant="subtitle1">
                        {content.title}
                      </Typography>
                      <Typography fontSize= "16px" color="gray" >{content.tag}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ fontSize: "16px" ,color:"gray" }}>{content.description}</Box>
                </Box>
              </TestimonialCard>
            ))}
          </Box>
        </Box>
      </Box>
    </Customdiv>
  );
};

export default Testiminols;
