import { Button, Stack } from '@mui/material';
import React from 'react'

export default function MenuHeader() {
  
  return (
    <Stack
      marginLeft={8}
      spacing={4}
      direction='row'
      sx={{ display: { xs: 'none', md: 'flex' }
      }}
    >
      <Button variant='outlined' sx={{color: '#eceff1'}} >Portafolio</Button>
      <Button variant='outlined' sx={{color: '#eceff1'}}> About</Button>
    </Stack>
      
  )
}
