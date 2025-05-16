import { Box, Button, Typography, useTheme } from '@mui/material';
import coursepic from '../../assets/homepic/aiassistant.png';

const Course = ({
    aboutButtonText = "About",
    headingText = "We're an indie team dotted across the globe",
    missionText1 = "Our mission is to improve the way people think by making a jolly good note-taking app.",
    valuesButtonText = "See Our Values",
    academyButtonText = "Academy",
    academyHeading = "Learn how to take great notes at our academy",
    academyDescription = "Master the principles of note-taking in Reflect's free online Academy.",
    courseButtonText = "Take The Course",
}) => {
    const theme = useTheme();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: "#030014",
            color: 'white',
            py: { xs: 4, md: 8 }
        }}>
            <Box sx={{
                width: '100%',
                maxWidth: '1200px',
                px: { xs: 2, sm: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: { xs: 3, md: 4 }
            }}>
                {/* About Section */}
                <Button
                    variant='outlined'
                    sx={{
                        borderRadius: 5,
                        borderColor: 'white',
                        color: 'white',
                        px: 4,
                        py: 1,
                        fontSize: { xs: '0.875rem', md: '1rem' }
                    }}
                >
                    {aboutButtonText}
                </Button>

                {/* Heading Section */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Typography variant='h3' sx={{
                        fontSize: {
                            xs: '1.4rem',
                            sm: '2rem',
                            md: '2rem',
                            lg: '3rem'
                        },
                        lineHeight: 1.2,
                        mb: 2,
                        maxWidth: { xs: '70%', md: '60%' }
                    }}>
                        {headingText}
                    </Typography>
                    <Typography variant='body1' sx={{
                        fontSize: {
                            xs: '0.7rem',
                            md: '1.1rem',
                            lg: '1.2rem'
                        },
                        opacity: 0.9,
                        maxWidth: { xs: '70%', md: '50%' }
                    }}>
                        {missionText1}
                    </Typography>
                </Box>

                {/* Values Button */}
                <Button
                    variant='outlined'
                    sx={{
                        borderRadius: 2,
                        borderColor: 'white',
                        color: 'white',
                        px: 4,
                        py: 1,
                        fontSize: { xs: '0.5rem', md: '1rem' }
                    }}
                >
                    {valuesButtonText}
                </Button>

                {/* Academy Section */}
                <Box sx={{
                    width: '100%',
                    mt: { xs: 3, md: 8 },
                    position: 'relative',
                    minHeight: { xs: '50vh', md: '70vh' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box
                        component="img"
                        src={coursepic}
                        alt="Course illustration"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1
                        }}
                    />

                    <Box sx={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        maxWidth: '1200px',
                        px: 2
                    }}>
                        <Button
                            variant='outlined'
                            sx={{
                                borderRadius: 5,
                                color: 'white',
                                borderColor: 'white',
                                mb: 2,
                                px: 4,
                                py: 1,
                                fontSize: { xs: '0.5rem', md: '1rem' }
                            }}
                        >
                            {academyButtonText}
                        </Button>

                        <Typography variant='h4' sx={{
                            fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '2rem',
                                lg: '2.5rem'
                            },
                            maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
                            mb: 2,
                            lineHeight: 1.3
                        }}>
                            {academyHeading}
                        </Typography>

                        <Typography sx={{
                            fontSize: {
                                xs: '0.6rem',
                                sm: '1rem',
                                md: '1.1rem',
                                lg: '1.2rem'
                            },
                            maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '50%' },
                            mb: 3,
                            opacity: 0.9,
                            lineHeight: 1.6
                        }}>
                            {academyDescription}
                        </Typography>

                        <Button
                            variant='outlined'
                            sx={{
                                borderRadius: 2,
                                color: 'white',
                                borderColor: 'white',
                                px: 4,
                                py: 1,
                                fontSize: { xs: '0.5rem', md: '1rem' }
                            }}
                        >
                            {courseButtonText}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Course;