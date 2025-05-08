import React from 'react';
import { 
  Box,
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Paper,
  useTheme 
} from '@mui/material';

const ReflectBlog = () => {
  const theme = useTheme();

  return (
      <Box sx={{px:9, py:6, bgcolor:"rgba(8,6,36,1)"}}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          color: theme.palette.primary.main,
          mb: 2 
        }}
      >
        Reflect Blog
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 3, color: 'white', width:"70%" ,xs:{
        width:"100%",
        textAlign:'center'
      },

      sm:{
       width:'100%'
      } }}>
        Learn how to think better by taking notes. Improve your note-taking with AI, learn new workflows, and see how notable founders and builders setup their work environments.
      </Typography>
      </Box>
  );
};

export default ReflectBlog;