import React from "react";
import imgReactShop from "../../img/Captura-react-shop.png";
import imgPokedux from "../../img/Captura-react-redux-actualizado.png";
import imgUserGitHub from "../../img/Captura-react-ui-github.png";
import imgPlanpedia from "../../img/Captura-plantPedia.png";
import imgTodo from "../../img/Captura-react-crear-tareas.png";
import imgRecetas from "../../img/captura-recetas.png";
import imgAsincronismo from "../../img/Captura-asincronismo.png";
import imgClonGoogle from "../../img/Captura-clon-google.png";
import imgBatatabit from "../../img/Captura-batatabit.png";
import imgAnimationBunny from "../../img/Captura-animation-bunny.png";

export default function InfoPortafilo() {
  return (
    <div className="info-portafolio" style={{ background: "#9e9e9e" }}>
      <div
        className="col p-4 d-flex flex-wrap"
        style={{ justifyContent: "space-evenly" }}
      >
        <div
          className="card h-120 text-bg-secondary shadow mb-4 "
          style={{ width: "18rem" }}
        >
          <img
            src={imgReactShop}
            className="card-img-top"
            alt="imagen react-shop"
          />
          <div className="card-body">
            <h5 className="card-title">React Shop</h5>
            <p className="card-text">
              Proyecto básico de tienda online con React.JS, consumiendo API
              para los productos.
            </p>
            <div className="card-footer">
              <a
                href="https://jairoduenas.github.io/react-shop/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4 "
          style={{ width: "18rem" }}
        >
          <img src={imgUserGitHub} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Octocat</h5>
            <p className="card-text">
              App con React.JS, consumiendo API de GitHub, muestra información
              de usuario ingresando el nombre de usuario de GitHub.
            </p>
            <div className="card-footer">
              <a
                href="https://react-material-hps5yquiw-jairoduenas.vercel.app/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4 "
          style={{ width: "18rem" }}
        >
          <img src={imgPokedux} className="card-img-top" alt="imagen pokemos" />
          <div className="card-body">
            <h5 className="card-title">Pokedux</h5>
            <p className="card-text">
              Aplicación con React.JS, consumiendo API de pokemons, se filtran
              en la barra de búsqueda.
            </p>
            <div className="card-footer">
              <a
                href="https://react-redux-pokedux-actualizado-h3eizcvl9-jairoduenas.vercel.app/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4"
          style={{ width: "18rem" }}
        >
          <img
            src={imgPlanpedia}
            className="card-img-top"
            alt="imagen-plantas"
          />
          <div className="card-body">
            <h5 className="card-title">Planpedia</h5>
            <p className="card-text">
              Proyecto de optimización con NextJS y TypeScript.JS, consumiendo
              API de plantas, muestra catálogo de plantas con descripción.
            </p>
            <div className="card-footer">
              <a
                href="https://next-optimizacion-3hxm6t7bi-jairoduenas.vercel.app/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4"
          style={{ width: "18rem" }}
        >
          <img src={imgTodo} className="card-img-top" alt="imagen-todo" />
          <div className="card-body">
            <h5 className="card-title">Crear tus tareas</h5>
            <p className="card-text">
              App con React.JS, navagación con React Router, se muestra un panel
              para crear, eliminar y editar tareas.
            </p>
            <div className="card-footer">
              <a
                href="https://react-crear-tareas-jgaasxkq3-jairoduenas.vercel.app/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4"
          style={{ width: "18rem" }}
        >
          <img src={imgRecetas} className="card-img-top" alt="imagen-recetas" />
          <div className="card-body">
            <h5 className="card-title">Recetas</h5>
            <p className="card-text">
              Proyecto PWA con React.JS, consumiendo API de MealDB, muestra
              recetas con sus instrucciones.
            </p>
            <div className="card-footer">
              <a
                href="https://recetas-bay.vercel.app/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4"
          style={{ width: "18rem" }}
        >
          <img src={imgAsincronismo} className="card-img-top" alt="imagen-asincronismo" />
          <div className="card-body">
            <h5 className="card-title">Last Music</h5>
            <p className="card-text">
              Proyecto de asincronismo, consumiendo API de SHAZAM, mustra listado de canciones.
            </p>
            <div className="card-footer">
              <a
                href="https://jairoduenas.github.io/async-landing/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4"
          style={{ width: "18rem" }}
        >
          <img src={imgClonGoogle} className="card-img-top" alt="imagen-clon-google" />
          <div className="card-body">
            <h5 className="card-title">Clon Google</h5>
            <p className="card-text">
              Proyecto en HTML y CSS, es clon del buscador de Google.
            </p>
            <div className="card-footer">
              <a
                href="https://jairoduenas.github.io/clon-google/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4"
          style={{ width: "18rem" }}
        >
          <img src={imgAnimationBunny} className="card-img-top" alt="imagen-animation-bunny" />
          <div className="card-body">
            <h5 className="card-title">Animation Bunny</h5>
            <p className="card-text">
              Proyecto de animaciones en HTML y CSS.
            </p>
            <div className="card-footer">
              <a
                href="https://jairoduenas.github.io/Animation-Bunny-css/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
        <div
          className="card h-120 text-bg-secondary shadow mb-4"
          style={{ width: "18rem" }}
        >
          <img src={imgBatatabit} className="card-img-top" alt="imagen-batatabit" />
          <div className="card-body">
            <h5 className="card-title">Batatabit</h5>
            <p className="card-text">
              App que muestra precios de criptomonedas sin funcionalidad, en HTML y CSS puro.
            </p>
            <div className="card-footer">
              <a
                href="https://jairoduenas.github.io/ProyectoBatatabit-html-css/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
