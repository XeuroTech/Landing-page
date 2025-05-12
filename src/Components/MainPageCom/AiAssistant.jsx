<<<<<<< Updated upstream
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const AiAssistant = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'rgba(8,6,36,1)', color: 'white', height: '100vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant='outlined' sx={{ borderRadius: 10 }}>Reflect AI</Button>
                    <Typography variant='h2' sx={{ paddingTop: 2 }}>Notes with an AI Assistant</Typography>
                    <Typography sx={{ width: '32rem', paddingTop: 2 }}>Reflect uses GPT-4 and wishper from OpenAi to improve your writing,</Typography>
                    <Typography>organize your thoughts,and act as intellectual thought partner.</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Box sx={{
                        position: 'absolute',
                        top: '30%',
                        bottom: 0,
                        zIndex: 1,
                        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
                    }}
                        component='img'
                        src='/src/assets/homepic/aiassistanttt.png'
                        width={400}
                        height={450}></Box>
                    <Box sx={{
                        position: 'relative',
                        top: 100,
                        borderColor: 'lightgray',
                        p: 6,
                        borderRadius: 6,
                        zIndex: 2,
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}>
                        <Typography variant='h6'>How to use Ai to take better notes</Typography>
                        <Typography>. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default AiAssistant
=======
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import aiBackground from '../../assets/homepic/q-6c12dbae.png';
import MicNoneIcon from '@mui/icons-material/MicNone';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AbcIcon from '@mui/icons-material/Abc';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import SummarizeIcon from '@mui/icons-material/Summarize';

const AiAssistant = ({
    // Header Section Props
    headerButtonText = "Reflect AI",
    headerTitle = "Notes with an AI Assistant",
    headerDescription1 = "Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,",
    headerDescription2 = "organize your thoughts, and act as intellectual thought partner.",

    // Background Image Section Props
    backgroundImage = aiBackground,
    cardTitle = "How to use AI to take better notes",
    cardDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    // Features Section Props
    sectionTitle = "What can you do with Reflect AI?",
    features = [
        {
            icon: <MicNoneIcon />,
            title: "Transcribe voice notes",
            description: "with human-level accuracy"
        },
        {
            icon: <LibraryBooksIcon />,
            title: "Generate article outlines",
            description: "from your scattered thoughts"
        },
        {
            icon: <SummarizeIcon />,
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
    ],

    // Positioning Props
    customTextPosition = { top: '45rem', left: '18rem' },
    cardPosition = { marginTop: '200px' }
}) => {
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

    const Customtext = styled(Box)(() => ({
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: customTextPosition.top,
        left: customTextPosition.left
    }));

    const FeatureStack = styled(Typography)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
                        textTransform: 'none'
                    }}
                >
                    {headerButtonText}
                </Button>

                <Typography variant="h2" gutterBottom>
                    {headerTitle}
                </Typography>

                <Typography variant="body1" paragraph>
                    {headerDescription1}
                </Typography>
                <Typography variant="body1">
                    {headerDescription2}
                </Typography>
            </CenteredDiv>

            {/* Background Image with Glass Card */}
            <Box sx={{
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: 1,
                textAlign: 'center',
                color: 'white'
            }}>
                <Box sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    maxWidth: '500px',
                    margin: `${cardPosition.marginTop} auto 0`,
                    padding: 3,
                    borderRadius: 3
                }}>
                    <Typography gutterBottom>
                        {cardTitle}
                    </Typography>
                    <Typography>
                        {cardDescription}
                    </Typography>
                </Box>
            </Box>

            {/* Text */}
            <Customtext>
                <Box sx={{ backgroundColor: "#030014" }}>
                    <Typography variant='h3'>{sectionTitle}</Typography>
                </Box>
            </Customtext>

            {/* Features Section */}
            <FeatureStack sx={{ color: 'white' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    gap: 6
                }}>
                    {/* First row of features */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 6
                    }}>
                        {features.slice(0, 3).map((feature, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,

                            }}>
                                {feature.icon}
                                <Typography variant='h6'>{feature.title}</Typography>
                                <Typography fontSize={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Second row of features */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 6
                    }}>
                        {features.slice(3).map((feature, index) => (
                            <Box key={index + 3} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2
                            }}>
                                {feature.icon}
                                <Typography variant='h6'>{feature.title}</Typography>
                                <Typography fontSize={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </FeatureStack>
        </Box>
    );
};

export default AiAssistant;
>>>>>>> Stashed changes
