import { 
  Box, 
  Button, 
  styled, 
  Typography, 
  Grid, 
  TextField, 
  Divider, 
  Link 
} from "@mui/material";
import React from "react";
 import {FoterBg} from "../../../Theme/ThemeProvider.jsx";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import reflectImage from "../../assets/mainpage/refletImage.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "@mui/icons-material/Chat";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#030014",
  color: "#000",
  fontFamily: "sans-serif",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const FooterColumn = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const FooterTitle = styled(Typography)({
  fontWeight: 600,
  color: "white",
  fontSize: "14px",
  marginBottom: "8px",
});

const FooterLink = styled(Link)({
  color: "#efedfd99",
  fontSize: "14px",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

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

const Footer = () => {
  return (
    <FooterContainer>
      {/* Top Section */}
<Box
  sx={{
    position: "relative", // Required for absolute positioning of background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "center",
    px: 2,
    minHeight: "557px", // Ensures space for the background image
    overflow: "hidden",  // Optional: hides overflow from the image
  }}
>
  <FoterBg image={reflectImage} />

  <Box sx={{ position: "relative", zIndex: 1 }}>
    <CustomButton startIcon={<AutoAwesomeIcon />} sx={{ mb: 2 }}>
      Take notes using AI
    </CustomButton>

    <Typography variant="h3">Think Better with Reflect</Typography>
    <Typography sx={{ color: "#acabb1b1", fontSize: "20px", mt: 1 }}>
      Never miss a note, idea or Connection
    </Typography>
  </Box>
</Box>



      {/* Footer Section */}
      <Box px={{ xs: 2, lg: 6 }} py={4}>
        {/* Main Footer Content */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
          gap={4}
        >
          {/*   Left Side - Logo and Social */}
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            width={{ xs: "100%", lg: "auto" }}
            
          >
            <Typography fontWeight={600} color="#fff" fontSize="20px">
              Reflect
            </Typography>
            <Box display="flex" gap={2}>
              <DiscordIcon sx={{ color: "#aaa" }} />
              <TwitterIcon sx={{ color: "#aaa" }} />
            </Box>
          </Box>

          {/* Middle - Footer Links */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            gap={{ xs: 4, sm: 8 }}
            width="100%"
            justifyContent="space-between"
            maxWidth="600px"
          >
            <FooterColumn>
              <FooterTitle>Product</FooterTitle>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
              <FooterLink href="#">Roadmap</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Company</FooterTitle>
              <FooterLink href="#">Our team</FooterLink>
              <FooterLink href="#">Our values</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Resources</FooterTitle>
              <FooterLink href="#">Downloads</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterColumn>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#1a1a2e", my: 4 }} />

        {/* Newsletter Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          gap={3}
        >
          <Box>
            <FooterTitle sx={{ fontSize: "18px" }}>
              Get free note-taking workflows
            </FooterTitle>
            <Typography variant="body2" sx={{ color: "#efedfd99", fontSize: "14px" }}>
              In our weekly newsletter.
            </Typography>
          </Box>

          <Box
            display="flex"
            gap={1}
            alignItems="center"
            width={{ xs: "100%", md: "auto" }}
            maxWidth="500px"
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{
                width: { xs: "100%", md: "300px" },
                backgroundColor: "#9382FF0A",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#E0E0E0",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BDBDBD",
                  },
                  "& input::placeholder": {
                    color: "#757575",
                    opacity: 1,
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", md: "auto" },
                backgroundColor: "#9382FF",
                color: "#fff",
                fontWeight: 500,
                borderRadius: "4px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#7A6BFF",
                },
                border: "1px solid #efedfd99",
                whiteSpace: "nowrap",
                px: 3,
                py: 1
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#1a1a2e", my: 4 }} />

        {/* Bottom Links */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2" color="#efedfd99">
            Privacy Policy &nbsp; - &nbsp; Terms of Conditions
          </Typography>
          <Typography variant="body2" color="#efedfd99">
            Reflect App, LLC. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;