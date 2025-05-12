import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import meeting from '/src/assets/homepic/meeting.png';

const Meeting = () => {
    return (
        <Box sx={{
            height: '100vh',
            width: '100%',
            backgroundColor: "#030014",
            position: 'relative',
            pt: 10
        }}>
            <Box sx={{
                backgroundImage: `url(${meeting})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                width: '70%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4, // Adds spacing between elements
                textAlign: 'center',


            }}>
                {/* Text below button */}
                <Box sx={{ width: 'max-content', pt: '25rem' }}>
                    <Typography variant='h2' sx={{ color: 'white', mb: 2 }}>
                        Get more out<br />
                        of your meetings
                    </Typography>
                    <Typography sx={{ color: 'white' }}>
                        Keep track of all your meetings and what was discussed.<br />
                        Import events quickly with our Google Calendar and Outlook integrations.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Meeting;
