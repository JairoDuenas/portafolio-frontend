import { Box, IconButton, MenuItem } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';

export default function MenuIconHeader() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{
      flexGrow: 1,
      display: { xs: 'flex', md: 'none' }
    }} >
      <IconButton
        id='basic-Icon'
        size='large'
        aria-controls={open ? '' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
      >
      <MenuIcon />
      </IconButton>
      <Menu 
        
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-Icon',
          
        }}
      >
        <MenuItem onClick={handleClose}>Portafolio</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>

      </Menu>
    </Box>
  )
}
