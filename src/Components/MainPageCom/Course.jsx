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
    headingWidth = { xs: '90%', sm: '80%', md: '65%' },
    missionWidth = { xs: '90%', sm: '70%', md: '60%' },
    imageHeight = { xs: '40vh', sm: '50vh', md: '70vh', lg: '100vh' },
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

                    py: { xs: 3, sm: 4 }
                }}
            >
                {/* About Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant='outlined'
                        sx={{
                            borderRadius: 5,
                            borderColor: 'white',
                            color: 'white',
                            fontWeight: 500,
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            px: { xs: 2, sm: 3 },
                            py: { xs: 0.5, sm: 1 }
                        }}
                    >
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
                        textAlign: 'center',
                        gap: { xs: 1, sm: 2 }
                    }}
                >
                    <Typography
                        variant='h3'
                        sx={{
                            width: headingWidth,
                            fontWeight: 500,
                            fontSize: {
                                xs: '1.5rem',   // 24px
                                sm: '2rem',      // 32px
                                md: '2.5rem',    // 40px
                                lg: '3.5rem'     // 56px
                            },
                            lineHeight: 1.2
                        }}
                    >
                        {headingText}
                    </Typography>
                    <Typography
                        sx={{
                            width: missionWidth,
                            mt: { xs: 1, sm: 2 },
                            fontWeight: 500,
                            fontSize: {
                                xs: '0.875rem',  // 14px
                                sm: '1rem',      // 16px
                                md: '1.125rem'   // 18px
                            }
                        }}
                    >
                        {missionText1}
                    </Typography>
                </Box>

                {/* Values Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: { xs: 1, sm: 2 } }}>
                    <Button
                        variant='outlined'
                        sx={{
                            borderRadius: 2,
                            borderColor: 'white',
                            color: 'white',
                            fontWeight: 500,
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            px: { xs: 2, sm: 3 },
                            py: { xs: 0.5, sm: 1 }
                        }}
                    >
                        {valuesButtonText}
                    </Button>
                </Box>
                <Box
                    component='img'
                    src='src/assets/homepic/CourseImg.png'

                />

                {/* Academy Section with Image */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: { xs: 20, sm: 30, md: 50 }
                }}>
                    <Box
                        sx={{
                            backgroundImage: `url(${coursepic})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: imageHeight,
                            width: { xs: '90%', sm: '85%', md: '80%' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                                width: '100%',
                                transform: { xs: 'translateY(-20%)', sm: 'translateY(-30%)', md: 'translateY(-40%)' }
                            }}
                        >
                            <Button
                                variant='outlined'
                                sx={{
                                    borderRadius: 5,
                                    color: 'white',
                                    borderColor: 'white',
                                    fontWeight: 500,
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                    px: { xs: 2, sm: 3 },
                                    py: { xs: 0.5, sm: 1 }
                                }}
                            >
                                {academyButtonText}
                            </Button>
                            <Typography
                                variant='h3'
                                sx={{
                                    width: { xs: '90%', sm: '70%', md: '65%' },
                                    pt: { xs: 1, sm: 2 },
                                    fontWeight: 500,
                                    fontSize: {
                                        xs: '1.3rem',   // 24px
                                        sm: '1.5rem',      // 32px
                                        md: '2.5rem',    // 40px
                                        lg: '3.5rem'     // 56px
                                    },
                                    lineHeight: 1.2
                                }}
                            >
                                {academyHeading}
                            </Typography>
                            <Typography
                                sx={{
                                    width: { xs: '90%', sm: '60%', md: '40%' },
                                    pt: { xs: 1, sm: 2 },
                                    fontWeight: 500,
                                    fontSize: {
                                        xs: '0.5rem',  // 14px
                                        sm: '0.7rem',      // 16px
                                        md: '1.125rem'   // 18px
                                    }
                                }}
                            >
                                {academyDescription}
                            </Typography>
                            <Button
                                variant='outlined'
                                sx={{
                                    borderRadius: 2,
                                    color: 'white',
                                    borderColor: 'white',
                                    mt: { xs: 1, sm: 2 },
                                    fontWeight: 500,
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                    px: { xs: 2, sm: 3 },
                                    py: { xs: 0.5, sm: 1 }
                                }}
                            >
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