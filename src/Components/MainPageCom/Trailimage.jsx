import { Box, Typography } from "@mui/material";
import React from "react";

const TrailImage = () => {
    return (
        <Box
            sx={{
                backgroundImage: "url(src/assets/homepic/trail.png)",
                backgroundPosition: "bottom center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: { xs: "auto", md: "100vh" },
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                gap: { xs: 2, sm: 4, md: 6 },
                textAlign: { xs: "center", md: "left" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 1, sm: 2, md: 3 },
                    width: { xs: "100%", md: "auto" },
                }}
            >
                <Typography variant="body1">Networked note-taking</Typography>
                <Typography variant="body1">Chrome and Safari web clipper</Typography>
                <Typography variant="body1">Kindle offline sync</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 1, sm: 2, md: 3 },
                    width: { xs: "100%", md: "auto" },
                }}
            >
                <Typography variant="body1">End to end encryption</Typography>
                <Typography variant="body1">Kindle highlights sync</Typography>
                <Typography variant="body1">iOS app</Typography>
            </Box>
        </Box>
    );
};

export default TrailImage;
