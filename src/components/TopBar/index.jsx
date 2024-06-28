import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import TranslateIcon from '@mui/icons-material/Translate';
import RefreshIcon from '@mui/icons-material/Refresh';
import Dropdown from '../Dropdown'


export default function Main({
    title, 
    toggleMenu,
    languages = ['فارسی', 'English'],
}) {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{direction: 'rtl'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleMenu}
            sx={{ ml: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <TranslateIcon/>
            </IconButton>
            <Dropdown items={languages} />
            <IconButton sx={{ mr: 1}} size="large" aria-label="show 4 new mails" color="inherit">
                <Brightness6Icon/>
            </IconButton>
            <IconButton sx={{ mr: 1}} size="large" aria-label="show 4 new mails" color="inherit">
                <RefreshIcon/>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}