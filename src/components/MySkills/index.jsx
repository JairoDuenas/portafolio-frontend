import React from "react";
import imgHtml from "../../img/html-5.png";
import imgCss from "../../img/css.png";
import imgJs from "../../img/js.png";
import imgReact from "../../img/react.png";
import imgVue from "../../img/vue.png";
import ToolsFrameworks from "../ToolsFrameworks";

export default function MySkills() {
  return (
    <div className="container-fluid row shadow-sm m-0 mt-4 bg-light">
      <h4 className="title-skills text-center mt-2">Mis habilidades</h4>
      <div
        className="skills-progress col-sm mt-2 mb-3 rounded"
        style={{ background: "#cfd8dc" }}
      >
        <div className="skills-frameworks text-center col-sm mt-2">
          <h6>Maquetación, estilos, lenguaje y Frameworks</h6>
        </div>
        <div className="skill-html mb-4 mt-4">
          <div
            className="icon-html-progress d-flex "
            style={{ justifyContent: "space-evenly", alignItems: "center" }}
          >
            <img src={imgHtml} alt="imagen-html" style={{ width: "3rem" }} />
            <div className="progress shadow" style={{ width: "85%" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%", backgroundColor: "#f4511e" }}
              >
                80%
              </div>
            </div>
          </div>
        </div>
        <div className="skill-css mb-3">
          <div
            className="icon-css-progress d-flex "
            style={{ justifyContent: "space-evenly", alignItems: "center" }}
          >
            <img src={imgCss} alt="imagen-css" style={{ width: "3rem" }} />
            <div className="progress shadow" style={{ width: "85%" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
          </div>
        </div>
        <div className="skill-js mb-3">
          <div
            className="icon-js-progress d-flex "
            style={{ justifyContent: "space-evenly", alignItems: "center" }}
          >
            <img src={imgJs} alt="imagen-js" style={{ width: "3rem" }} />
            <div className="progress shadow" style={{ width: "85%" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
          </div>
        </div>
        <div className="skill-react mb-3">
          <div
            className="icon-react-progress d-flex "
            style={{ justifyContent: "space-evenly", alignItems: "center" }}
          >
            <img src={imgReact} alt="imagen-react" style={{ width: "3rem" }} />
            <div className="progress shadow" style={{ width: "85%" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "70%" }}
              >
                70%
              </div>
            </div>
          </div>
        </div>
        <div className="skill-vue mb-3">
          <div
            className="icon-vue-progress d-flex "
            style={{ justifyContent: "space-evenly", alignItems: "center" }}
          >
            <img src={imgVue} alt="imagen-vue" style={{ width: "3rem" }} />
            <div className="progress shadow" style={{ width: "85%" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "55%" }}
              >
                55%
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToolsFrameworks />
    </div>
  );
}
