import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';

export default function Header() {

  const navigate = useNavigate();

  const onHome = (event) => {
    event.preventDefault();
    navigate('/')
  }

  const onPortafolio = (event) => {
    event.preventDefault();
    navigate('/portafolio')
  }
  
  const onAbout = (event) => {
    event.preventDefault();
    navigate('/about')
  } 

  return (
    <nav class="navbar navbar-expand-lg bg-dark bg-gradient">
      <div class="container-fluid">
      <div class="navlogo m-2"> {<Logo/>} </div> 
        <a class="navbar-brand m-3" href="/" >
            <h2
              class="header-name font-monospace"
              style={{
                fontWeight: 500,
                letterSpacing: '2px',
                color: "#e0e0e0",
                margin: '0'
                
              }}
            >
              Jairodv
            </h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{width: '60px', height: '50px'}}
        >
          <i class="bi bi-list Heading" style={{ color: "white", fontSize: '30px' }}></i>
        </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active link-info" aria-current="page" href="onHome" onClick={onHome}>Home</a>
        <a class="nav-link link-info" href="onPortafolio" onClick={onPortafolio}>Portafolio</a>
        <a class="nav-link link-info" href="onAbout" onClick={onAbout}>Acerca de mí</a>
      </div>
        <span class="badge text-bg-secondary m-3 ">Info</span>
    </div>
  </div>
</nav>
  )
}