import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import navlogo from '../assets/navlogo.png';

function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Styled button with gradient background
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

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                background: 'rgba(8, 6, 36, 1)',
                boxShadow: 'none',
                paddingX: { xs: 2, sm: 4, md: 6 }
            }}>
                <Toolbar>
                    {/* Mobile menu button (hidden on desktop) */}
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

                    {/* Left side - Logo with text */}
                    <Box sx={{
                        flexGrow: 1,
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
                                fontSize: { xs: '1rem', sm: '1.25rem' }
                            }}
                        >
                            Reflect
                        </Typography>
                    </Box>

                    {/* Middle - Navigation buttons (hidden on mobile) */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'center',
                        flexGrow: 1,
                        gap: { sm: 1, md: 2, lg: 4 }
                    }}>
                        <Button color="inherit" sx={{ fontSize: { sm: '0.8rem', md: '0.9rem' } }}>Product</Button>
                        <Button color="inherit" sx={{ fontSize: { sm: '0.8rem', md: '0.9rem' } }}>Pricing</Button>
                        <Button color="inherit" sx={{ fontSize: { sm: '0.8rem', md: '0.9rem' } }}>Company</Button>
                        <Button color="inherit" sx={{ fontSize: { sm: '0.8rem', md: '0.9rem' } }}>Blog</Button>
                        <Button color="inherit" sx={{ fontSize: { sm: '0.8rem', md: '0.9rem' } }}>Changelog</Button>
                    </Box>

                    {/* Right side - Login/Logout button (hidden on mobile) */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        minWidth: { xs: 'auto', sm: '160px' }
                    }}>
                        <Button
                            color="inherit"
                            sx={{ fontSize: { sm: '0.8rem', md: '0.9rem' } }}
                        >
                            Login
                        </Button>
                        <GradientButton
                            variant="contained"
                            size="small"
                            sx={{
                                fontSize: { sm: '0.8rem', md: '0.9rem' },
                                padding: { sm: '4px 8px', md: '6px 16px' }
                            }}
                        >
                            Start free trial
                        </GradientButton>
                    </Box>

                    {/* Mobile login button (hidden on desktop) */}
                    <Button
                        color="inherit"
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            minWidth: 'auto'
                        }}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;