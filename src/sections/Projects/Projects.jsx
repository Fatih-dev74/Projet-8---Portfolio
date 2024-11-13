import styles from './ProjectsStyles.module.css';
import booki from '../../assets/booki.png';
import sophiebluel from '../../assets/sophiebluel.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return <section id='projects' className={StyleSheet.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={booki} 
                link="https://github.com/Fatih-dev74/projet2-booki" 
                h3="Booki" 
                p="Agence de voyage" />  
            <ProjectCard 
            src={sophiebluel} 
            link="https://github.com/Fatih-dev74/Projet3-sophie-bluel" 
            h3="Sophie Bluel" 
            p="portfolio d’une architecte d’intérieur" />         
        </div>
    </section>;
}

export default Projects;