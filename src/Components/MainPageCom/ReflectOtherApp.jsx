import { Box, Button, Typography } from "@mui/material";
import React from "react";

const XeurotechIntegrations = () => {
  const integrations = [
    {
      name: "Slack",
      description: "Streamline team collaboration with real-time messaging integration.",
      icon: "src/assets/integrations/slack.png",
      iconHeight: { xs: 40, sm: 50 },
    },
    {
      name: "GitHub",
      description: "Seamless code deployment, version control, and DevOps workflows.",
      icon: "src/assets/integrations/github.png",
      iconHeight: { xs: 40, sm: 50 },
    },
    {
      name: "AWS & Azure",
      description: "Robust cloud infrastructure and scalable deployment environments.",
      icon: "src/assets/integrations/images.png",
      iconHeight: { xs: 50, sm: 70 },
    },
    {
      name: "Stripe & PayPal",
      description: "Integrated, secure payment systems for SaaS and e-commerce platforms.",
      icon: "src/assets/integrations/stripe.png",
      iconHeight: { xs: 50, sm: 70 },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#030014",
        color: "white",
        py: { xs: 4, sm: 8 },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "90%", sm: "70%", md: "35%" },
          textAlign: "center",
          mb: { xs: 4, sm: 8 },
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            borderRadius: 2,
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
            px: 2,
            py: 1,
            fontWeight: 500,
          }}
        >
          Integrations
        </Button>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "40px", sm: "40px", md: "56px", lg: "56px" },
            lineHeight: 1.2,
            fontWeight: 500,
            width: "90%",
          }}
        >
          Seamlessly Connect with Powerful Tools
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="src/assets/mainpage/logo.png"
          sx={{
            position: { xs: "static", sm: "absolute" },
            left: { sm: "50%" },
            top: { sm: "50%" },
            transform: { sm: "translate(-50%, -50%)" },
            height: { xs: 60, sm: 80, md: 100 },
            width: { xs: 60, sm: 80, md: 100 },
            zIndex: 1,
            mb: { xs: 4, sm: 0 },
            alignSelf: "center",
          }}
        />

        {/* Integration Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 4, sm: 6 },
            width: { xs: "90%", sm: "80%" },
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {integrations.map((item, index) => (
            <IntegrationCard
              key={index}
              name={item.name}
              description={item.description}
              icon={item.icon}
              iconHeight={item.iconHeight}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

// Integration Card Component
const IntegrationCard = ({ name, description, icon, iconHeight }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: { xs: 1.5, sm: 2 },
      p: 3,
      borderRadius: 2,
    }}
  >
    <Box
      component="img"
      src={icon}
      sx={{
        height: iconHeight,
        mb: 1,
      }}
      alt={`${name} icon`}
    />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Button
        variant="text"
        color="inherit"
        sx={{
          fontSize: { xs: "0.9rem", sm: "1.1rem" },
          textTransform: "none",
          fontWeight: 500,
        }}
      >
        {name}
      </Button>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.7rem", sm: "0.9rem" },
          opacity: 0.8,
          fontWeight: 500,
        }}
      >
        {description}
      </Typography>
    </Box>
  </Box>
);

export default XeurotechIntegrations;
