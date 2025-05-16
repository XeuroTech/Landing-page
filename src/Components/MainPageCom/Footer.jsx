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
                                    px={{ xs: 1.25, sm: 2, md: 3, lg: 4, xl: 6 }}
                                    py={4}
                                    bgcolor="#030014"
                                    sx={{ boxSizing: 'border-box' }}
                                  >
                                    {/* Main Footer Content */}
                                    <Box
                                      display="flex"
                                      flexDirection={{ xs: "column", xl: "row" }}
                                      justifyContent="space-between"
                                      alignItems="flex-start"
                                      maxWidth={{ lg: "310px", xl:"50%" }} // 👈 Core fix
                                      width="100%"
                                      mx="auto"
                                      gap={4}
                                    >
                                      {/* Left: Logo + Social Icons */}
                                      <Box
                                        display="flex"
                                        flexDirection={{ xs: "row", xl: "column" }}
                                        justifyContent="space-between"
                                        alignItems={{ xs: "center", xl: "flex-start" }}
                                        gap={{ xs: 2, xl: 3 }}
                                        width={{ xs: "100%", xl: "auto" }}
                                        height={{xl:"210px",}}
                                        minWidth={{ lg: "200px" }}
                                      >
                                        <Box display="flex" alignItems="center" gap={1}>
                                          <Box
                                            component="img"
                                            src={logo}
                                            alt="Reflect logo"
                                            sx={{
                                              width: "30px",
                                              height: "30px",
                                              borderRadius: "8px",
                                              flexShrink: 0
                                            }}
                                          />
                                          <Typography fontWeight={600} color="#fff" fontSize="20px" noWrap>
                                            Reflect
                                          </Typography>
                                        </Box>

                                        <Box display="flex" gap={2}>
                                          <DiscordIcon sx={{ color: "#aaa" }} />
                                          <TwitterIcon sx={{ color: "#aaa" }} />
                                        </Box>
                                      </Box>

                                      {/* Right: Footer Links */}
                                      <Box
                                        display="grid"
                                        gridTemplateColumns={{
                                          xs: "repeat(2, minmax(120px, 1fr))",
                                          xl: "repeat(3, minmax(150px, 1fr))",
                                        }}
                                        gap={4}
                                        flex={1}
                                        width="100%"
                                        textAlign="left"
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
                                      flexDirection={{ xs: "column", lg: "column" ,xl:"row"}}
                                      justifyContent="space-between"
                                      alignItems={{ xs: "flex-start", lg: "center" }}
                                      gap={{xs:2, xl:"11rem" ,lg:2}}
                                      maxWidth={{ xl: "max-content", lg: "310px" }}
                                      width="100%"
                                      mx="auto"
                                      px={{  sm: 3, lg: 0 }}
                                    >
                                      <Box width="100%" textAlign={{ xs: "left", lg: "center" }}>
                                        <FooterTitle sx={{ fontSize: { xs: "18px", lg: "22px" } }}>
                                          Get free note-taking workflows
                                        </FooterTitle>
                                        <Typography variant="body2" sx={{ color: "#efedfd99", fontSize: "14px" }}>
                                          In our weekly newsletter.
                                        </Typography>
                                      </Box>

                                      <Box
                                        display="flex"
                                        gap={2}
                                        flexDirection={{ xs: "column", sm: "row", lg: "column" ,xl:"row"}}
                                        justifyContent={{ xs: "flex-start", sm: "center" }}
                                        alignItems={{ xs: "stretch", sm: "center" }}
                                        width={{ xs: "100%", lg: "auto"  }}
                                      >
                                        <TextField
                                          variant="outlined"
                                          placeholder="Enter your email"
                                          size="small"
                                          sx={{
                                            width: { xs: "100%", sm: "280px", lg: "300px" },
                                            backgroundColor: "#9382FF0A",
                                            borderRadius: "4px",
                                            "& .MuiOutlinedInput-root": {
                                              "& fieldset": {
                                                border: "1px solid rgba(212, 212, 213, 0.6)",
                                              },
                                              "& input": {
                                                color: "white",
                                              },
                                            },
                                          }}
                                        />
                                        <Button
                                          variant="contained"
                                          gap={2}
                                          sx={{
                                            width: { xs: "100%", sm: "auto", lg: "100%", xl:"max-content" },
                                            px: { xs: 0, sm: 4, lg: 4 },
                                            backgroundColor: "#9382FF0A",
                                            color: "#fff",
                                            border: "1px solid rgba(212, 212, 213, 0.6)",
                                            whiteSpace: "nowrap",
                                            flexShrink: 0,
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
                                      flexDirection={{ xs: "column", sm: "row", lg: "column" ,xl:"row" }}
                                      justifyContent="space-between"
                                      alignItems="center"
                                      gap={2}
                                      maxWidth={{ xl: "50%", lg: "310px"  }}
                                      mx="auto"
                                      width="100%"
                                      textAlign="center"
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
