import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import brainPowerImage from '/src/assets/homepic/brain-power.png';

const BrainPower = () => {
    return (
        <Box sx={{
            height: '100vh',
            width: '100%',
            backgroundColor: "#030014",
            position: 'relative',
            pt: '20rem'
        }}>
            <Box sx={{
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
                gap: 4, // Adds spacing between elements
                textAlign: 'center',


            }}>
                {/* Button */}
                <Button
                    variant='outlined'
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        borderRadius: 20,
                        '&:hover': { borderColor: 'gray' },
                        mt: 20
                    }}
                >
                    All your notes, connected
                </Button>

                {/* Text below button */}
                <Box sx={{ width: 'max-content' }}>
                    <Typography variant='h2' sx={{ color: 'white', mb: 2 }}>
                        Give your brain superpowers
                    </Typography>
                    <Typography sx={{ color: 'white' }}>
                        Mirror the way your mind works by associating notes through backlinks.<br />
                        Reflect builds you a second brain that you can reference anytime.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BrainPower;