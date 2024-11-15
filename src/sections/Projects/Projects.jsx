import styles from './ProjectsStyles.module.css';
import booki from '../../assets/booki.png';
import sophiebluel from '../../assets/sophiebluel.png';
import ninacarducci from '../../assets/ninacarducci.png';
import kasa from '../../assets/kasa.png';
import grimoir from '../../assets/grimoir.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projets</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={booki}
          link="https://github.com/Fatih-dev74/projet2-booki"
          h3="Booki"
          p="Agence de Voyage"
        />
        <ProjectCard
          src={sophiebluel}
          link="https://github.com/Fatih-dev74/Projet3-sophie-bluel"
          h3="Sophie Bluel"
          p="Architecte d'intérieur"
        />
        <ProjectCard
          src={ninacarducci}
          link="https://github.com/Fatih-dev74/Projet4-Nina-Carducci"
          h3="Nina Carducci"
          p="Photographe professionnelle"
        />
        <ProjectCard
          src={kasa}
          link="https://github.com/Fatih-dev74/Projet5-Kasa"
          h3="Kasa"
          p="Entreprise de location"
        />
        <ProjectCard
          src={grimoir}
          link="https://github.com/Fatih-dev74/projet6"
          h3="Mon Vieux Grimoir"
          p="Chaîne de librairies"
        />
      </div>
    </section>
  );
}

export default Projects;
