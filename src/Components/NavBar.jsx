import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import navlogo from "../assets/navlogo.png";
import { NavLink, useNavigate } from "react-router-dom";


function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const navigate = useNavigate()
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const GradientButton = styled(Button)(({ theme }) => ({
        background: "linear-gradient(180deg, #844BE0 0%, #221C86 100%)",
        color: theme.palette.common.white,
        "&:hover": {
            background: "linear-gradient(180deg, #945BEF 0%, #2A2399 100%)",
        },
        textTransform: "none",
        fontWeight: 500,
        padding: theme.spacing(1, 3),
    }));
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleLoginClick = () => {
        console.log("Login clicked");
    };
    const handleAccountClick = () => {
        navigate("/createaccount")
    };
    const navItems = ["Product", "Pricing", "Company", "Blog", "Changelog"];
    const drawer = (
        <Box
            sx={{
                width: "100vw",
                background: "rgba(8, 6, 36, 1)",
                height: "100vh",
                color: "white",
                display: "flex",
                flexDirection: "column",
                px: 2,
                py: 3,
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ mb: 2 }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List sx={{ flexGrow: 1 }}>
                {navItems.map((text) => (
                    <ListItem key={text} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton onClick={handleLoginClick}>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Box sx={{ px: 2, pb: 2 }}>
                <GradientButton fullWidth onClick={handleAccountClick} size="large">
                    Create Account
                </GradientButton>
            </Box>
        </Box>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: scrolled
                        ? "rgba(8, 6, 36, 0.7)"
                        : "rgba(8, 6, 36, 1)",
                    backdropFilter: scrolled ? "blur(10px)" : "none",
                    boxShadow: "none",
                    transition: "background-color 0.3s ease",
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: { xs: 56, sm: 64 },
                        px: { xs: 2, sm: 4, md: 6 },
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Left: Logo */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                        <Box
                            component="img"
                            src={navlogo}
                            sx={{ height: { xs: 24, md: 32 }, width: "auto" }}
                            alt="Reflect Logo"
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1rem", sm: "1.25rem" },
                                whiteSpace: "nowrap",
                            }}
                        >
                            Reflect
                        </Typography>
                    </Box>
                    {/* Center: Nav Items */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: { sm: 1.5, md: 2.5 },
                            border: '1px solid white',
                            borderRadius: 10,
                            px: 3,
                            py: 0.5,
                            mx: 'auto',
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                color="inherit"
                                sx={{
                                    fontSize: { sm: '0.85rem', md: '0.95rem' },
                                    fontWeight: 500,
                                    textTransform: 'none',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>







                    {/* Right: Auth Buttons & Menu Icon */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {/* Desktop Buttons */}
                        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
                            <Button
                                onClick={handleLoginClick}
                                color="inherit"
                                sx={{ fontSize: "0.9rem", fontWeight: 500 }}
                            >
                                Login
                            </Button>
                            <GradientButton onClick={handleAccountClick} size="small">
                                Create Account
                            </GradientButton>
                        </Box>
                        {/* Mobile Buttons */}
                        <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 1 }}>
                            <Button
                                color="inherit"
                                onClick={handleLoginClick}
                                size="small"
                                sx={{
                                    fontSize: "0.75rem",
                                    minWidth: "auto",
                                    fontWeight: 500,
                                    px: 1,
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleAccountClick}
                                size="small"
                                sx={{
                                    fontSize: "0.65rem",
                                    minWidth: "auto",
                                    fontWeight: 500,
                                    px: 1.5,
                                    background:
                                        "linear-gradient(180deg, #844BE0 0%, #221C86 100%)",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(180deg, #945BEF 0%, #2A2399 100%)",
                                    },
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                        {/* Menu Icon */}
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: "flex", sm: "none" } }}
                        >
                            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        width: "100vw",
                        background: "rgba(8, 6, 36, 1)",
                        color: "white",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}
export default Navbar;
