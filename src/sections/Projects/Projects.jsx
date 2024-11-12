import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

function Projects() {
    return <section id='projects' className={StyleSheet.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <a href="https://github.com/Fatih-dev74">
                <img className="hover" src={Viberr} alt="Viberr logo" />
                <h3>Viberr</h3>
                <p>Streaming App</p>
            </a>
        </div>
    </section>;
}

export default Projects;