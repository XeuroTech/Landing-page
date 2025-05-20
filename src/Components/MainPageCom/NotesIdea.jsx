import { Box, Button, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import reflectImage from "../../assets/mainpage/refletImage.jpg";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { CustomButton } from "../../../Theme/ThemeProvider";
const NotesIdea = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm && md"));

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


  const CustomButton = styled(Button)(() => ({
    backgroundColor: "transparent",
    border: "1px solid wheat",
    color: "wheat",
    borderRadius: "32px",
    fontSize: "12px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 122, 255, 0.1)",

    },
  }));


  return (
    <Box sx={{ backgroundColor: "#030014" }}>
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
        <CenteredDiv sx={{ gap: "10px", px: 2 }}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              maxWidth: "90%",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "white",
            }}
          >
            Think better with Reflect
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#acabb1b1",
              fontSize: { xs: "14px", sm: "16px" },
              maxWidth: "90%",
            }}
          >
            Never miss a note, idea, or connection
          </Typography>
        </CenteredDiv>
      </Box>
    </Box>
  );
};

export default NotesIdea;
