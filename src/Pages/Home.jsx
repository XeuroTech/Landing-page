import React from 'react'
import ReflectBlog from '../Components/ReflectBlog'
import { Box, Container } from '@mui/material'
import AllTags from '../Components/AllTags'
import Navbar from '../Components/NavBar'
import Newjoin from '../Components/Newjoin'
import Footer from '../Components/Footer'

const Home = () => {
  return (

    <>
      <Navbar />
      <ReflectBlog />
      <AllTags />
      <Newjoin />
      <Footer />

    </>

  )
}

export default Home
