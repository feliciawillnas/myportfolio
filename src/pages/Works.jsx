import React from "react";
import projectData from "../data/projectData.json";

export default function Works() {
  return (
    <div>
      <h1>Works</h1>
      <p>This is the Works page.</p>
      {projectData.map((project) => (
        <div key={project.id}>
          <div>
            <h5>{project.title}</h5>
            <p>{project.text}</p>
            <p>{project.tech}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
