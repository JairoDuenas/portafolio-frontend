import { Box, Container, Stack } from '@mui/material';
import React from 'react'
import Header from '../../containers/Header';
import MainInfo from '../../components/MainInfo';

export default function HomePage() {
  return (
    <Container
      className='main-container'
      sx={{px: '5px'}}
    >
      <Header />
      <MainInfo />
    </Container>
  )
}
