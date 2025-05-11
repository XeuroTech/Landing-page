import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import aiBackground from '../../assets/mainPage/laptopimgReflect.png';

const AiAssistant = () => {
  const CenteredDiv = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "max-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    boxSizing: "border-box",
    color: theme.palette.common.white,
    padding: theme.spacing(4),
  }));

  return (
    <Box sx={{ backgroundColor: "#030014" }}>
      {/* Header Section */}
      <CenteredDiv>
        <Button
          variant="outlined"
          startIcon={<AutoAwesomeIcon />}
          sx={{
            borderRadius: '32px',
            color: '#007aff',
            borderColor: '#007aff',
            mb: 2,
            textTransform: 'none'
          }}
        >
          Reflect AI
        </Button>
        
        <Typography variant="h3" gutterBottom>
          Notes with an AI Assistant
        </Typography>
        
        <Typography variant="body1" paragraph>
          Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,
        </Typography>
        <Typography variant="body1">
          organize your thoughts, and act as intellectual thought partner.
        </Typography>
      </CenteredDiv>

      {/* Background Image with Glass Card */}
      <Box sx={{
        minHeight: '100vh',
        backgroundImage: `url(${aiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 4,
        textAlign: 'center',
        color: 'white'
      }}>
        <Box sx={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          maxWidth: '500px',
          margin: '200px auto 0',
          padding: 3,
          borderRadius: 3
        }}>
          <Typography variant="h6" gutterBottom>
            How to use AI to take better notes
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AiAssistant;