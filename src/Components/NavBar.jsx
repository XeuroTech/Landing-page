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
    const [scrolled, setScrolled] = React.useState(false);

    // Scroll listener to toggle background
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const GradientButton = styled(Button)(({ theme }) => ({
        background: 'linear-gradient(180deg, #844BE0 0%, #221C86 100%)',
        color: theme.palette.common.white,
        '&:hover': {
            background: 'linear-gradient(180deg, #945BEF 0%, #2A2399 100%)',
        },
        textTransform: 'none',
        fontWeight: 500,
        padding: theme.spacing(1, 3),
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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    transition: 'background-color 0.3s ease',
                    backgroundColor: scrolled ? 'rgba(8, 6, 36, 0.7)' : 'rgba(8, 6, 36, 1)',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    boxShadow: 'none',
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: { xs: 56, sm: 64 },
                        paddingX: { xs: 2, sm: 4, md: 6 }
                    }}
                >
                    {/* Logo */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mr: 2
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

                    {/* Center Nav */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'inline-flex' },
                        justifyContent: 'center',
                        border: 1,
                        borderColor: 'white',
                        fontWeight: 500,
                        borderRadius: 7,
                        gap: { sm: 1, md: 2, lg: 3 },
                        px: 2,
                        mx: 'auto'
                    }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                color="inherit"
                                sx={{
                                    fontSize: { sm: '0.8rem', md: '0.9rem' },
                                    whiteSpace: 'nowrap',
                                    textTransform: 'none',
                                    fontWeight: 500
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Desktop Auth Buttons */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        gap: 2,
                        ml: 'auto'
                    }}>
                        <Button
                            onClick={handleLoginClick}
                            color="inherit"
                            sx={{
                                fontSize: '0.9rem',
                                fontWeight: 500
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

                    {/* Mobile Auth Buttons */}
                    <Box sx={{
                        display: { xs: 'flex', sm: 'none' },
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        gap: 1
                    }}>
                        <Button
                            color="inherit"
                            onClick={handleLoginClick}
                            size="small"
                            sx={{
                                fontSize: '0.8rem',
                                minWidth: 'auto',
                                fontWeight: 500
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleAccountClick}
                            size="small"
                            sx={{
                                fontSize: '0.6rem',
                                minWidth: 'auto',
                                fontWeight: 500,
                                background: 'linear-gradient(180deg, #844BE0 0%, #221C86 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(180deg, #945BEF 0%, #2A2399 100%)',
                                },
                            }}
                        >
                            Create Account
                        </Button>
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            ml: 'auto'
                        }}
                        onClick={handleDrawerToggle}
                    >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
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
