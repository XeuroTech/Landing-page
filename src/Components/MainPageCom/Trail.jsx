import { Box, styled, Button, Typography } from '@mui/material';
import React from 'react';
import TrailImage from './TrailImage';

const TrailBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '60vh',
    width: '100%',
    backgroundColor: "#030014",
    [theme.breakpoints.down('sm')]: {
        height: 'auto',

    }
}));

const Trail = () => {
    return (
        <Box sx={{ backgroundColor: "#030014" }}>
            <TrailBox>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        color: 'white',
                        textAlign: 'center',
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: 5,
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            fontSize: { xs: '0.8rem', sm: '1rem' },
                            padding: { xs: '6px 16px', sm: '8px 24px' },
                        }}
                    >
                        Get Access
                    </Button>

                    <Typography
                        variant="h4"
                        sx={{
                            width: '100%',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        }}
                    >
                        We like keeping things simple
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            width: '100%',
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                        }}
                    >
                        One plan, one price.
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            pt: 4,
                            flexDirection: { xs: 'column', sm: 'row' },
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2.5rem', sm: '3rem' },
                                color: 'white',
                            }}
                        >
                            $10
                        </Typography>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                            <Typography variant="body1">/month</Typography>
                            <Typography variant="body2">(billed annually)</Typography>
                        </Box>
                    </Box>
                </Box>
            </TrailBox>
            <TrailImage />
        </Box>
    );
};

export default Trail;
