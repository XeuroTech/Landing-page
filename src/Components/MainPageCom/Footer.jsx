import { 
  Box, 
  Button, 
  styled, 
  Typography, 
  TextField, 
  Divider, 
  Link 
} from "@mui/material";
import React from "react";
import { FoterBg } from "../../../Theme/ThemeProvider.jsx";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import reflectImage from "../../assets/mainpage/refletImage.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "@mui/icons-material/Chat";
import logo from "../../assets/mainpage/logo.png";

const FooterContainer = styled(Box)(() => ({
  backgroundColor: "#030014",
  color: "#000",
  fontFamily: "sans-serif",
}));

const FooterColumn = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const FooterTitle = styled(Typography)({
  fontWeight: 600,
  color: "white",
  fontSize: "14px",
  marginBottom: "8px",
});

const FooterLink = styled(Link)({
  color: "#efedfd99",
  fontSize: "13px",
  fontWeight: 500,
  textDecoration: "none",
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

const Footer = () => {
  return (
    <FooterContainer>
      {/* Top Section */}
      <Box 
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          px: 2,
          minHeight: "557px",
          overflow: "hidden",
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
          <Button
            sx={{
              bgcolor: "#712FFF3D",
              color: "#F4F0FF",
              mt: 3,
              px: 3,
              border: 1,
              borderColor: "#F4F0FF",
              borderRadius: 3,
              fontWeight: 500,
              textTransform: "none",
            }}
          >
            Start your 14-day trail
          </Button>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box px={{ xs: 2, lg: 6 }} py={4}>
        {/* Main Footer Content */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent={{ xs: "flex-start", lg: "space-between" }}
          alignItems={{ xs: "flex-start", lg: "flex-start" }}
          gap={{ xs: 4, lg: 0 }}
        >
          {/* Left Side - Logo and Social */}
          <Box
            display="flex"
            flexDirection={{ xs: "row", lg: "column" }}
            justifyContent={{ xs: "space-between", lg: "flex-start" }}
            gap={{ xs: 0, lg: "90px" }}
            width={{ xs: "100%", lg: "auto" }}
            mb={{ xs: 3, lg: 0 }}
          >
            <Box display="flex" gap={1} mb={{ lg: 3 }}>
              <Box
                component="img"
                src={logo}
                alt="Reflect logo"
                width="30px"
                height="30px"
                sx={{ borderRadius: "8px" }}
              />
              <Typography fontWeight={600} color="#fff" fontSize="20px">
                Reflect
              </Typography>
            </Box>
            <Box display="flex" gap={2}>
              <DiscordIcon sx={{ color: "#aaa" }} />
              <TwitterIcon sx={{ color: "#aaa" }} />
            </Box>
          </Box>

          {/* Middle - Footer Links */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: 4, lg: 8 }}
            width={{ xs: "100%", lg: "auto" }}
            justifyContent={{ xs: "flex-start", lg: "space-between" }}
            ml={{ lg: 8 }}
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
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent={{ xs: "flex-start", lg: "space-between" }}
          alignItems={{ xs: "flex-start", lg: "center" }}
          gap={3}
        >
          <Box width={{ xs: "100%", lg: "auto" }}>
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
            flexDirection={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "stretch", lg: "center" }}
            width={{ xs: "100%", lg: "auto" }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{
                width: { xs: "100%", lg: "300px" },
                backgroundColor: "#9382FF0A",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                   border: "1px solid rgba(212, 212, 213, 0.6)",
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
                width: { xs: "100%", lg: "auto" },
                backgroundColor: "#9382FF0A",
                color: "#fff",
                fontWeight: 500,
                borderRadius: "4px",
                textTransform: "none",
                border: "1px solid rgba(212, 212, 213, 0.6)",
                whiteSpace: "nowrap",
                px: 3,
                py: 1,
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
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent={{ xs: "center", lg: "space-between" }}
          alignItems="center"
          gap={2}
          textAlign={{ xs: "center", lg: "left" }}
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