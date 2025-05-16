import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "@mui/icons-material/Chat";
import logo from "../../assets/mainpage/logo.png";

const FooterContainer = styled(Box)(() => ({
  backgroundColor: "#030014",
  color: "#000",
  padding: "40px 20px",
  fontFamily: "sans-serif",
//   [theme.breakpoints.down("sm")]: {
//     textAlign: "center",
//   },
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

const Footer = () => {
  return (
    <FooterContainer>
   
        <Grid
       px={6}
          container 
          spacing={4}
          sx={{
            display:"flex",
            flexDirection:{
                xs:"column",
                lg:"row",
                xl:"row"
            },
            justifyContent: {
              xs: "start",
              lg:"space-between",
              xl: "space-between"
            }
          }}
        >
          {/* Logo and Social Icons */}
          <Grid item xs={12} md={3}>
            <Box
              display="flex"
              flexDirection={{ xs: "row", lg: "column" }}
              alignItems={{ xs: "center", lg: "flex-start" }}
              gap={5}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  component="img"
                  src={logo}
                  alt="Reflect"
                  sx={{ 
                    borderRadius: "2px", 
                    width: "30px",
                    height: "auto" 
                  }}
                />
                <Typography fontWeight={600} color="#fff">
                  Reflect
                </Typography>
              </Box>
              <Box display="flex" gap={2}>
                <DiscordIcon sx={{ color: "#aaa" }} />
                <TwitterIcon sx={{ color: "#aaa" }} />
              </Box>
            </Box>
          </Grid>

          {/* Product Column */}
          <Grid item xs={6} sm={4} md={2}>
            <FooterColumn>
              <FooterTitle>Product</FooterTitle>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
              <FooterLink href="#">Roadmap</FooterLink>
            </FooterColumn>
          </Grid>

          {/* Company Column */}
          <Grid item xs={6} sm={4} md={2}>
            <FooterColumn>
              <FooterTitle>Company</FooterTitle>
              <FooterLink href="#">Our team</FooterLink>
              <FooterLink href="#">Our values</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterColumn>
          </Grid>

          {/* Resources Column */}
          <Grid item xs={6} sm={4} md={2}>
            <FooterColumn>
              <FooterTitle>Resources</FooterTitle>
              <FooterLink href="#">Downloads</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterColumn>
          </Grid>
        </Grid>
      

        <Divider sx={{ backgroundColor: "#efedfd99", my: 4  ,mx:{
        lg:6,
        xl:6,
         xs:2,
         sm:2
      } }} />
      <Box
        px={{ xs: 2, sm: 4, lg:6 ,xl:0 }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        width="100%"
        maxWidth="1200px"
        //  margin="0 auto"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        boxSizing="border-box"
        gap={{
            xl:"20px"
        }}
      >
        <Box
          width={{ xs: "100%", md: "auto" }}
          display="flex"
          flexDirection="column"
          gap={1}
        //   pr={{ md: 2 }}
        >
          <FooterTitle sx={{ fontSize: { lg: "24px" } }}>
            Get free note-taking workflows
          </FooterTitle>
          <Typography variant="body2" sx={{ color: "#efedfd99", fontSize: "14px" }}>
            In our weekly newsletter.
          </Typography>
        </Box>

        <Box
          display="flex"

          mt={
               {
                xs:2,
                md:2,
                sm:2,
               }
          }
          gap={2}
          alignItems="center"
          width={{ xs: "100%", md: "auto", xl:"100%" }}
          maxWidth={{ xs: "100%", md: "500px" }}
          flexGrow={1}
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            size="small"
            sx={{
              width: { xs: "100%", lg: "400px" },
              backgroundColor: "#9382FF0A",
              borderRadius: "8px",
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
              width: { xs: "100%", lg: "auto" },
              backgroundColor: "#9382FF0A",
              color: "#fff",
              fontWeight: 500,
              borderRadius: "6px",
              textTransform: "none",
             
              border: "1px solid #efedfd99",
              whiteSpace: "nowrap",
              flexShrink: 0,
              px: 3,
              py: 1
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#efedfd99", my: 4  ,mx:{
        lg:6,
        xl:6,
         xs:2,
         sm:2
      } }} />

      <Box
        px={{ xs: 2, lg: 6 }}
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
    </FooterContainer>
  );
};

export default Footer;