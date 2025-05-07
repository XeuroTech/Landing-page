import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function PinnedNotes() {
  const pinnedNotes = [
    "How to use Reflect",
    "The power of backlinks",
    "Saving Websites",
    "Tips and Tricks"
  ];

  return (
    <>
      <List sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.5)', pl: 2 }}>
          Pinned notes
        </Typography>
        {pinnedNotes.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ p: 0, pl: 2 }}>
              <ListItemText 
                primary={text} 
                sx={{ '& .MuiTypography-root': { fontSize: '0.875rem' }}} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
    </>
  );
}