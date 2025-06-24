import React from "react";
// import { Box, Typography } from "@mui/material";
// import { keyframes } from "@emotion/react";

// import manimg from "../../assets/mainpage/man.jpg";
// import womenimg from "../../assets/mainpage/woman.png";
// import man2 from "../../assets/mainpage/man2.png";

// import {
//   Customdiv,
//   GradientBorderBox,
//   TestimonialsImg,
//   TestimonialCard,
// } from "../../../Theme/ThemeProvider";

// // Keyframe animations
// const scrollLeft = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// `;

// const scrollRight = keyframes`
//   0% {
//     transform: translateX(-50%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

const Testiminols = () => {
//   const cardarr = [
//     {
//       id: 1,
//       icon: manimg,
//       title: "Jeremy McPeak",
//       tag: "@jwmcpeak",
//       description:
//         "Open all the time, and I'm using both for simple journaling and long form writing. It's rare to see a single app work so well for both.",
//     },
//     {
//       id: 2,
//       icon: womenimg,
//       title: "Lisa Ray",
//       tag: "@lisaray",
//       description:
//         "A wonderful tool! I use it every day for both personal notes and professional reflections. Absolutely love it.",
//     },
//     {
//       id: 3,
//       icon: manimg,
//       title: "Mark Doe",
//       tag: "@markwrites",
//       description:
//         "Reflect has changed how I approach note-taking. It's intuitive, clean, and gets out of my way when I need to focus.",
//     },
//     {
//       id: 4,
//       icon: man2,
//       title: "Publishing",
//       tag: "@pubnow",
//       description:
//         "We've integrated it into our editorial process and the results have been amazing. The entire team loves it.",
//     },
//   ];

//   return (
//     <Customdiv sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
//       <TestimonialsImg />

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//           width: "100%",
//           maxWidth: "100vw", // Ensure it doesn't exceed viewport width
//           height: "max-content",
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           paddingTop: { lg: "150px", xs: "120px" },
//           px: 2, // Add some horizontal padding
//           boxSizing: "border-box", // Include padding in width calculation
//         }}
//       >
//         <GradientBorderBox>Well of love</GradientBorderBox>

//         <Box
//           color="white"
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             textAlign: "center",
//             gap: { xs: "10px", sm: "15px", md: "20px" },
//             maxWidth: "800px",
//             mx: "auto",
//             width: "100%",
//             px: 2, // Add padding to prevent text touching edges
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: {
//                 xs: "40px",
//                 sm: "1.8rem",
//                 md: "2.2rem",
//                 lg: "56px",
//               },
//               fontWeight: 500,
//               lineHeight: 1,
//               fontFamily: "sans-serif",
//             }}
//           >
//             Loved by thinkers
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: {
//                 xs: "0.7rem",
//                 sm: "0.8rem",
//                 md: "0.9rem",
//                 lg: "1rem",
//               },
//               color: "rgba(255,255,255,0.8)",
//               mx: "auto",
//               fontFamily: "sans-serif",
//             }}
//           >
//             Here's what people are saying about us
//           </Typography>
//         </Box>

//         {/* First Scrolling Row (Left) */}
//         <Box 
//           mt={5} 
//           sx={{ 
//             width: "100%", 
//             overflow: "hidden",
//             position: "relative",
//             '&:before, &:after': {
//               content: '""',
//               position: "absolute",
//               top: 0,
//               bottom: 0,
//               width: "50px",
//               zIndex: 1,
//               background: "linear-gradient(to right, rgba(0,0,0,1), transparent)"
//             },
//             '&:before': {
//               left: 0,
//             },
//             '&:after': {
//               right: 0,
//               background: "linear-gradient(to left, rgba(0,0,0,1), transparent)"
//             }
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               gap: "22px",
//               width: "max-content", // Let the content determine width
//               animation: `${scrollLeft} 80s linear infinite`,
//               py: 2, // Add some vertical padding
//             }}
//           >
//             {[...cardarr, ...cardarr].map((content, index) => (
//               <TestimonialCard 
//                 key={index} 
//                 sx={{
//                   minWidth: { xs: "280px", sm: "300px", md: "320px" }, // Fixed card width
//                   flexShrink: 0, // Prevent cards from shrinking
//                 }}
//               >
//                 <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//                   {/* Profile section */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       gap: "15px",
//                       fontSize: "16px",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         borderRadius: "50%",
//                         overflow: "hidden",
//                         width: "40px",
//                         height: "40px",
//                         mt: 1,
//                       }}
//                     >
//                       <img
//                         src={content.icon}
//                         alt="User"
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </Box>

//                     <Box display="flex" flexDirection="column" fontWeight={500}>
//                       <Typography variant="subtitle1">{content.title}</Typography>
//                       <Typography fontSize="16px" color="gray">
//                         {content.tag}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   {/* Description */}
//                   <Box sx={{ fontSize: "16px", color: "gray" }}>
//                     {content.description}
//                   </Box>
//                 </Box>
//               </TestimonialCard>
//             ))}
//           </Box>
//         </Box>

//         {/* Second Scrolling Row (Right) */}
//         <Box 
//           mt={2} 
//           sx={{ 
//             width: "100%", 
//             overflow: "hidden",
//             position: "relative",
//             '&:before, &:after': {
//               content: '""',
//               position: "absolute",
//               top: 0,
//               bottom: 0,
//               width: "50px",
//               zIndex: 1,
//               background: "linear-gradient(to right, rgba(0,0,0,1), transparent)"
//             },
//             '&:before': {
//               left: 0,
//             },
//             '&:after': {
//               right: 0,
//               background: "linear-gradient(to left, rgba(0,0,0,1), transparent)"
//             }
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               gap: "22px",
//               width: "max-content", // Let the content determine width
//               animation: `${scrollRight} 80s linear infinite`,
//               py: 2, // Add some vertical padding
//             }}
//           >
//             {[...cardarr, ...cardarr].map((content, index) => (
//               <TestimonialCard 
//                 key={index}
//                 sx={{
//                   minWidth: { xs: "280px", sm: "300px", md: "320px" }, // Fixed card width
//                   flexShrink: 0, // Prevent cards from shrinking
//                 }}
//               >
//                 <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//                   {/* Profile section */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       gap: "15px",
//                       fontSize: "16px",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         borderRadius: "50%",
//                         overflow: "hidden",
//                         width: "40px",
//                         height: "40px",
//                         mt: 1,
//                       }}
//                     >
//                       <img
//                         src={content.icon}
//                         alt="User"
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </Box>

//                     <Box display="flex" flexDirection="column" fontWeight={500}>
//                       <Typography variant="subtitle1">{content.title}</Typography>
//                       <Typography fontSize="16px" color="gray">
//                         {content.tag}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Box sx={{ fontSize: "16px", color: "gray" }}>
//                     {content.description}
//                   </Box>
//                 </Box>
//               </TestimonialCard>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Customdiv>
//   );
};

export default Testiminols;