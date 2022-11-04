import React from "react";
import { useNavigate } from "react-router-dom";
import logoSvg from "../../statics/logo-jd.svg";

export default function Footer() {
  const colorIcon = { color: "#f4f5f7" };
  const sizeIcon = { fontSize: "1.5rem" };

  const navigate = useNavigate();

  const onHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const onPortafolio = (event) => {
    event.preventDefault();
    navigate("/portafolio");
  };

  const onAbout = (event) => {
    event.preventDefault();
    navigate("/about");
  };

  return (
    <div
      className="footer d-flex bg-dark bg-gradient"
      style={{ alignItems: "flex-start", width: "100%" }}
    >
      <div
        className="left-footer d-flex flex-column"
        style={{ justifyContent: "center", width: "45%", marginBottom: "2rem" }}
      >
        <div className="logo-svg d-flex p-3" style={{ alignItems: "center" }}>
          <figure className="figure-logo-svg m-0" style={{}}>
            <img
              className="image-svg rounded-circle"
              src={logoSvg}
              alt="logo-svg "
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "#f4f5f7",
              }}
            />
          </figure>
          <a className="navbar-brand m-2" href="/">
            <h2
              className="header-name font-monospace"
              style={{
                fontWeight: 500,
                fontSize: "0.9rem",
                letterSpacing: "2px",
                color: "#eceff1",
                margin: "0",
              }}
            >
              Jairodv
            </h2>
          </a>
        </div>
        <div
          className="links-footer d-flex flex-column"
          style={{ marginLeft: "1rem" }}
        >
          <h5
            className="title-links m-1 "
            style={{ fontWeight: 500, color: "#eceff1" }}
          >
            Links
          </h5>
          <nav className="nav flex-column ">
            <div>
              <a
                className="nav-link"
                aria-current="page"
                href="onHome"
                onClick={onHome}
                style={{ opacity: ".6", color: "#eceff1" }}
              >
                Home
              </a>
            </div>
            <a
              className="nav-link"
              href="onPortafolio"
              onClick={onPortafolio}
              style={{ opacity: ".6", color: "#eceff1" }}
            >
              Portafolio
            </a>
            <a
              className="nav-link"
              href="onAbout"
              onClick={onAbout}
              style={{ opacity: ".6", color: "#eceff1" }}
            >
              Acerca de mí
            </a>
          </nav>
        </div>
      </div>
      <footer
        className="text-center"
        style={{ width: "60%", marginBottom: "2rem" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container pt-2">
          {/* <!-- Section: Social media --> */}
          <section className="mb-2">
            {/* <!-- Facebook --> */}
            <a
              style={sizeIcon}
              className="btn btn-link btn-floating btn-lg m-1"
              href="https://www.facebook.com/jhon.duenas/"
              role="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bi bi-facebook fa-lg" style={colorIcon}></i>
            </a>
            {/*  <!-- Twitter --> */}
            <a
              style={sizeIcon}
              className="btn btn-link btn-floating btn-lg m-1"
              href="https://twitter.com/Jairo251180"
              role="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bi bi-twitter" style={colorIcon}></i>
            </a>
            {/* <!-- Instagram --> */}
            <a
              style={sizeIcon}
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/jairodv"
              role="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bi bi-instagram" style={colorIcon}></i>
            </a>
            {/*  <!-- Linkedin --> */}
            <a
              style={sizeIcon}
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/jhondue%C3%B1as"
              role="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bi bi-linkedin" style={colorIcon}></i>
            </a>
            {/* <!-- Github --> */}
            <a
              style={sizeIcon}
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/JairoDuenas"
              role="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bi bi-github" style={colorIcon}></i>
            </a>
            <a
              style={sizeIcon}
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="mailto:jairoduenas.ing@gmail.com?Subject=Interesado%20en%20sus%20servicios"
              role="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bi bi-envelope-fill" style={colorIcon}></i>
            </a>
            <a
              style={sizeIcon}
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://api.whatsapp.com/send?phone=3206515236"
              role="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bi bi-whatsapp" style={colorIcon}></i>
              <h6 className="email text-light">(057) 320 6515236</h6>
            </a>
          </section>
        </div>
        <div
          className="text-center text-light p-1"
          style={{ opacity: ".6", fontSize: "0.8rem" }}
        >
          © 2022 Copyright: Todos los derechos reservados, Jairo Dueñas
        </div>
      </footer>
    </div>
  );
}
