import { Box, Button, Typography, } from "@mui/material";
import React from "react";

const ReflectOtherApp = () => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const integrations = [
        {
            name: "Zapier",
            description: "Connect with Reflect with dozens of applications without code",
            icon: "src/assets/homepic/Zaiper.png",
            iconHeight: { xs: 40, sm: 50 }
        },
        {
            name: "Readwise",
            description: "Sync your reading highlights and notes with Reflect",
            icon: "src/assets/homepic/R Image.png",
            iconHeight: { xs: 40, sm: 50 }
        },
        {
            name: "Google and Outlook",
            description: "Integrate your contacts and calendars",
            icon: "src/assets/homepic/gogle.png",
            iconHeight: { xs: 50, sm: 70 }
        },
        {
            name: "Chrome and Safari",
            description: "Save web clips and sync with your Kindle",
            icon: "src/assets/homepic/calender.png",
            iconHeight: { xs: 50, sm: 70 }
        }
    ];

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#030014",
            color: "white",
            py: { xs: 4, sm: 8 }
        }}>
            {/* Header Section */}
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "90%", sm: "70%", md: "27%" },
                textAlign: "center",
                mb: { xs: 4, sm: 8 },
                gap: { xs: 2, sm: 3 }
            }}>
                <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                        borderRadius: 2,
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                        px: 2,
                        py: 1
                    }}
                >
                    Integration
                </Button>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                        lineHeight: 1.2
                    }}
                >
                    Use Reflect with other apps
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: "auto", sm: "80vh" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pb: { xs: 4, sm: 0 }
            }}>
                {/* Center Logo - Visible on all screens */}
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
                        alignSelf: 'center' // Ensure logo is centered on mobile
                    }}
                />

                {/* Integration Grid */}
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: { xs: 4, sm: 6 },
                    width: { xs: "90%", sm: "80%" },
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 2
                }}>
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

// Reusable Integration Card Component
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
                }}
            >
                {name}
            </Button>
            <Typography
                variant="body2"
                sx={{
                    fontSize: { xs: "0.7rem", sm: "0.9rem" },
                    opacity: 0.8,
                }}
            >
                {description}
            </Typography>
        </Box>
    </Box>
);

export default ReflectOtherApp;