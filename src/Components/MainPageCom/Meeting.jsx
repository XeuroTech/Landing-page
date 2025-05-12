import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import meeting from '/src/assets/homepic/meeting.png';

const Meeting = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                backgroundColor: "#030014",
                position: 'relative',
                pt: 10,
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${meeting})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: { xs: '100%', sm: '80%', md: '70%' },
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: 2, // padding for small screens
                }}
            >
                <Box sx={{ pt: { xs: '16rem', sm: '20rem', md: '25rem' }, maxWidth: 700 }}>
                    <Typography
                        variant={isMobile ? 'h4' : 'h2'}
                        sx={{
                            color: 'white',
                            mb: 2,
                            fontWeight: 600,
                        }}
                    >
                        Get more out<br />
                        of your meetings
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Keep track of all your meetings and what was discussed.<br />
                        Import events quickly with our Google Calendar and Outlook integrations.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Meeting;
