import {
  Box,
  Button,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import reflectImage from "../../assets/mainpage/hero-section.avif";

import { CustomButton } from "../../../Theme/ThemeProvider";

const NotesIdea = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#030014", pt: { xs: 8, md: 15 }, pb: 8 }}>
      {/* Container for two-column layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          height: '100vh', 
          px: { xs: 3, sm: 6, md: 10 },
          marginBottom:"20vh",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Left Column: Text + Button */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            gap: 6,
            marginBottom:"10%",
            
          }}
        >
          <CustomButton >
            Xeurotech - Innovative Build Inspire.
          </CustomButton>

          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
              color: "white",
              maxWidth: { md: "90%" },
            }}
          >
            Create better with Xeurotech.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#acabb1b1",
              fontSize: { xs: "14px", sm: "16px" },
              maxWidth: { md: "90%" },
            }}
          >
           Smart solutions. Clean code. Real results.
          </Typography>
        </Box>

        {/* Right Column: Hero Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={reflectImage}
            alt="Reflect Hero"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 2,
              boxShadow: 8,
             
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NotesIdea;
