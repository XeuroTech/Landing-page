import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { RadarBackground, RadarContainer, CardDiv, CustomDiv } from '../../../Theme/ThemeProvider.jsx';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import logo from '../../assets/mainpage/logo.png';

// Radar scanner animation
const scan = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Scanner = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '20%',
    md:{
             
        width: '50%',
    },
    height: '2px',
    background: 'linear-gradient(90deg, rgb(61, 43, 168))',
    transformOrigin: 'left center',
    animation: `${scan} 5s linear infinite`,
  },
});

const cardarr = [
  {
    id: 1,
    icon: <MobileFriendlyIcon />,
    title: 'Ios app',
    description: 'This product is very good And reflect app is soo amazing',
  },
];

const FrictionThoughts = () => {
  return (
    <Box>
      {/* Card Section */}
      <Box display={'flex'} justifyContent={'center'} pr={10} py={5} bgcolor={'#030014'}>
        {cardarr.map((content) => (
          <CardDiv sx={{ border: 'none' }} key={content.id}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Box sx={{ fontSize: '20px' }}>{content.icon}</Box>
              <Typography variant="subtitle1">{content.title}</Typography>
              <Box sx={{ fontSize: '14px' }}>{content.description}</Box>
            </Box>
          </CardDiv>
        ))}
      </Box>

      {/* Radar Section */}
      <Box sx={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <RadarBackground />
        <Scanner />

        {/* Centered Logo and Text */}
                            
               <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, 0%)',
                            width: '100%',
                            height: '100vh',
                            color: 'white',
                            display:"flex",
                            justifyContent:"center",
                        
                            zIndex:"3",
                            backgroundColor: 'rgba(3, 0, 20, 0.6)', // semi-transparent background
                            backdropFilter: 'blur(6px)',           // adds blur effect behind the box
                            WebkitBackdropFilter: 'blur(7px)',     // Safari support
                        }}
                        >
                              <Box sx={{mt:"-21px"}}><img  src={logo} alt="logo" style={{ width: 50, height: 50 }} /></Box>

                        </Box>
                              
        </Box>  
      </Box>
    
  );
};

export default FrictionThoughts;
