import React from 'react'
import { Box } from '@mui/material'
import { Customdiv, TestimonialsImg } from '../../../Theme/ThemeProvider'

const Testiminols = () => {
  return (
    <Customdiv> 
      <TestimonialsImg/>
      
          <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column",
          width:"100%",
          gap:"10px",
          alignItems:"center",  height:"max-content", position:"absolute" ,  top: "23%",
  left: "50%",
  transform: "translate(-50%, -50%)",   
   paddingTop:{
                lg:"35px"
            }, }}>
        <Box  px={2} py={1}
          component={"div"} 
          sx={{
 

           

            bgcolor:"transparent",
             width:"max-content",
            color:"white",
            fontFamily:"sans-serif",
            fontSize: {
                sm:"12px",
                xs:"8px",
                lg:"16px"
            },
            lineHeight:1,
            fontWeight:"500",
      
            border:"1px solid blue", 
            borderRadius:"20px",
        
          }}
        >
          Wall of love
        </Box>
                
         <Box color={'white'} sx={{
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: { xs: "10px", sm: "15px", md: "20px" }, // Responsive gap
  width: "100%",
  maxWidth: "800px", // Optional: set max width
  mx: "auto", // Center horizontally
//   px: { xs: 2, sm: 3, md: 4 } // Responsive padding
}}>
  <Box 
    
    sx={{
      fontSize: {
        xs: "40px", // Mobile
        sm: "1.8rem", // Tablet
        md: "2.2rem", // Small desktop
        lg: "56px"  // Large desktop
      },
      fontWeight: 500,
      lineHeight: 1,
        fontFamily:"sans-serif",
    }}
  >
    Loved by thinkers
  </Box>
  <Box 
    sx={{
      fontSize: {
        xs: "0.7rem",  
        sm: "0.8rem",  
        md: "0.9rem",  
        lg: "1rem"     
      },
      color: "rgba(255,255,255,0.8)",
      maxWidth: "600px",
      mx: "auto" ,
        fontFamily:"sans-serif",
    }}
  >
    Here's what people are saying about us
  </Box>
    <Box>

    </Box>

</Box>

      </Box>
     
      
        
    </Customdiv>
  )
}

export default Testiminols