import React from "react";

function ProjectCard({ src, link, h3 }) {
    return (
        <a href={link}>
            <img className="hover" src={src} alt="Booki logo" />
            <h3>{h3}</h3>
            <p>Agence de Voyage</p>
        </a>
    );
}