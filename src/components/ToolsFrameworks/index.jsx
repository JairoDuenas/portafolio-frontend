import React from "react";
import imgBootstrap from "../../img/bootstrap.png";
import imgGithub from "../../img/github.png";
import imgTailwind from "../../img/tailwind.png";

export default function ToolsFrameworks() {
  return (
    <div
      className="skills-tools-frameworks shadow-lg text-center col-sm mt-2 mb-3 rounded "
      style={{ background: "#fdfdfd" }}
    >
      <div className="subtile-tools-frameworks mt-2 mb-2">
        <h6>Herramientas y Frameworks CSS</h6>
      </div>
      <div
        className="tools-frameworks m-2 d-flex mt-4"
        style={{ justifyContent: "space-around" }}
      >
        <div
          className="tool-bootstrap shadow-lg d-flex rounded mb-2"
          style={{
            height: "5rem",
            width: "6rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://getbootstrap.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="bootstrap"
              src={imgBootstrap}
              alt="img-bootstrap"
              style={{ width: "3rem" }}
            />
            <h6 className="name-bootstrap m-0">BootStrap</h6>
          </a>
        </div>

        <div
          className="tool-github shadow-lg d-flex rounded mb-2"
          style={{
            height: "5rem",
            width: "6rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="github"
              src={imgGithub}
              alt="img-github"
              style={{ width: "3rem" }}
            />
            <h6 className="name-github m-0">GitHub</h6>
          </a>
        </div>

        <div
          className="tool-tailwind shadow-lg d-flex rounded mb-2"
          style={{
            height: "5rem",
            width: "6rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://tailwindui.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="tailwind"
              src={imgTailwind}
              alt="img-tailwind"
              style={{ width: "3rem" }}
            />
            <h6 className="name-tailwind m-0">tailwind</h6>
          </a>
        </div>
      </div>
    </div>
  );
}
