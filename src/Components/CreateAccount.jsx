import React from 'react';
import { styled } from '@mui/material/styles'
import {
    Box,
    Typography,
    TextField,
    Button,
    FormControl,
    InputAdornment,
    IconButton,
    Container,
    CssBaseline
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const GradientButton = styled(Button)(({ theme }) => ({
        background: 'linear-gradient(180deg, #844BE0 0%, #221C86 100%)',
        color: theme.palette.common.white,
        '&:hover': {
            background: 'linear-gradient(180deg, #945BEF 0%, #2A2399 100%)',
        },
        fontSize: '1rem',
        fontWeight: 600,
    }));

    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/');
        // Add your form submission logic here
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'rgba(8,6,36,1)',
                display: 'flex',
                alignItems: 'center',
                py: 8
            }}
        >
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: '100%',
                        mx: 'auto',
                        p: { xs: 2, sm: 4 },
                        boxShadow: 3,
                        borderRadius: 3,
                        bgcolor: 'rgba(8,6,36,1)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        sx={{
                            color: 'white',
                            mb: 1,
                            fontWeight: 700,
                            fontSize: { xs: '1.75rem', sm: '2rem' }
                        }}
                    >
                        Welcome To Reflect
                    </Typography>
                    <Typography
                        align="center"
                        sx={{
                            mb: 4,
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                    >
                        Let's get your account set up
                    </Typography>

                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <Typography sx={{
                            color: 'white',
                            mb: 0.5,
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }}>
                            Username
                        </Typography>
                        <Typography sx={{
                            fontSize: "0.8rem",
                            color: 'rgba(255,255,255,0.6)',
                            mb: 1.5
                        }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Typography>
                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            size="medium"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255,255,255,0.4)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255,255,255,0.6)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '0.95rem',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                    fontSize: '0.95rem',
                                    py: 1.5,
                                },
                            }}
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <Typography sx={{
                            color: 'white',
                            mb: 0.5,
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }}>
                            Encryption Password
                        </Typography>
                        <Typography sx={{
                            fontSize: "0.8rem",
                            color: 'rgba(255,255,255,0.6)',
                            mb: 1.5
                        }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Typography>
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            size="medium"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255,255,255,0.4)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255,255,255,0.6)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '0.95rem',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                    fontSize: '0.95rem',
                                    py: 1.5,
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            sx={{ color: 'rgba(255,255,255,0.7)' }}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 4 }}>
                        <Typography sx={{
                            color: 'white',
                            mb: 0.5,
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }}>
                            Confirm Encryption Password
                        </Typography>
                        <Typography sx={{
                            fontSize: "0.8rem",
                            color: 'rgba(255,255,255,0.6)',
                            mb: 1.5
                        }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Typography>
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            fullWidth
                            size="medium"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255,255,255,0.4)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255,255,255,0.6)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '0.95rem',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                    fontSize: '0.95rem',
                                    py: 1.5,
                                },
                            }}
                        />
                    </FormControl>

                    <GradientButton

                        onClick={handleSubmit}
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                            py: 1.75,
                            fontSize: '1rem',
                            borderRadius: 1
                        }}
                    >
                        Create Account
                    </GradientButton>
                </Box>
            </Container>
        </Box>
    );
};

export default AuthForm;