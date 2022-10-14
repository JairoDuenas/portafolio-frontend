import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export default function MenuIconHeader() {

  const [openDrawer, setOpenDrawer] = useState(null);

  const open = Boolean(openDrawer)
  
  const onClose = () => {
    setOpenDrawer(null);
  }
  const navigate = useNavigate();
  
  const pages = [
    {
      text: 'Home', 
      icon: <HomeIcon />,
      onClick: () => navigate('/'),
    },
    {
      text: 'Dossier',
      icon: <WorkIcon />,
      onClick: () => navigate('/dossier'),
    },
    {
      text: 'About',
      icon: <InfoIcon />,
      onClick: () => navigate('/about'),
    }
    ];

  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={onClose}
      >
        <List>
          {
            pages.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItemButton
                  
                  onClick={onClick}
                  key={text}
              >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItemButton>
              )
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{
          ml: 1,
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none'
          }
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
      )
    }