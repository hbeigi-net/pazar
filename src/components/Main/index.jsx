import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  }),
);

export default function PersistentDrawerRight({isOpen, children}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Main open={isOpen}>
        {children}
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: -1,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={isOpen}
      >
        <List sx={{paddingTop: '80px',border: 'unset'}}>
          {['بانک‌ها', 'AgTests', 'ثابت ها', 'test'].map((text, index) => (
            <ListItem key={text} disablePadding dir='rtl'>
              <ListItemButton >
                <ListItemIcon>
                 <ListIcon />
                </ListItemIcon>
                <ListItemText sx={{textAlign: 'right'}} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
    </Box>
  );
}
