import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'; // Correct import path
import ridar from '../src/assets/mainpage/rideeeer.png'


export const DarkPaper = ({ children, elevation = 1, sx = {} }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: 250,
        height: 128,
        borderLeft:"1px solid wheat",
        minWidth: 170, // Add this to prevent flex-shrinking
        backgroundColor: 'black',
        color: 'white',
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






// export const CustomDiv = styled(Box)({

//   width: "100%",
//   height: "max-content",
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "start",
//   overflowX: "auto",
//   gap: "10px",
//   paddingTop: "5px",
//   backgroundColor: 'rgba(8,6,36,0.9)',
//   paddingBottom: '5px',
//   boxSizing: "border-box",
//   '&::-webkit-scrollbar': {
//     display: 'none'
//   },
//   scrollBehavior: 'smooth',
//   '&:hover': {
//     animation: 'scrollAnimation 1s linear infinite',
//     cursor: 'grab'
//   },
//   '@keyframes scrollAnimation': {
//     '0%': { scrollLeft: 0 },
//     '100%': { scrollLeft: '100%' }
//   }
// });



export const CustomDiv = styled(Box)({
  width: "100%",
  height: "max-content",
  display: "flex",
  flexDirection: "row",
  overflowX: "auto",
  gap: "10px",
  padding: "5px 0",
  backgroundColor: 'rgba(8,6,36,0.9)',
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
        color: 'white',
        borderRadius: "0px",
        p: 3,
        flexShrink: 0,
        position: 'relative', // Needed for pseudo-elements
        overflow: 'hidden', // Keeps the fade effect contained
        '&::before': { // Left border (70% height)
          content: '""',
          position: 'absolute',
          left: 0,
          top: '0',
          height: '100%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, wheat, transparent)',
        },
        '&::after': { // Bottom border (70% width)
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '0%',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, wheat, transparent)',
        },
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};



/////ridar 


export const RadarBackground = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${ridar})`,
  backgroundSize: 'contain', // fit full image without cropping
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: '#030014', // fallback background
});


export const RadarContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100vh',

});



export const CardDiv = ({ children, elevation = 1, sx = {} }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: 250,
        height: 128,
        borderLeft:"1px solid wheat",
        minWidth: 170, // Add this to prevent flex-shrinking
        backgroundColor: 'transparent',
        color: 'white',
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