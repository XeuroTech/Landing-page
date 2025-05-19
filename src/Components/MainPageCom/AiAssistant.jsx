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

const AiAssistant = ({
    headerButtonText = "Reflect AI",
    headerTitle = "Notes with an AI Assistant",
    headerDescription1 = "Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,",
    headerDescription2 = "organize your thoughts, and act as intellectual thought partner.",
    backgroundImage = aiBackground,
    cardTitle = "How to use AI to take better notes",
    cardDescription = ". Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    sectionTitle = "What can you do with Reflect AI?",
    features = [
        {
            icon: <CiMicrophoneOn size={32} />,
            title: "Transcribe voice notes",
            description: "with human-level accuracy"
        },
        {
            icon: <MdOutlineArticle size={32} />,
            title: "Generate article outlines",
            description: "from your scattered thoughts"
        },
        {
            icon: <CiViewList size={32} />,
            title: "List key takeaways and action",
            description: "items from your meeting notes"
        },
        {
            icon: <AbcIcon />,
            title: "Chat with your notes",
            description: "to find and organize information"
        },
        {
            icon: <CommentBankIcon />,
            title: "Save your own",
            description: "custom prompts"
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
                    fontSize: { xs: '40px', sm: '40px', md: '56px', lg: '56px' }
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

                    <Box sx={{ display: 'flex', gap: { xs: 1, sm: 3, md: 5 } }}>
                        <Typography variant="h6" gutterBottom>
                            {cardTitle}
                        </Typography>
                        <Button size='small' sx={{ fontSize: 7 }} startIcon={<AutoAwesomeIcon />}>click to see magic</Button>
                    <Box sx={{ display: 'flex', gap: 5 }}>
                        <Typography variant="h6" gutterBottom sx={{
                            fontWeight: 500,
                            fontSize: { xs: '40px', sm: '40px', md: '56px', lg: '56px' }
                        }}>
                            {cardTitle}
                        </Typography>
                        <Button size='small' sx={{ fontSize: 10, fontWeight: 500 }} startIcon={<AutoAwesomeIcon />}>click to see magic</Button>
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
                    fontSize: { xs: '40px', sm: '40px', md: '56px', lg: '56px' }
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
                            xs={1}
                            sm={1}
                            md={1}
                            lg={3}
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
                                    p: 5
                                }}
                            >
                                {feature.icon}
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