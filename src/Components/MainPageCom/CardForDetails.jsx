import React from 'react';
import { DarkPaperr } from '../../../Theme/ThemeProvider';
import HttpsIcon from '@mui/icons-material/Https';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import { Box, Typography } from '@mui/material';

const CardForDetails = () => {
  const cardarr = [
    {
      id: 1,
      icon: <MobileFriendlyIcon />,
      title: "Mobile App Development",
      description: "We develop high-performance iOS and Android apps tailored to your goals.",
    },
    {
      id: 2,
      icon: <HttpsIcon />,
      title: "Secure Architecture",
      description: "Implementing end-to-end encryption and data protection best practices.",
    },
    {
      id: 3,
      icon: <DateRangeIcon />,
      title: "Agile Delivery",
      description: "Efficient sprint-based development cycles for fast, scalable software.",
    },
    {
      id: 4,
      icon: <PublishedWithChangesIcon />,
      title: "Product Launch Support",
      description: "From MVP to full-scale deployment — we support every launch phase.",
    },
    {
      id: 5,
      icon: <HttpsIcon />,
      title: "Real-time Sync",
      description: "Capture, sync, and store critical data instantly across platforms.",
    },
    {
      id: 6,
      icon: <SensorOccupiedIcon />,
      title: "Team Augmentation",
      description: "Extend your engineering team with our experienced developers.",
    },
    {
      id: 7,
      icon: <SendToMobileOutlinedIcon />,
      title: "Optimized Performance",
      description: "We deliver blazing-fast applications with seamless experiences.",
    },
    {
      id: 8,
      icon: <PublishedWithChangesIcon />,
      title: "Intelligent Search",
      description: "Powerful, frictionless search for data, tasks, and user actions.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#030014",
      }}
    >
      {cardarr.map((content) => (
        <DarkPaperr key={content.id}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Box sx={{ fontSize: "20px" }}>{content.icon}</Box>
            <Typography variant="subtitle1">{content.title}</Typography>
            <Box sx={{ fontSize: "14px" }}>{content.description}</Box>
          </Box>
        </DarkPaperr>
      ))}
    </Box>
  );
};

export default CardForDetails;
