import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import brainPowerImage from '/src/assets/homepic/brain-power.png';

const BrainPower = () => {
    return (
        <Box sx={{
            minHeight: { xs: 'auto', sm: '100vh' },
            width: '100%',
            backgroundColor: "#030014",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pt: { xs: 6, sm: 8, md: 12, lg: 15 },
            pb: { xs: 6, sm: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Image */}
            <Box sx={{
                backgroundImage: `url(${brainPowerImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.5,
                zIndex: 1,
                filter: 'blur(1px)'
            }} />

            {/* Content */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 2.5, sm: 3, md: 4 },
                textAlign: 'center',
                px: { xs: 2, sm: 3 },
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '1600px',
                margin: '0 auto'
            }}>
                {/* Button */}
                <Button
                    variant='outlined'
                    sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: 20,
                        '&:hover': {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        fontSize: {
                            xs: '0.75rem',  // 12px
                            sm: '0.8125rem', // 13px
                            md: '0.875rem'   // 14px
                        },
                        px: { xs: 2.5, sm: 3 },
                        py: { xs: 0.75, sm: 1 },
                        textTransform: 'none',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease'
                    }}
                >
                    All your notes, connected
                </Button>

                {/* Text Content */}
                <Box sx={{
                    width: '100%',
                    maxWidth: {
                        xs: '95%',
                        sm: '85%',
                        md: '75%',
                        lg: '65%',
                        xl: '55%'
                    },
                    px: { xs: 1, sm: 0 }
                }}>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'white',
                            mb: { xs: 1.5, sm: 2, md: 2.5 },
                            fontSize: {
                                xs: '1.75rem',  // 28px
                                sm: '2.25rem',   // 36px
                                md: '2.75rem',   // 44px
                                lg: '3.25rem'    // 52px
                            },
                            lineHeight: {
                                xs: 1.3,
                                sm: 1.25,
                                md: 1.2
                            },
                            fontWeight: 700,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Give your brain superpowers
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: {
                                xs: '0.9375rem', // 15px
                                sm: '1.0625rem',  // 17px
                                md: '1.125rem'    // 18px
                            },
                            lineHeight: 1.6,
                            px: { xs: 1, sm: 0 }
                        }}
                    >
                        Mirror the way your mind works by associating notes through backlinks.
                        <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} />
                        Reflect builds you a second brain that you can reference anytime.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BrainPower;