import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MenuHeader() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const onChange = (event, newValue) => {
    setValue(newValue);
  }

  const onDossier = (event) => {
    event.preventDefault();
    navigate('/dossier')
  }

  const onHome = (event) => {
    event.preventDefault();
    navigate('/')
  }
  
  const onAbout = (event) => {
    event.preventDefault();
    navigate('/about')
  }

  return (
    <Box
      sx={{
        justifyContent: 'center',
        width: '60%', 
        display: { xs: 'none', sm:'flex' }
      }}
    >
      <Tabs
        value={value}
        onChange={onChange}
        textColor='inherit'
        aria-label='secondary tabs example'
        centered
        
      >
        <Tab label='Home' onClick={onHome} />
        <Tab label='Dossier' onClick={onDossier} />
        <Tab label='About' onClick={onAbout} />
      </Tabs>
    </Box>
  )
}
