import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const AllNotes = () => {
    const NotesType = ["All", "Books", "Links", "People", "Trash", "Custom"]
    return (
        <>
            {/* {main container} */}
            <Box sx={{ backgroundColor: 'black', color: 'white', height: '100dvh', width: '100dvw', p: 0, m: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 4 }}>
                    <Box>
                        <Typography variant='h5'>Notes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                        <Box sx={{ display: 'flex' }} >
                            {NotesType.map((type) => (
                                <Box>
                                    <Typography variant='h6' sx={{ border: 1, fontSize: 'small', p: 0.5, px: 1, borderRadius: 1, borderColor: 'white', backgroundColor: 'slategray' }} key={type}>{type}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box>
                            <Button variant='contained' sx={{}}>New Note</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default AllNotes