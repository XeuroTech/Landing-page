import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import reflectImage from "../../assets/mainPage/refletImage.jpg";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const NotesIdea = () => {
  const CenteredDiv = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "max-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    boxSizing: "border-box",
    color: theme.palette.common.white,
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "transparent",
    border: "1px solid #007aff",
    borderRadius: "32px",
    fontSize: "12px",
    textTransform: "none",
    padding: theme.spacing(1, 3),
    color: "#007aff",
    "&:hover": {
      backgroundColor: "rgba(0, 122, 255, 0.1)",
      color: "white",
    },
  }));

  return (
    <Box sx={{backgroundColor: "#030014"  }}>
      <Box
        sx={{
          height: "max-content",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <CustomButton startIcon={<AutoAwesomeIcon />}>
          Take notes using AI
        </CustomButton>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${reflectImage})`,
          backgroundSize: "cover",

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: 2,
        }}
      >
        <CenteredDiv sx={{ gap: "10px" }}>
          <CenteredDiv>
            <Typography variant="h3"> Think Better with Reflect</Typography>
          </CenteredDiv>
          
          <CenteredDiv sx={{ color: "#acabb1b1", fontSize: "20px" }}>
            Never miss a note ,idea or Connection
          </CenteredDiv>
        </CenteredDiv>
      </Box>
    </Box>
  );
};

export default NotesIdea;
