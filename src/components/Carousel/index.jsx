import React from 'react'
import imagen1 from '../../img/Captura-plantPedia.png';
import imagen2 from '../../img/Captura-react-crear-tareas.png';
import imagen3 from '../../img/Captura-react-ui-github.png';

export default function CarouselMain() {
  
  return (
    <div className='d-flex' 
      style={{
        width: '100%',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        
      }}
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide d-flex"
        data-bs-ride="carousel"
        style={{
          width: '80%',
          height: '16rem',
          background: '#424242',
          alignItems: 'center'
        }}
      >
        <div className="carousel-indicators" >
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
          
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className='d-flex' style={{justifyItems: 'center'}}>
              <img
                src={imagen1}
                className="img-fluid rounded mx-auto"
                alt="imagen1"
              />
            </figure>
          </div>
          <div className="carousel-item">
            <figure className='d-flex' style={{justifyItems: 'center'}}>
              <img
                src={imagen2}
                className="img-fluid rounded mx-auto"
                alt="imagen1"
              />
            </figure>
          </div>
          <div className="carousel-item">
            <figure className='d-flex' style={{justifyItems: 'center'}}>
              <img
                src={imagen3}
                className="img-fluid rounded mx-auto"
                alt="imagen1"
              />
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
