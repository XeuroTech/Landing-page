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
  {
    id: 1,
    icon: <MobileFriendlyIcon />,
    title: "Mobile App Development",
    description: "Build powerful iOS and Android apps with seamless UX and top performance.",
  },
  {
    id: 2,
    icon: <HttpsIcon />,
    title: "Secure Systems",
    description: "End-to-end encrypted architectures to keep your data safe and compliant.",
  },
  {
    id: 3,
    icon: <DateRangeIcon />,
    title: "Agile Project Delivery",
    description: "On-time delivery with agile sprints, clear timelines, and full transparency.",
  },
  {
    id: 4,
    icon: <PublishedWithChangesIcon />,
    title: "Product Launch Support",
    description: "We help you launch and scale — from MVPs to enterprise platforms.",
  },
  {
    id: 5,
    icon: <SensorOccupiedIcon />,
    title: "Team Augmentation",
    description: "Expand your team instantly with skilled engineers from Xeurotech.",
  },
  {
    id: 6,
    icon: <SendToMobileOutlinedIcon />,
    title: "Performance Optimization",
    description: "High-speed, scalable solutions that grow with your business.",
  },
  {
    id: 7,
    icon: <PublishedWithChangesIcon />,
    title: "Custom Software",
    description: "From web to SaaS to cloud — we build it, you own it.",
  },
  {
    id: 8,
    icon: <HttpsIcon />,
    title: "API Integration",
    description: "Streamline operations by connecting your systems with robust APIs.",
  },
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
    <Box sx={{ width: '100%', backgroundColor: "#030014", overflowX:'hidden' }}>
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
