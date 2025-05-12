import React, { useEffect, useRef } from 'react';
import { DarkPaper } from '../../../Theme/ThemeProvider.jsx';
import { CustomDiv } from "../../../Theme/ThemeProvider.jsx";
import HttpsIcon from '@mui/icons-material/Https';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import { Box, Typography } from '@mui/material';
const CardComponents = () => {


  const containerRef = useRef(1);
  const scrollInterval = useRef(null);

  const startScrolling = () => {
    if (scrollInterval.current) return;
    
    scrollInterval.current = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        
        // If reached end, reset to start
        if (scrollLeft >= scrollWidth - clientWidth - 1) {
         containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft += 99;
             
        }
        // if (scrollLeft >= scrollWidth - clientWidth - 1) {
        //       containerRef.current.scrollLeft += 0;
        // }
      }
    }, 1500);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    return () => stopScrolling(); 
  }, []);

  // data structure
  const cardarr = [
    {
      id: 1,
      icon:<MobileFriendlyIcon/>,
      title: "Ios app",
      description: "This product is very good And reflect app is soo ammazing",
    },
    {
      id: 2,
        icon:<HttpsIcon/>,
      title: "End-to-end encription",
      description: "This product is very good And reflect app is soo ammazing",
    },
    {
      id: 3,
      icon:<DateRangeIcon/>,
      title: "Calender Integration",
      description: "This product is very good And reflect app is soo ammazing",
    },
    {
      id: 4,
      icon:<PublishedWithChangesIcon/>,
      title: "Publishing",
      description: "This product is very good And reflect app is soo ammazing",
    },
    {
      id: 5,
           icon:<HttpsIcon/>,
      title: "Instant Capture",
      description: "This product is very good And reflect app is soo ammazing",
    },
    {
      id: 6,
      icon:<SensorOccupiedIcon/>,
      title: "Networks Notes",
      description: "This product is very good And reflect app is soo ammazing",
    },
    {
      id: 7,
      icon:<SendToMobileOutlinedIcon/>,
      title: "Buit for speed",
      description: "This product is very good And reflect app is soo ammazing",
    },
    {
      id: 8,
        icon:<PublishedWithChangesIcon/>,
      title: "Frictionless search",
      description: "This product is very good And reflect app is soo ammazing",
    },
   

  ];

   return (
    <CustomDiv 
      ref={containerRef}
      onMouseEnter={startScrolling}
      onMouseLeave={stopScrolling}
    >
      {cardarr.map((content) => (
        <DarkPaper key={content.id}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Box sx={{ fontSize: "20px" }}>{content.icon}</Box>
            <Typography variant='subtitle1'>{content.title}</Typography>
            <Box sx={{ fontSize: "14px" }}>{content.description}</Box>
          </Box>
        </DarkPaper>
      ))}
      
    </CustomDiv>
  );
};

export default CardComponents