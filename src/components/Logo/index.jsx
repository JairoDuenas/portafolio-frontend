import { CardMedia } from '@mui/material';
import React from 'react';
import logo from '../../statics/logo.png';

export default function Logo() {
  return (
    <CardMedia 
      component='img'
      image={logo}
      alt="logo-personal"
      sx={{
        width: 40,
        height: 40,
        display: { xs: 'flex', md: 'flex' }, mr: 2
      }}
    >
    </CardMedia>
  )
}
