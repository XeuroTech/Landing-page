import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import React from "react";
import loginlogo from "../assets/homepic/loginlogo.png";
import googlelogo from "../assets/homepic/googlelogo.png";
import applelogo from "../assets/homepic/applelogo.png";
import { styled } from "@mui/material/styles";

export const Login = () => {
  const GradientButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(180deg, #844BE0 0%, #221C86 100%)",
    color: theme.palette.common.white,
    "&:hover": {
      background: "linear-gradient(180deg, #945BEF 0%, #2A2399 100%)",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",     
        backgroundColor: "rgba(8,6,36,1)",
        p: 2,
        boxSizing: "border-box", 
        overflow: "hidden",      
      }}
    >
      {/* Logo */}
      <Box
        sx={{ 
          height: "15rem", 
          width: "15rem",
          maxWidth: "100%", 
        }}
        component="img"
        src={loginlogo}
        alt="Login Logo"
      />

      {/* Sign-in options */}
      <Typography color="white" mt={3}>
        Sign in/up with
      </Typography>
      <Box sx={{ width: "100%", maxWidth: "300px" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2, 
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <GradientButton sx={{ flex: 1 }}> 
            <Box
              sx={{ height: "1rem" }}
              component="img"
              src={googlelogo}
              alt="Google Logo"
            />
          </GradientButton>
          <GradientButton sx={{ flex: 1 }}>
            <Box
              component="img"
              sx={{ height: "1rem" }}
              src={applelogo}
              alt="Apple Logo"
            />
          </GradientButton>
        </Box>
      </Box>

      {/* Email input */}
      <Typography sx={{ mt: 2 }} color="white">
        Or continue with
      </Typography>
      <Box sx={{ width: "100%", maxWidth: "300px" }}>
        <TextField
          fullWidth
          size="small"
          placeholder="your@gmail.com"
          variant="filled"
          sx={{
            "& .MuiInputBase-input": { color: "white" },
            "& .MuiFilledInput-root": { 
              backgroundColor: "rgba(15, 23, 42, 0.5)" 
            },
            border: 1,
            borderColor: "wheat",
            borderRadius: 1,
            mt: 2,
          }}
        />
      </Box>

      {/* Continue button */}
      <Box sx={{ width: "100%", maxWidth: "300px", mt: 2 }}>
        <GradientButton fullWidth>Continue</GradientButton>
      </Box>

      {/* Footer */}
      <Box mt={4} sx={{ width: "100%", textAlign: "center" }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            color: "white",
            flexWrap: "wrap",
          }}
        >
          <Typography>Discord</Typography>
          <Typography>Twitter</Typography>
          <Typography>Terms</Typography>
          <Typography>Privacy</Typography>
        </Stack>
        <Typography sx={{ color: "white", mt: 1 }}>
          Reflected App, LLC, All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};