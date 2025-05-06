import * as React from 'react';
import { Box, Typography } from '@mui/material';
import youtube from '../assets/youtube.png';
import navlogo from '../assets/navlogo.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(8, 6, 36, 1)',
                color: 'white',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: { xs: 2, sm: 4, md: 8 },
                paddingY: 4,
                gap: { xs: 3, sm: 0 }
            }}
        >
            {/* Left Section - Logo */}
            <Box
                component='img'
                src={navlogo}
                sx={{
                    height: { xs: 32, md: 40 },
                    width: 'auto'
                }}
            />

            {/* Middle Section - Copyright */}
            <Box sx={{
                order: { xs: 2, sm: 1 },
                textAlign: 'center',
                flexGrow: 1,
                px: { xs: 0, sm: 2 }
            }}>
                <Typography variant="body2" sx={{
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                }}>
                    Reflected App, LLC, All rights reserved
                </Typography>
            </Box>

            {/* Right Section - Social Icons */}
            <Box sx={{
                display: 'flex',
                gap: 2,
                order: { xs: 1, sm: 2 }
            }}>
                <Box
                    component='img'
                    src={twitter}
                    sx={{
                        height: { xs: 24, md: 28 },
                        width: 'auto',
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.8 }
                    }}
                />
                <Box
                    component='img'
                    src={youtube}
                    sx={{
                        height: { xs: 24, md: 28 },
                        width: 'auto',
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.8 }
                    }}
                />
            </Box>
        </Box>
    );
};

export default Footer;