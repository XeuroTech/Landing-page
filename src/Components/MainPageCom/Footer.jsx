import {
  Box,
  Button,
  styled,
  Typography,
  TextField,
  Divider,
  Link,
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
  fontWeight: 500,
  color: "white",
  fontSize: "14px",
  marginBottom: "8px",
});

const FooterLink = styled(Link)({
  color: "#efedfd99",
  fontSize: "13px",
  fontWeight: 500,
  textDecoration: "none",
  "&:hover": {
    color: "white",
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
      <Box
        width="100%"
        px={{ xs: 3, sm: 4, md: 6, lg: 8, xl: 12 }}
        py={{ xs: 4, lg: 6, xl: 8 }}
        bgcolor="#030014"
        sx={{ boxSizing: "border-box" }}

        display="flex"
        flexDirection="column"
        justifyContent="start"
              >
        {/* Main Footer Content */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-around"
          alignItems={{ xs: "flex-start", lg: "flex-start" }}
          maxWidth="1600px"
          width="100%"
          height="100%"
          mx="auto"
          gap={{ xs: 4, lg: 12, xl: 16 }}
        >
          {/* Left: Logo + Social Icons */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            gap={{ xs: 3, lg: 15, xl: 5 }}
            minWidth={{ xs: "100%", lg: "220px", xl: "280px" }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Box
                component="img"
                src={logo}
                alt="Reflect logo"
                sx={{
                  width: { xs: "30px", xl: "36px" },
                  height: { xs: "30px", xl: "36px" },
                  borderRadius: "8px",
                }}
              />
              <Typography
                fontWeight={600}
                color="#fff"
                fontSize={{ xs: "20px", xl: "24px" }}
              >
                Reflect
              </Typography>
            </Box>

            <Box display="flex" gap={{ xs: 3, xl: 4 }}>
              <DiscordIcon
                sx={{
                  color: "#aaa",
                  cursor: "pointer",
                  fontSize: { xs: "24px", xl: "28px" },
                  "&:hover": { color: "white" },
                }}
              />
              <TwitterIcon
                sx={{
                  color: "#aaa",
                  cursor: "pointer",
                  fontSize: { xs: "24px", xl: "28px" },
                  "&:hover": { color: "white" },
                }}
              />
            </Box>
          </Box>

          {/* Right: Footer Links */}
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
            }}
            gap={{ xs: 4, sm: 6, lg: 16, xl: 16 }}
          >
            <FooterColumn>
              <FooterTitle sx={{ fontSize: { xs: "14px", xl: "16px" } }}>
                Product
              </FooterTitle>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Features
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Integrations
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Pricing
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Changelog
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Roadmap
              </FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle sx={{ fontSize: { xs: "14px", xl: "16px" } }}>
                Company
              </FooterTitle>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Our team
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Our values
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Blog
              </FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle sx={{ fontSize: { xs: "14px", xl: "16px" } }}>
                Resources
              </FooterTitle>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Downloads
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Documentation
              </FooterLink>
              <FooterLink
                href="#"
                sx={{ fontSize: { xs: "13px", xl: "14px" } }}
              >
                Contact
              </FooterLink>
            </FooterColumn>
          </Box>
        </Box>

        <Divider
          sx={{
            backgroundColor: "#1a1a2e",
            my: { xs: 4, lg: 6, xl: 8 },
          }}
        />

        {/* Newsletter Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-around"
          alignItems={{ xs: "flex-start", lg: "start" }}
          // maxWidth="1600px"
          width={{ lg:"100%" ,xl:"90%"  }}
          mx="auto"
        >
          <Box  display={"felx"} justifyContent={"start"} width={{ xs: "100%", lg: "30%" }}>
            <FooterTitle
              sx={{
                   
                fontSize: { xs: "18px", lg: "20px", xl: "22px" },
                mb: 1,
              }}
            >
              Get free note-taking workflows
            </FooterTitle>
            <Typography
              variant="body2"
              sx={{
                color: "#efedfd99",
                fontSize: { xs: "14px", xl: "16px" },
              }}
            >
              In our weekly newsletter.
            </Typography>
          </Box>

          <Box
            display="flex"
            gap={2}
            flexDirection={{ xs: "column", sm: "row" }}
            width={{ xs: "100%", lg: "50%" }}
            justifyContent={{ lg: "flex-end", xl: "flex-end" }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "400px", xl: "500px" },
                flexShrink: 0,
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "#9382FF0A",
                  borderRadius: "4px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid rgba(212, 212, 213, 0.6)",
                    },
                    "& input": {
                      color: "white",
                      fontSize: { xs: "14px", xl: "16px" },
                      padding: { xs: "10px 14px", xl: "12px 16px" },
                      "&::placeholder": {
                        opacity: 0.8,
                      },
                    },
                  },
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                px: { xs: 3, xl: 4 },
                py: { xs: 1, xl: 1.2 },
                backgroundColor: "#9382FF0A",
                color: "#fff",
                border: "1px solid rgba(212, 212, 213, 0.6)",
                whiteSpace: "nowrap",
                fontSize: { xs: "14px", xl: "16px" },
                "&:hover": {
                  backgroundColor: "rgba(147, 130, 255, 0.2)",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Divider
          sx={{
            backgroundColor: "#1a1a2e",
            my: { xs: 4, lg: 6, xl: 8 },
          }}
        />

 

  {/* Bottom Links */}
            <Box
              display="flex"
              flexDirection={{ xs: "column-reverse", sm: "row" }}
              justifyContent={{ xs: "center", sm: "space-between", xl: "space-around" }}
              alignItems="center"
              // maxWidth="1600px"
              width={{xl:"80%" , lg:"90%"}}
              mx="auto"
              // px={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 12 }}
              gap={{ xs: 1.5, sm: 0 }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#efedfd99",
                  fontSize: { xs: "12px", xl: "14px" },
                }}
              >
                Reflect App, LLC. All rights reserved.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#efedfd99",
                  fontSize: { xs: "12px", xl: "14px" },
                }}
              >
                Privacy Policy &nbsp; - &nbsp; Terms of Conditions
              </Typography>
            </Box>




      </Box>
    </FooterContainer>
  );
};

export default Footer;
