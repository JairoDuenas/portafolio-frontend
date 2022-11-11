import React from "react";
import { useNavigate } from "react-router-dom";
import documentPdf from "../../docs/cv_dev_Jhon_Jairo_Dueñas_Vega-09-2022";

export default function MainButtons() {
  const navigate = useNavigate();

  const onPortafolio = (event) => {
    event.preventDefault();
    navigate("/portafolio");
  };

  const onAbout = (event) => {
    event.preventDefault();
    navigate("/about");
  };

  return (
    <div className="container">
      <div
        className="row row-cols-1 row-cols-sm-1 row-cols-md-4 gap-2 mx-auto mt-4"
        style={{ justifyContent: "center" }}
      >
        <button
          className="col btn btn-primary btn-lg go-portafolio"
          type="button"
          onClick={onPortafolio}
        >
          Portafolio
        </button>
        <button
          className="col btn btn-secondary btn-lg go-about"
          onClick={onAbout}
        >
          About
        </button>
        <a
          className="col btn btn-info btn-lg"
          role="button"
          href={documentPdf}
          rel="noopener noreferrer"
          target="_blank"
        >
          Download CV pdf
        </a>
      </div>
    </div>
  );
}
