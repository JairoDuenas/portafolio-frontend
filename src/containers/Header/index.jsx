import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react'
import Logo from '../../components/Logo';
import MenuHeader from '../../components/MenuHeader';
import MenuIconHeader from '../../components/MenuIconHeader';
import NameLogo from '../../components/NameLogo';

export default function Header() {

  return (
    <AppBar position='fixed' sx={{background: '#212121', borderRadius: '10px'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MenuIconHeader />
          <Logo />
          <NameLogo />
          <MenuHeader />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

