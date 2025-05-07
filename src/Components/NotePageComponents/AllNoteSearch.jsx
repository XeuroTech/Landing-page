import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountSetup from '../../Components/NotePageComponents/AccountSetup.jsx'
import SearchField from '../../Components/NotePageComponents/SearchField.jsx'
import NavigationList from '../../Components/NotePageComponents/NavigationList.jsx'
import PinnedNotes from '../../Components/NotePageComponents/PinnedNotes.jsx'
import FilterMenu from '../../Components/NotePageComponents/FilterMenu.jsx'

const drawerWidth = 240;

export default function AppDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ 
      display: 'flex',
      backgroundColor: 'rgba(8,6,36,1)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <CssBaseline />
      
      {/* Mobile App Bar */}
      {isMobile && (
        <Box position="fixed" sx={{ 
          width: '100%',
          p: "10px",
          backgroundColor: 'rgba(8,6,36,1)',
          zIndex: theme.zIndex.drawer + 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <FilterMenu isMobile={isMobile} handleDrawerToggle={handleDrawerToggle} />
        </Box>
      )}
      
      {/* Desktop Filter Button */}
      {!isMobile && (
        <Box position="fixed" sx={{ 
          width: `calc(100% - ${drawerWidth}px)`, 
          ml: `${drawerWidth}px`, 
          p: "10px",
          backgroundColor: 'rgba(8,6,36,1)',
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <FilterMenu isMobile={isMobile} />
        </Box>
      )}
      
      {/* The drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'rgba(15,12,50,1)',
              color: 'white'
            },
          }}
        >
          <SearchField />
          <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <NavigationList />
          <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <PinnedNotes />
          <AccountSetup />
        </Drawer>
      </Box>
      
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3,
          backgroundColor: 'rgba(8,6,36,1)',
          color: 'white',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: { xs: '56px', sm: 0 }
        }}
      >
        <Toolbar />
        <Typography>
          Main content goes here...
        </Typography>
      </Box>
    </Box>
  );
}