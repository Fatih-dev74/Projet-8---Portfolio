import styles from './SkillsStyles.module.css';
import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import jsIcon from '../../assets/js.svg';
import reactIcon from '../../assets/react.svg';
import nodeIcon from '../../assets/node-js.svg';
import mongoIcon from '../../assets/mongodb.svg';
import vscodeIcon from '../../assets/vscode.svg';
import githubIcon from '../../assets/github-light.svg';
import notionIcon from '../../assets/notion.svg';

function Skills() {
  const frontendSkills = [
    { src: htmlIcon, title: 'HTML' },
    { src: cssIcon, title: 'CSS' },
    { src: jsIcon, title: 'JavaScript' },
    { src: reactIcon, title: 'React' },
  ];

  const backendSkills = [
    { src: nodeIcon, title: 'Node.JS' },
    { src: mongoIcon, title: 'MongoDB' },
  ];

  const toolsSkills = [
    { src: vscodeIcon, title: 'VS Code' },
    { src: githubIcon, title: 'Github' },
    { src: notionIcon, title: 'Notion' },
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">MES COMPÉTENCES</h1>

      {/* Frontend Skills */}
      <div className={styles.skillsCategory}>
        <h2 className={styles.categoryTitle}>Frontend</h2>
        <div className={styles.skillsGrid}>
          {frontendSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <img
                src={skill.src}
                alt={`${skill.title} logo`}
                className={styles.skillIcon}
              />
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* Backend Skills */}
      <div className={styles.skillsCategory}>
        <h2 className={styles.categoryTitle}>Backend</h2>
        <div className={styles.skillsGrid}>
          {backendSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <img
                src={skill.src}
                alt={`${skill.title} logo`}
                className={styles.skillIcon}
              />
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* Tools */}
      <div className={styles.skillsCategory}>
        <h2 className={styles.categoryTitle}>Outils</h2>
        <div className={styles.skillsGrid}>
          {toolsSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <img
                src={skill.src}
                alt={`${skill.title} logo`}
                className={styles.skillIcon}
              />
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
