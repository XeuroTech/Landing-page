import { Box, Button, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import aiBackground from '../../assets/homepic/q-6c12dbae.png';
import { CiMicrophoneOn } from "react-icons/ci";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { MdOutlineArticle } from "react-icons/md";
import AbcIcon from '@mui/icons-material/Abc';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import { CiViewList } from "react-icons/ci";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import HttpsIcon from '@mui/icons-material/Https';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';


const AiAssistant = ({
    headerButtonText = "Why Us",
    headerTitle = "Why Choose Xeurotech?",
    headerDescription1 = "🔒 Security-First Development - From architecture to deployment, we prioritize secure and compliant systems.",
    
    headerDescription2 = "🚀 Built for Speed, Engineered for Scale -Our solutions are optimized for performance, reliability, and growth.",
    
    backgroundImage = aiBackground,
    cardTitle = "🧠 Expert Team, Proven Results",
    cardDescription = "Work with skilled engineers who understand your vision and deliver with precision.",
     sectionTitle = "What Can You Build With Xeurotech?",

     features = [
  {
    icon: <MobileFriendlyIcon sx={{ fontSize: 32 }} />,
    title: "Cross-Platform Apps",
    description: "Build seamless experiences on iOS, Android, and Web"
  },
  {
    icon: <HttpsIcon sx={{ fontSize: 32 }} />,
    title: "Secure Web Platforms",
    description: "Develop robust systems with enterprise-grade security"
  },
  {
    icon: <DateRangeIcon sx={{ fontSize: 32 }} />,
    title: "Agile Software Delivery",
    description: "Fast, iterative releases with predictable timelines"
  },
  {
    icon: <PublishedWithChangesIcon sx={{ fontSize: 32 }} />,
    title: "SaaS Product Engineering",
    description: "Custom cloud-based platforms from idea to launch"
  },
  {
    icon: <SensorOccupiedIcon sx={{ fontSize: 32 }} />,
    title: "Dedicated Development Teams",
    description: "Scale your team with experienced developers on demand"
  },
  {
    icon: <SendToMobileOutlinedIcon sx={{ fontSize: 32 }} />,
    title: "API & System Integrations",
    description: "Connect third-party tools, data, and services efficiently"
  }
]

}) => {
    return (
        <Box sx={{ backgroundColor: "#030014", color: 'white' }}>
            {/* Header Section */}
            <Container sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '32px',
                        color: '#007aff',
                        borderColor: '#007aff',
                        textTransform: 'none',
                        mb: 2,
                        fontWeight: 500
                    }}
                >
                    {headerButtonText}
                </Button>

                <Typography variant="h4" sx={{
                    fontWeight: 500,
                    mb: 2,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }
                }}>
                    {headerTitle}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 500 }}>{headerDescription1}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>{headerDescription2}</Typography>
            </Container>

            {/* Background Section with Card */}
            <Box
                sx={{
                    minHeight: '70vh',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    px: 2,
                }}
            >
                <Box sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    width: 'max-content',
                    height: 'max-content',
                    p: 4,
                    mt: '6rem',
                    borderRadius: 3,
                    textAlign: 'start'
                }}>
                    <Box sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                        <Typography variant="h6" gutterBottom sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1.5rem', md: '2rem' }
                        }}>
                            {cardTitle}
                        </Typography>
                        <Button
                            size='small'
                            sx={{
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}
                            
                        >
                           
                        </Button>
                    </Box>
                    <Typography sx={{ fontWeight: 500 }}>
                        {cardDescription}
                    </Typography>
                </Box>
            </Box>

            {/* Section Title */}
            <Container sx={{ textAlign: 'center', my: 8 }}>
                <Typography variant="h4" sx={{
                    fontWeight: 500,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }
                }}>
                    {sectionTitle}
                </Typography>
            </Container>

            <Container sx={{ pb: 8 }}>
                <Grid
                    container
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                >
                    {features.map((feature, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    gap: 1.5,
                                    p: 5,
                                    maxWidth: 300
                                }}
                            >
                                <Box sx={{ color: '#007aff' }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 500 }}>{feature.title}</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>{feature.description}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AiAssistant;