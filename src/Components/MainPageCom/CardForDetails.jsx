import React from 'react'
import { DarkPaperr } from '../../../Theme/ThemeProvider'
import HttpsIcon from '@mui/icons-material/Https';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import { Box, Typography } from '@mui/material'
// import ResearchRadar from '../../Components/MainPageCom/FrictionThoughts.jsx';
// import FrictionThoughts from '../../Components/MainPageCom/FrictionThoughts.jsx'
 
const CardForDetails = () => {
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
    <Box sx={{display:"flex",
        flexDirection:"column",
         justifyContent:"center",
         alignItems:"center",
         backgroundColor: "#030014" ,  
    }}>
     {
        cardarr.map((content)=>(
            <DarkPaperr key={content.id}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Box sx={{ fontSize: "20px" }}>{content.icon}</Box>
            <Typography variant='subtitle1'>{content.title}</Typography>
            <Box sx={{ fontSize: "14px" }}>{content.description}</Box>
          </Box>
            </DarkPaperr>
        ))
     }

    </Box>
  )
}

export default CardForDetails
