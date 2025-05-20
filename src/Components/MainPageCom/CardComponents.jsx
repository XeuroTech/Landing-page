import React from 'react';
import { DarkPaper } from '../../../Theme/ThemeProvider';
import HttpsIcon from '@mui/icons-material/Https';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import { Box, Typography, useMediaQuery, useTheme, keyframes } from '@mui/material';

const cardarr = [
  { id: 1, icon: <MobileFriendlyIcon />, title: "iOS App", description: "Professional iOS app development with great UI/UX." },
  { id: 2, icon: <HttpsIcon />, title: "Encryption", description: "Secure end-to-end encryption for all your data." },
  { id: 3, icon: <DateRangeIcon />, title: "Calendar Sync", description: "Sync with Google Calendar and stay on schedule." },
  { id: 4, icon: <PublishedWithChangesIcon />, title: "Publishing", description: "Publish content easily with our integrated tools." },
  { id: 5, icon: <HttpsIcon />, title: "Instant Capture", description: "Capture content instantly and save securely." },
  { id: 6, icon: <SensorOccupiedIcon />, title: "Network Notes", description: "Collaborate over shared networks in real-time." },
  { id: 7, icon: <SendToMobileOutlinedIcon />, title: "Optimized Speed", description: "Built for fast performance and low latency." },
  { id: 8, icon: <PublishedWithChangesIcon />, title: "Smart Search", description: "Quickly find notes with intelligent search." },
];


const scrollX = keyframes`
  0% { transform: translateX(0%); }
  10% { transform: translateX(0%); } /* small delay */
  100% { transform: translateX(-50%); }
`;

const CardComponents = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box sx={{ width: '100%', backgroundColor: "#030014", py: 4, overflowX: 'hidden' }}>
      {isXL ? (
      
     <Box
  sx={{
    display: 'flex',
    animation: `${scrollX} 20s steps(2) infinite`,
    width: 'max-content',
  }}
>
          {[...cardarr, ...cardarr].map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 auto',
                width: 250,
                px: 1,
              }}
            >
              <DarkPaper>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "14px" }}>
                  <Box sx={{ fontSize: 28 }}>{item.icon}</Box>
                  <Typography variant="h6" fontSize={17}>{item.title}</Typography>
                  <Typography variant="body2" color="gray">{item.description}</Typography>
                </Box>
              </DarkPaper>
            </Box>
          ))}
        </Box>
      ) : (
        // lg and below: normal wrapped layout
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {cardarr.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: {
                  xs: '100%',
                  sm: '48%',
                  md: '30%',
                  lg: '22%',
                },
              }}
            >
              <DarkPaper>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "14px" }}>
                  <Box sx={{ fontSize: 28 }}>{item.icon}</Box>
                  <Typography variant="h6" fontSize={17}>{item.title}</Typography>
                  <Typography variant="body2" color="gray">{item.description}</Typography>
                </Box>
              </DarkPaper>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CardComponents;
