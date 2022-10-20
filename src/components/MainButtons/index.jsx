import React from 'react'
import { Button, Link, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import documentPdf from '../../docs/cv_dev_Jhon_Jairo_Dueñas_Vega-09-2022.pdf';

export default function MainButtons() {
  const navigate = useNavigate();

  const onDossier = (event) => {
    event.preventDefault();
    navigate('/dossier')
  }

  const onAbout = (event) => {
    event.preventDefault();
    navigate('/about')
  }

  return (
    <Stack
      className='main-buttons'
      width='100%'
      alignItems='center'
      marginTop='20px'
    >
      <Stack
        className='buttons'
        width='80%'
        justifyContent='center'
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{xs: 4, sm: 4}}>
        <Button
          variant='contained'
          color='info'
          size='large'
          onClick={onDossier}
        >Dossier
        </Button>
        <Button
          variant='contained'
          color='info'
          size='large'
          onClick={onAbout}
        >About
        </Button>
        <Link
          component='button'
          underline='none'
          href={documentPdf}
          target='_blank'
          
        >
          <Button
            variant='contained'
            size='large'
            color='secondary'
          >
            Download CV en pdf
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
