import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ridar from "../src/assets/mainpage/rideeeer.png";
import testimonolsimg from "../src/assets/mainpage/testimonals.png";
// import { keyframes } from '@emotion/react';
import { styled } from "@mui/material/styles";

export const DarkPaper = ({ children, elevation = 1, sx = {} }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: "250px",
        height: "150px",
        backgroundColor: "#030014",
        color: "white",
        borderRadius: 0,
        p: 1,
        px: 3,
        position: "relative",
        transition: "background-color 0.3s ease, transform 0.3s ease",

        "&:hover": {
          backgroundColor: "#1a1a1a",
         
        },

        ...sx,

        // Existing wheat vertical line (KEEP)
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "1px",
          height: "20px",
          backgroundColor: "wheat",
        },

        // New MINIMAL left border using gradient
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "0.5px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, white, transparent)",
          opacity: 0.1,
          pointerEvents: "none",
        },

        // New MINIMAL bottom border using gradient
        "&::afterBottom": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "0.5px",
          background:
            "linear-gradient(to right, transparent, white, transparent)",
          opacity: 0.1,
          pointerEvents: "none",
        },
      }}
    >
      {children}
    </Paper>
  );
};

///testimonal compnents

export const Customdiv = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "950px", // Full viewport height
  minHeight: "687px", // Minimum height fallback
  backgroundColor: "#030014",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const TestimonialsImg = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "557px",
  width: "602px",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${testimonolsimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const TestimonialCard = ({
  children,
  elevation = 1,
  sx = {},
  ...props
}) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: "480px",
        height: "180px",
        minWidth: 480,
        backgroundColor: "#FFFFFF03",
        color: "white",
        borderRadius: "4px",
        border: "1px solid rgba(128, 128, 128, 0.5)",
        flexShrink: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        p: 2,

        background: "linear-gradient(90deg)",
        inset: "0",

        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export const GradientBorderBox = styled(Box)(() => ({
  position: "relative",
  width: "max-content",
  padding: "8px 20px",
  fontWeight: 600,
  fontSize: "14px",
  fontFamily: "sans-serif",
  borderRadius: "999px",
  backgroundColor: "rgba(8, 6, 36, 1)",
  zIndex: 1,
  color: "transparent",
  backgroundImage: "linear-gradient(to right, #e59cff, #ba9cff, #9cb2ff)",
  WebkitBackgroundClip: "text",
  filter: "blur(0.3px)",
  textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "inherit",
    background: "linear-gradient(to right, #e59cff, #ba9cff, #9cb2ff)",
    padding: "0.7px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: -1,
    boxShadow: "inset 0 0 6px rgba(229, 156, 255, 0.2)",
  },
}));

export const CustomDiv = styled(Box)({
  width: "100%",
  height: "max-content",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",

  overflowX: "auto",
  gap: "10px",
  padding: "5px 0",
  backgroundColor: "rgba(8,6,36,0.9)",
  boxSizing: "border-box",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
  scrollBehavior: "smooth",
});

export const DarkPaperr = ({ children, elevation = 1, sx = {} }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: 250,
        height: 128,
        minWidth: 170,
        backgroundColor: "transparent",
        color: "white",
        borderRadius: "0px",
        p: 3,
        flexShrink: 0,
        position: "relative", // Needed for pseudo-elements
        overflow: "hidden", // Keeps the fade effect contained
        "&::before": {
          // Left border (70% height)
          content: '""',
          position: "absolute",
          left: 0,
          top: "0",
          height: "100%",
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, wheat, transparent)",
        },
        "&::after": {
          // Bottom border (70% width)
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "0%",
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, wheat, transparent)",
        },
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

/////ridar

export const RadarBackground = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${ridar})`,
  backgroundSize: "contain", // fit full image without cropping
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#030014", // fallback background
});

export const RadarContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100vh",
});

export const CardDiv = ({ children, elevation = 1, sx = {} }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: 250,
        height: 128,
        borderLeft: "1px solid wheat",
        minWidth: 170, // Add this to prevent flex-shrinking
        backgroundColor: "transparent",
        color: "white",
        borderRadius: "0px",
        p: 3,
        flexShrink: 0, // Prevent cards from shrinking
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};
