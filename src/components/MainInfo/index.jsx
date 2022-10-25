import React from 'react'
import fotoJairo from '../../statics/fotoJairo-comprimida.png'

export default function MainInfo() {
  return (
    <div className="card mt-1" style={{ background: '#fafafa' }}>
      <div className="row g-0" style={{ alignItems: "center", justifyContent: "center" }}>
      <div className="col-md-3 d-flex" style={{justifyContent: "center"}}>
        <figure style={{ marginTop: "24px" }}>
          <div className='shadow-lg rounded-circle'>
            <img
          src={fotoJairo}
          className="img-fluid rounded-circle"
          alt="foto-perfil"
          style={{width: '13rem', height: '13rem'}}
        />
            </div>
          
            
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
  </div>
  )
}