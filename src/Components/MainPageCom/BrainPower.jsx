import { Box, Button, Typography, } from '@mui/material';
import React from 'react';
import brainPowerImage from '/src/assets/homepic/brain-power.png';

const BrainPower = () => {



    return (
        <Box sx={{
            minHeight: '100vh',
            width: '100%',
            backgroundColor: "#030014",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pt: { xs: 8, sm: 12, md: 15, lg: 20 },
            pb: { xs: 8, sm: 0 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box sx={{
                backgroundImage: `url(${brainPowerImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.7,
                zIndex: 1
            }} />

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 3, sm: 4, md: 5 },
                textAlign: 'center',
                px: 2,
                position: 'relative',

                zIndex: 2,
                width: '100%'
            }}>

                pt: { xs: '12rem', md: '20rem' },
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${brainPowerImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    left: '50%',
                    top: '70%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    textAlign: 'center',
                    px: 2
                }}
            >
                {/* Button */}

                <Button
                    variant='outlined'
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        borderRadius: 20,
                        '&:hover': { borderColor: 'gray' },

                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1, sm: 1.25 },
                        textTransform: 'none',
                        fontWeight: 'normal'

                        mt: { xs: 8, md: 20 },
                        px: 3,
                        py: 1.5,
                        fontSize: { xs: '0.75rem', md: '1rem' },
                        fontWeight: 500

                    }}
                >
                    All your notes, connected
                </Button>

                <Box sx={{
                    width: '100%',
                    maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '50%' }
                }}>
                    <Typography

                        variant='h2'
                        sx={{
                            color: 'white',
                            mb: { xs: 2, sm: 3 },
                            fontSize: {
                                xs: '2rem',
                                sm: '2.5rem',
                                md: '3rem',
                                lg: '3.5rem'
                            },
                            lineHeight: 1.2,
                            fontWeight: 'bold'

                        sx={{
                            color: 'white',
                            mb: 2,
                            fontWeight: 500,
                            fontSize: { xs: '40px', sm: '40px', md: '56px', lg: '56px' }

                        }}
                    >
                        Give your brain superpowers
                    </Typography>
                    <Typography

                        variant='body1'
                        sx={{
                            color: 'white',
                            fontSize: {
                                xs: '0.875rem',
                                sm: '1rem',
                                md: '1.125rem'
                            },
                            lineHeight: 1.6,
                            opacity: 0.9

                        sx={{
                            color: 'white',
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: 500

                        }}
                    >
                        Mirror the way your mind works by associating notes through backlinks.<br />
                        Reflect builds you a second brain that you can reference anytime.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BrainPower;