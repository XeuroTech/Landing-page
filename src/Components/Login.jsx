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
        p: 2,
        backgroundColor:"rgba(8,6,36,1)",      }}
    >
      <Box
        sx={{ height: "15rem", width: "15rem" }}
        component="img"
         src={loginlogo}
        alt="Login Logo"
      />
      <Typography color="white" mt={3}>
        SignIn/Up with
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: 7,
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <GradientButton>
            <Box
              sx={{ height: "1rem", borderRadius: 2 }}
              component="img"
              src={googlelogo}
              alt="Google Logo"
            />
          </GradientButton>
          <GradientButton>
            <Box
              component="img"
              sx={{ height: "1rem", borderRadius: 2 }}
              src={applelogo}
              alt="Apple Logo"
            />
          </GradientButton>
        </Box>
      </Box>
      <Typography sx={{ mt: 2 }} color="white">
        or continue with
      </Typography>
      <TextField
        size="small"
        id="filled-basic"
        placeholder="your@gmail.com"
        variant="filled"
        sx={{
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "rgba(15, 23, 42, 0.5)",
          },
          border: 1,
          borderColor: "wheat",
          borderRadius: 1,
          mt: 2,
          width: "100%",
          maxWidth: "300px"
        }}
      />
      <GradientButton sx={{ mt: 2, px: 9, width: "100%", maxWidth: "300px" }}>
        Continue
      </GradientButton>
      <Box mt={4}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            color: "white",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Typography>Discord</Typography>
          <Typography>Twitter</Typography>
          <Typography>Terms</Typography>
          <Typography>Privacy</Typography>
        </Stack>
        <Typography sx={{ color: "white", mt: 1, textAlign: "center" }}>
          Reflected App, LLC, All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};