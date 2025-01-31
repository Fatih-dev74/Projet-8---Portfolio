import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV-Fatih.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Photo de profil"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Fatih
          <br />
          CIGDEM
        </h1>
        <h2>Développeur Web</h2>
        <span>
          <a href="https://x.com/FatihDEV74" 
            target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter icon"  aria-label="Lien vers mon profil Twitter" />
          </a>
          <a href="https://github.com/Fatih-dev74" 
            target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/fatih-cigdem-263523271/" 
            target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionner du monde du développement Web.
        </p>
        <a href={CV} download>
          <button className="hover">Mon CV</button>
        </a>
      </div>

      {/* SCROLL DOWN MOUSE */}
      <div className={styles.scrollDown}>
        <a href="#projects">
          <span></span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
