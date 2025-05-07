import React from 'react'
import ReflectBlog from '../Components/ReflectBlog'
import { Box, Container } from '@mui/material'
import AllTags from '../Components/AllTags'
import Navbar from '../Components/NavBar'
import Newjoin from '../Components/Newjoin'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(8,6,36,1)", height: "100vh", }}>
      <Container sx={{ bgcolor: "rgba(8,6,36,1)" }} >
        <Navbar />
        <ReflectBlog />
        <AllTags />
        <Newjoin />
        <Footer />
      </Container>
    </Box>
  )
}

export default Home
