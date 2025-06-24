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
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../../assets/mainpage/logo.png"; // Replace with your Xeurotech logo path

const FooterContainer = styled(Box)(() => ({
  backgroundColor: "#030014",
  color: "#fff",
  fontFamily: "sans-serif",
}));

const FooterColumn = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const FooterTitle = styled(Typography)(() => ({
  fontWeight: 600,
  color: "white",
  fontSize: "14px",
  marginBottom: "8px",
}));

const FooterLink = styled(Link)(() => ({
  color: "#efedfd99",
  fontSize: "13px",
  fontWeight: 500,
  textDecoration: "none",
  "&:hover": {
    color: "white",
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Box
        width="100%"
        px={{ xs: 3, sm: 4, md: 6, lg: 8, xl: 12 }}
        py={{ xs: 4, lg: 6, xl: 8 }}
        sx={{ boxSizing: "border-box" }}
        display="flex"
        flexDirection="column"
        justifyContent="start"
      >
        {/* Main Content */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-around"
          alignItems="flex-start"
          width="100%"
          mx="auto"
          gap={{ xs: 4, lg: 12 }}
        >
          {/* Logo and Social Icons */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            gap={4}
            minWidth={{ xs: "100%", lg: "220px", xl: "280px" }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Box
                component="img"
                src={logo}
                alt="Xeurotech Logo"
                sx={{
                  width: { xs: "30px", xl: "36px" },
                  height: { xs: "30px", xl: "36px" },
                  borderRadius: "8px",
                }}
              />
              <Typography fontWeight={600} fontSize={{ xs: "20px", xl: "24px" }}>
                Xeurotech
              </Typography>
            </Box>

            <Box display="flex" gap={3}>
              <TwitterIcon sx={{ color: "#aaa", cursor: "pointer", "&:hover": { color: "#fff" } }} />
              <LinkedInIcon sx={{ color: "#aaa", cursor: "pointer", "&:hover": { color: "#fff" } }} />
              <GitHubIcon sx={{ color: "#aaa", cursor: "pointer", "&:hover": { color: "#fff" } }} />
            </Box>
          </Box>

          {/* Footer Links */}
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
            }}
            gap={{ xs: 4, sm: 6, lg: 16, xl: 16 }}
          >
            <FooterColumn>
              <FooterTitle>Services</FooterTitle>
              <FooterLink href="#">Web Development</FooterLink>
              <FooterLink href="#">Mobile Apps</FooterLink>
              <FooterLink href="#">UI/UX Design</FooterLink>
              <FooterLink href="#">Cloud Integration</FooterLink>
              <FooterLink href="#">AI Solutions</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Company</FooterTitle>
              <FooterLink href="#">About Xeurotech</FooterLink>
              <FooterLink href="#">Our Team</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">News & Press</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Support</FooterTitle>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
            </FooterColumn>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#1a1a2e", my: { xs: 4, lg: 6, xl: 8 } }} />

        {/* Bottom Links */}
        <Box
          display="flex"
          flexDirection={{ xs: "column-reverse", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          width={{ xl: "75%", lg: "90%" }}
          mx="auto"
          textAlign={{ xs: "center", sm: "left" }}
          gap={{ xs: 2, sm: 0 }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#efedfd99",
              fontSize: { xs: "12px", xl: "14px" },
            }}
          >
            © {new Date().getFullYear()} Xeurotech Software Solutions. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#efedfd99",
              fontSize: { xs: "12px", xl: "14px" },
            }}
          >
            Privacy Policy &nbsp; - &nbsp; Terms & Conditions
          </Typography>
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
