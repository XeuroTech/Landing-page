import { Box, Button, styled, Typography } from '@mui/material';
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

    // Style Props
    headingWidth = { sm: '45%', md: '65%', },
    missionWidth = { sm: '45%', md: '60%' },
    imageHeight = { xs: '50vh', sm: '60vh', md: '100vh' },
    contentSpacing = { xs: 2, sm: 3, md: 4 },
    containerMaxWidth = '1200px'
}) => {
    const CourseDiv = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#030014",
        color: 'white'
    }));

    return (
        <CourseDiv>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: contentSpacing,
                    maxWidth: containerMaxWidth,
                    width: '100%',
                    px: { xs: 2, sm: 3, md: 4 }
                }}
            >
                {/* About Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='outlined' sx={{ borderRadius: 5, borderColor: 'white', color: 'white', fontWeight: 500 }}>
                        {aboutButtonText}
                    </Button>
                </Box>

                {/* Heading & Mission */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant='h3' sx={{
                        width: headingWidth,
                        fontWeight: 500,
                        fontSize: { xs: '40px', sm: '40px', md: '56px', lg: '56px' }
                    }}>
                        {headingText}
                    </Typography>
                    <Typography sx={{ width: missionWidth, mt: 2, fontWeight: 500 }}>
                        {missionText1}
                    </Typography>
                </Box>

                {/* Values Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                    <Button variant='outlined' sx={{ borderRadius: 2, borderColor: 'white', color: 'white', fontWeight: 500 }}>
                        {valuesButtonText}
                    </Button>
                </Box>

                {/* Academy Section with Image */}
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 50 }}>
                    <Box
                        sx={{
                            backgroundImage: `url(${coursepic})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: imageHeight,
                            width: '80%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                            }}
                        >
                            <Button variant='outlined' sx={{ borderRadius: 5, color: 'white', borderColor: 'white', fontWeight: 500 }}>
                                {academyButtonText}
                            </Button>
                            <Typography variant='h3' sx={{
                                width: { sm: '50%', md: '65%' },
                                pt: 1,
                                fontWeight: 500,
                                fontSize: { xs: '40px', sm: '40px', md: '56px', lg: '56px' }
                            }}>
                                {academyHeading}
                            </Typography>
                            <Typography sx={{ width: { sm: '50%', md: '40%' }, pt: 1, fontWeight: 500 }}>
                                {academyDescription}
                            </Typography>
                            <Button variant='outlined' sx={{ borderRadius: 2, color: 'white', borderColor: 'white', mt: 2, fontWeight: 500 }}>
                                {courseButtonText}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CourseDiv>
    );
};

export default Course;