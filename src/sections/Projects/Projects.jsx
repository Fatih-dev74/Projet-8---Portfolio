import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import booki from '../../assets/booki.png';
import mobileBooki from '../../assets/mobile-booki.png';
import sophiebluel from '../../assets/sophiebluel.png';
import mobilesophieBluel from '../../assets/mobile-sophieBluel.png';
import ninacarducci from '../../assets/ninacarducci.png';
import mobileNinaCarducci from '../../assets/mobile-ninaCarducci.png';
import mobileKasa from '../../assets/mobile-kasa.png';
import kasa from '../../assets/kasa.png';
import grimoir from '../../assets/grimoir.png';
import mobileGrimoire from '../../assets/mobile-grimoire.png';
import ProjectCard from '../../common/ProjectCard';
import { useTheme } from '../../common/ThemeContext'; // Import du contexte pour le mode sombre/clair

function Projects() {
  const { theme } = useTheme(); // Récupération du thème actuel
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'booki',
      src: booki,
      title: 'Booki',
      description: 'Créer la page d’accueil d’une agence de voyage en HTML5 et CSS3.',
      link: 'https://github.com/Fatih-dev74/projet2-booki',
      images: [booki, mobileBooki], // Deux images pour la modale
    },
    {
      id: 'sophiebluel',
      src: sophiebluel,
      title: 'Sophie Bluel',
      description: 'Refonte du site d’une architecte d’intérieur.',
      link: 'https://github.com/Fatih-dev74/Projet3-sophie-bluel',
      images: [sophiebluel, mobilesophieBluel],
    },
    {
      id: 'ninacarducci',
      src: ninacarducci,
      title: 'Nina Carducci',
      description: 'Création du portfolio d’une photographe professionnelle.',
      link: 'https://github.com/Fatih-dev74/Projet4-Nina-Carducci',
      images: [ninacarducci, mobileNinaCarducci],
    },
    {
      id: 'kasa',
      src: kasa,
      title: 'Kasa',
      description: 'Développement d’une plateforme de location d’appartements.',
      link: 'https://github.com/Fatih-dev74/Projet5-Kasa',
      images: [kasa, mobileKasa],
    },
    {
      id: 'grimoir',
      src: grimoir,
      title: 'Mon Vieux Grimoir',
      description: 'Développement d’une application backend pour une librairie.',
      link: 'https://github.com/Fatih-dev74/Projet6-MonVieuxGrimoire',
      images: [grimoir, mobileGrimoire],
    },
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projets</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => openModal(project)}
          >
            <ProjectCard
              src={project.src}
              h3={project.title}
              p={project.description}
            />
          </div>
        ))}
      </div>

      {/* Modale */}
      {selectedProject && (
        <div className={`${styles.projectsModal}`}>
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()} // Empêche de fermer la modale en cliquant dedans
            >
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
              <h2>{selectedProject.title}</h2>
              <div className={styles.imagesContainer}>
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} ${index + 1}`}
                  />
                ))}
              </div>
              <p>{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub logo"
                  className={styles.githubLogo}
                />
                Voir le repo GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
