import React from 'react'
import fotoJairo from '../../statics/fotoJairo.png'
import { Card, CardMedia, Stack, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import MainButtons from '../MainButtons';

export default function MainInfo() {
  return (
    <Stack className='main-info' sx={{height: '38vh'}}>
      <Stack className='main-info-card'
          sx={{
            backgroundColor: '#eceff1',
            borderRadius: '10px',
            marginTop: '4.5rem',
            width: '100%',
          }}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{xs: 1, sm: 2}}
        >
        <Stack
          className='stack-card-profile'
          sx={{ alignItems: 'center', marginY: '10px', marginX: '10px'}}>
            <Card
              elevation={4}
              sx={{
                width: '200px',
                borderRadius: '50%',
              }}
            >
            <CardMedia
                className='card-media-photo-profile'
                component='img'
                image={fotoJairo}
                alt='Foto de perfil'
                sx={{
                  width: '150',
                }}
              />
            </Card>
        </Stack>
        <Stack className='stack-card-header'
          sx={{ alignItems: 'center' }}>
          <CardHeader 
            className='card-header'
            title="Hola soy Jairo"
            subheader="Desarrollador Web / Frontend / Junior" />
          <Stack
            className='stack-profile-info'
            width='90%'
          >
            <Typography variant='subtitle1'>
              Pefil personal
            </Typography>
            <Typography variant='body2' sx={{width: '95%', marginBottom: '20px'}} >
              Gran capacidad de adaptabilidad al cambio, trabajo en equipo, buenas relaciones interpersonales, con iniciativa
              y creatividad en la búsqueda de soluciones, pensamiento estratégico, alto sentido de compromiso con las
              entidades y personas que intervienen en mi oficio.
            </Typography>
          </Stack>
      </Stack>
    </Stack> 
      <MainButtons />
  </Stack>    
  )
}
