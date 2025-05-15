import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import brainPowerImage from '/src/assets/homepic/brain-power.png';

const BrainPower = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                backgroundColor: "#030014",
                position: 'relative',
                pt: { xs: '12rem', md: '20rem' }, // responsive top padding
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
                    px: 2 // Padding for small screens
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
                        mt: { xs: 8, md: 20 },
                        px: 3,
                        py: 1.5,
                        fontSize: { xs: '0.75rem', md: '1rem' }
                    }}
                >
                    All your notes, connected
                </Button>

                {/* Text below button */}
                <Box sx={{ maxWidth: 'max-content' }}>
                    <Typography
                        variant={isMobile ? 'h4' : 'h2'}
                        sx={{ color: 'white', mb: 2, fontWeight: 600 }}
                    >
                        Give your brain superpowers
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Mirror the way your mind works by associating notes through backlinks.<br />
                        Reflect builds you a second brain that you can reference anytime.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BrainPower;
