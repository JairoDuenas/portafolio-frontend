import { Typography } from '@mui/material';
import React from 'react'

export default function NameLogo() {
  return (
    <Typography
      variant='h6'
      noWrap
      component='a'
      href='/'
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#eceff1',
        textDecoration: 'none'
      }}
    >
      Jairodv
    </Typography>
  )
}
