import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
 import  subsccribe from '../assets/subscribe.png'
const Newjoin = () => {
    const GradientButton = styled(Button)(({ theme }) => ({
        background: 'linear-gradient(180deg, #844BE0 0%, #221C86 100%)',
        color: theme.palette.common.white,
        '&:hover': {
            background: 'linear-gradient(180deg, #945BEF 0%, #2A2399 100%)',
        },
        padding: '8px 24px'
    }));
    
    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
             bgcolor: "rgba(8,6,36,1)", 
            alignItems: "center", 
            width: "100%",
            py: 6,
            px: 2
        }}>
            <Typography variant='h3' color='white' sx={{ mb: 3 }}>Join Our Newsletter</Typography>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: "row" }, 
                alignItems: 'center', 
                gap: 3,
                width: '100%',
                maxWidth: '800px',
                justifyContent: 'center'
            }}>
                <TextField 
                    size='small' 
                    id="filled-basic" 
                    placeholder='Enter Your Email' 
                    variant="filled" 
                    sx={{
                        '& .MuiInputBase-input': {
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)'
                        },
                        '& .MuiFilledInput-root': {
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                bgcolor: 'rgba(255,255,255,0.15)'
                            }
                        },
                        width: { xs: '100%', sm: '400px' }
                    }} 
                />
                 

                
                <GradientButton variant="contained">
                <Box component={'img'}src={subsccribe}/>
                    Subscribe
                </GradientButton>
            </Box>
            <Typography textAlign='center' sx={{ color: 'white', mt: 3 }}>
                Unsubscribe at any time
            </Typography>
        </Box>
    )
}

export default Newjoin