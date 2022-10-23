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
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
      <div className="container-fluid">
      <div className="navlogo m-2"> {<Logo/>} </div> 
        <a className="navbar-brand m-3" href="/" >
          <h2
            className="header-name font-monospace"
            style={{
              fontWeight: 500,
              letterSpacing: '2px',
              color: "#eceff1",
              margin: '0'
            }}
          >
            Jairodv
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{width: '55px', height: '40px', border: 'solid 0.3px #eceff1'}}
        >
          <i className="bi bi-list Heading" style={{ color: "#eceff1", fontSize: '30px' }}></i>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active link-info" aria-current="page" href="onHome" onClick={onHome}>Home</a>
          <a className="nav-link link-info" href="onPortafolio" onClick={onPortafolio}>Portafolio</a>
          <a className="nav-link link-info" href="onAbout" onClick={onAbout}>Acerca de mí</a>
        </div>
        <span className="badge text-bg-secondary m-3 ">Info</span>
    </div>
  </div>
</nav>
  )
}