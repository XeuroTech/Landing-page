import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import TransparentTextField from '@mui/material/TextField'
import subscribe from '../assets/subscribe.png'

const Newjoin = () => {
    const GradientButton = styled(Button)(({ theme }) => ({
        background: 'linear-gradient(180deg, #844BE0 0%, #221C86 100%)',
        color: theme.palette.common.white,
        '&:hover': {
            background: 'linear-gradient(180deg, #945BEF 0%, #2A2399 100%)',
        }
    }));
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", width: "dvh" }}>
                <Typography variant='h3' color='white'>Join Our Newsletter</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: "row", alignItems: 'center', gap: 7 } }}>
                    <TransparentTextField size='small' id="filled-basic" placeholder='Enter Your Email' variant="filled" sx={{
                        '& .MuiInputBase-input': {
                            color: 'white'
                        }, width: { xs: '90%', sm: '400px' }
                    }} />
                    <GradientButton>
                        <Box component='img' src={subscribe} sx={{ color: 'white', background: 'transparent' }} />
                        <Button size='small' >Subscribe</Button>
                    </GradientButton>
                </Box>
                <Typography textAlign='center' sx={{ color: 'white', paddingY: 3 }}>Unsubscribe at any time </Typography>
            </Box>

        </>
    )
}

export default Newjoin