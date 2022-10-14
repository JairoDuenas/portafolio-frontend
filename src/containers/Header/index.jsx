import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react'
import Logo from '../../components/Logo';
import MenuHeader from '../../components/MenuHeader';
import MenuIconHeader from '../../components/MenuIconHeader';
import NameLogo from '../../components/NameLogo';

export default function Header() {

  return (
    <AppBar position='fixed' sx={{ p: 0.2, background: '#212121'}}>
      <Container maxWidth='xl' sx={{p: 0}}>
        <Toolbar sx={{px: 1}}>
          <MenuIconHeader  />
          <Logo />
          <NameLogo />
          <MenuHeader />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
