import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/booki.png';

function Projects() {
    return <section id='projects' className={StyleSheet.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={Booki} link='https://github.com/Fatih-dev74/projet2-booki' h3="Booki"/>           
        </div>
    </section>;
}

export default Projects;