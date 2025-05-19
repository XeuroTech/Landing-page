import React from 'react';
import { DarkPaper } from '../../../Theme/ThemeProvider';
import HttpsIcon from '@mui/icons-material/Https';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import { Box, Grid, Typography } from '@mui/material';

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

const CardComponents = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: "#030014",    overflowX: 'hidden' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
       

  
      >
        {cardarr.map((item) => (
          <Grid item key={item.id} xs={12} sm={3} md={3}   >
            <DarkPaper>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: "14px" }}>
                <Box sx={{ fontSize: 28 }}>{item.icon}</Box>
                <Typography variant="h6" fontSize={17}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.description}
                </Typography>
              </Box>
            </DarkPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardComponents;
