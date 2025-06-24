import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreateIcon from '@mui/icons-material/Create';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EmergencyIcon from '@mui/icons-material/Emergency';

export default function NavigationList() {
  const navItems = [
    { text: 'Daily Notes', icon: <CreateIcon fontSize="small" /> },
    { text: 'All Notes', icon: <TextSnippetIcon fontSize="small" /> },
    { text: 'Map', icon: <EmergencyIcon fontSize="small" /> }
  ];

  return (
    <List sx={{ p: 2 }}>
      {navItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton sx={{ px: 1.5 }}>
            <ListItemIcon sx={{ 
              color: 'white', 
              minWidth: '32px',
              mr: -1
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{
                '& .MuiTypography-root': {
                  fontSize: '0.875rem'  
                }
              }} 
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}