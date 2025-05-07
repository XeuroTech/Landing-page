import { useState } from 'react';
import React from 'react';
import { Menu, MenuItem, Button, IconButton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuIcon from '@mui/icons-material/Menu';

export default function FilterMenu({ isMobile, handleDrawerToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      ) : null}
      
      <Button 
        variant="contained" 
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)'
          }
        }}
      >
        <FilterAltIcon sx={{ color: 'white' }} />
        <span>Filter</span>    
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: "10px" }}
        MenuListProps={{
          sx: {
            backgroundColor: 'rgba(8,6,36,0.9)',
            color: 'white'
          }
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}