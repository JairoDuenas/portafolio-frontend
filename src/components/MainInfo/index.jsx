import React from 'react'
import fotoJairo from '../../statics/fotoJairo.png'
import MainButtons from '../MainButtons';

export default function MainInfo() {
  return (
    <div className="card mb-5 mt-1" style={{width: "100%", height: '16rem',  background: '#cfd8dc'}}>
      <div className="row g-0" style={{ alignItems: "center", justifyContent: "center" }}>
      <div className="col-md-3 d-flex" style={{justifyContent: "center"}}>
        <figure style={{marginTop: "24px"}}>
          <img
          src={fotoJairo}
          className="img-fluid rounded-circle"
          alt="foto-perfil"
          style={{width: '13rem', height: '13rem'}}
        />
            
        </figure>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h1 className="card-title">Hola, soy Jairo</h1>
          <h4 className="card-text"><small className="text-muted">Desarrollador Web / Frontend</small></h4>
          <p className="card-text">Gran capacidad de adaptabilidad al cambio, trabajo en equipo, buenas relaciones interpersonales, con iniciativa
              y creatividad en la búsqueda de soluciones, pensamiento estratégico, alto sentido de compromiso con las
              entidades y personas que intervienen en mi oficio.</p>
        </div>
      </div>
      </div>
      <MainButtons />
  </div>
  )
}