import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import navlogo from '../assets/navlogo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [Token, settoken] = React.useState(true); // Set to true for testing
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const GradientButton = styled(Button)(({ theme }) => ({
        background: 'linear-gradient(180deg, #844BE0 0%, #221C86 100%)',
        color: theme.palette.common.white,
        '&:hover': {
            background: 'linear-gradient(180deg, #945BEF 0%, #2A2399 100%)',
        },
        marginLeft: theme.spacing(2),
        textTransform: 'none',
        fontWeight: 500,
    }));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleAccountClick = () => {
        navigate('/createaccount');
    };

    const handleTrialClick = () => {
        settoken(false);
    };
    const drawer = (
        <Box
            sx={{
                width: '100%',
                background: 'rgba(8, 6, 36, 1)',
                height: '100vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                px: 2,
                py: 3,
            }}
        >
            {/* Top: Navigation Items + Login */}
            <Box>
                <List>
                    {['Product', 'Pricing', 'Company', 'Blog', 'Changelog'].map((text) => (
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
            </Box>

            {/* Bottom: Start Free Trial / Create Account */}
            <Box sx={{ mt: 2 }}>
                {Token ? (
                    <GradientButton
                        fullWidth
                        onClick={handleTrialClick}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                            py: 1.5,
                        }}
                    >
                        Start free trial
                    </GradientButton>
                ) : (
                    <GradientButton
                        fullWidth
                        onClick={handleAccountClick}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                            py: 1.5,
                        }}
                    >
                        Create Account
                    </GradientButton>
                )}
            </Box>
        </Box>
    );


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                background: 'rgba(8, 6, 36, 1)',
                boxShadow: 'none',
                paddingX: { xs: 2, sm: 4, md: 6 }
            }}>
                <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
                    {/* Mobile menu button */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'block', sm: 'none' }
                        }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo with text */}
                    <Box sx={{
                        flexGrow: { xs: 1, sm: 0 },
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        minWidth: { xs: 'auto', sm: '160px' }
                    }}>
                        <Box
                            component='img'
                            src={navlogo}
                            sx={{
                                height: { xs: 24, md: 32 },
                                width: 'auto'
                            }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            Reflect
                        </Typography>
                    </Box>

                    {/* Navigation links - desktop */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'center',
                        flexGrow: 1,
                        gap: { sm: 1, md: 2, lg: 4 },
                        mx: 2
                    }}>
                        {['Product', 'Pricing', 'Company', 'Blog', 'Changelog'].map((item) => (
                            <Button
                                key={item}
                                color="inherit"
                                sx={{
                                    fontSize: { sm: '0.8rem', md: '0.9rem' },
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Right side buttons - desktop */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Button
                            onClick={handleLoginClick}
                            color="inherit"
                            sx={{ fontSize: { sm: '0.8rem', md: '0.9rem' } }}
                        >
                            Login
                        </Button>
                        {Token ? (
                            <GradientButton
                                variant="contained"
                                size="small"
                                onClick={handleTrialClick}
                                sx={{
                                    fontSize: { sm: '0.8rem', md: '0.9rem' },
                                    padding: { sm: '6px 12px', md: '8px 16px' },
                                    display: { xs: 'none', md: 'inline-flex' }  // 👈 This hides it on small screens
                                }}
                            >
                                Start free trial
                            </GradientButton>

                        ) : (
                            <GradientButton
                                variant="contained"
                                size="small"
                                onClick={handleAccountClick}
                                sx={{
                                    fontSize: { sm: '0.8rem', md: '0.9rem', lg: '10px' },
                                    padding: { sm: '6px 12px', md: '8px 16px' }
                                }}
                            >
                                Create Account
                            </GradientButton>
                        )}
                    </Box>

                    {/* Mobile login button */}
                    <Button
                        color="inherit"
                        onClick={handleLoginClick}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            minWidth: 'auto',
                            ml: 'auto'
                        }}
                    >
                        Login
                    </Button>
                    {/* Mobile Create Account button */}
                    <Button
                        color="inherit"
                        onClick={handleLoginClick}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            minWidth: 'auto',
                            ml: 'auto'
                        }}
                    >
                        Create Account
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Mobile drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
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