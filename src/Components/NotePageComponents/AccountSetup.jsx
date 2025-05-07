import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import setupvideo from '../../assets/accountsetup/setupvideo.mp4';

const AccountSetup = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    {
      title: "Create a backlink",
      description: "See the power of your connected thoughts.",
      video: setupvideo
    },
    {
      title: "Save a link",
      description: "Quickly bookmark websites and capture text.",
      video: setupvideo
    },
    {
      title: "Add a meeting",
      description: "Retain notes from all your meetings.",
      video: setupvideo
    }
  ];

  return (
    <>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 2 }}>
          ACCOUNT SETUP
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                p: 1,
                cursor: 'pointer',
                backgroundColor: 'transparent', 
                borderRadius: '4px',
                mb: 1,
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {/* Number badge */}
                    <Box
                      sx={{
                        border:"1px solid #1976d2",
                        color: '#1976d2',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '999px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        minWidth: '28px',
                        textAlign: 'center',
                      }}
                    >
                      {index + 1}
                    </Box>
                    {/* Title */}
                    <Typography variant="body1" sx={{ color: "#1976d2" }}>
                      {item.title}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {item.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Responsive Video Preview */}
      {hoveredItem !== null && (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.85)',
            p: 2,
            borderRadius: 2,
            zIndex: 9999,
            boxShadow: 3,
            width: {
              xs: '90vw',   
              sm: '80vw',   
              md: '60vw',   
            },
            height: {
              xs: 'auto',
              sm: 'auto',
              md: 'auto',
            },
            maxHeight: '80vh',
          }}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <video 
            autoPlay 
            loop 
            muted 
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              maxHeight: '70vh',
            }}
          >
            <source src={items[hoveredItem].video} type="video/mp4" />
          </video>
        </Box>
      )}
    </>
  );
};

export default AccountSetup;
