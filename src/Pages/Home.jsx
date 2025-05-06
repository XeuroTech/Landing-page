import React from 'react'
import ReflectBlog from '../Components/ReflectBlog'
import { Box, Container } from '@mui/material'
import AllTags from '../Components/AllTags'

const Home = () => {
  return (

    <Container  >
      <ReflectBlog/>
      <AllTags/>

      </Container>
  )
}

export default Home
