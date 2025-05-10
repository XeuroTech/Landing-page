import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const AiAssistant = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'rgba(8,6,36,1)', color: 'white', height: '100vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant='outlined' sx={{ borderRadius: 10 }}>Reflect AI</Button>
                    <Typography variant='h2' sx={{ paddingTop: 2 }}>Notes with an AI Assistant</Typography>
                    <Typography sx={{ width: '32rem', paddingTop: 2 }}>Reflect uses GPT-4 and wishper from OpenAi to improve your writing,</Typography>
                    <Typography>organize your thoughts,and act as intellectual thought partner.</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Box sx={{
                        position: 'absolute',
                        top: '30%',
                        bottom: 0,
                        zIndex: 1,
                        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
                    }}
                        component='img'
                        src='/src/assets/homepic/aiassistanttt.png'
                        width={400}
                        height={450}></Box>
                    <Box sx={{
                        position: 'relative',
                        top: 100,
                        borderColor: 'lightgray',
                        p: 6,
                        borderRadius: 6,
                        zIndex: 2,
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}>
                        <Typography variant='h6'>How to use Ai to take better notes</Typography>
                        <Typography>. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default AiAssistant