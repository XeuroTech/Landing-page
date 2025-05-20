import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import navlogo from '../assets/navlogo.png';

function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const GradientButton = styled(Button)(({ theme }) => ({
        background: 'linear-gradient(180deg, #844BE0 0%, #221C86 100%)',
        color: theme.palette.common.white,
        '&:hover': {
            background: 'linear-gradient(180deg, #945BEF 0%, #2A2399 100%)',
        },
        textTransform: 'none',
        fontWeight: 500,
        padding: theme.spacing(1, 3),
        borderRadius: '6px',
    }));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLoginClick = () => {
        console.log('Login clicked');
    };

    const handleAccountClick = () => {
        console.log('Create account clicked');
    };

    const navItems = ['Product', 'Pricing', 'Company', 'Blog', 'Changelog'];

    const drawer = (
        <Box
            sx={{
                width: '100vw',
                background: 'rgba(8, 6, 36, 1)',
                height: '100vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                px: 2,
                py: 3,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    color="inherit"
                    onClick={handleDrawerToggle}
                    sx={{ mb: 2 }}
                >
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
                <GradientButton
                    fullWidth
                    onClick={handleAccountClick}
                    size="large"
                >
                    Create Account
                </GradientButton>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1, width: '100%', overflowX: 'hidden' }}>
            <AppBar
                position="static"
                sx={{
                    background: 'rgba(8, 6, 36, 1)',
                    boxShadow: 'none',
                    width: '100%',
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: { xs: 56, sm: 64 },
                        px: { xs: 2, sm: 3, md: 4 },
                        maxWidth: '1440px',
                        margin: '0 auto',
                        width: '95%',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Logo */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mr: 2,
                        flexShrink: 0
                    }}>
                        <Box
                            component='img'
                            src={navlogo}
                            sx={{
                                height: { xs: 24, md: 32 },
                                width: 'auto'
                            }}
                            alt="Reflect Logo"
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Reflect
                        </Typography>
                    </Box>

                    {/* Desktop Navigation - hidden on mobile */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: 7,
                        gap: 2,
                        px: 2,
                        mx: 'auto',
                        flexGrow: 0
                    }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                color="inherit"
                                sx={{
                                    fontSize: '0.9rem',
                                    whiteSpace: 'nowrap',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    px: 1,
                                    minWidth: 'auto'
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Desktop Auth Buttons - hidden on mobile */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        gap: 2,
                        ml: 'auto',
                        flexShrink: 0
                    }}>
                        <Button
                            onClick={handleLoginClick}
                            color="inherit"
                            sx={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                paddingRight: "60px"
                            }}
                        >
                            Login
                        </Button>
                        <GradientButton
                            onClick={handleAccountClick}
                            size="small"
                        >
                            Create Account
                        </GradientButton>
                    </Box>

                    {/* Mobile Menu Button - shown only on mobile */}
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            ml: 'auto'
                        }}
                        onClick={handleDrawerToggle}
                    >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '100vw',
                        background: 'rgba(8, 6, 36, 1)',
                        color: 'white'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default Navbar;