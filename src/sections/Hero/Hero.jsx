import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import LinkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;

  return (
    <section id="hero">
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="photo de profil" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Fatih <br /> CIGDEM</h1>
            <h2>Developpeur web</h2>
            <span>
                <a href="https://twitter.com" target='_blank'>
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com" target='_blank'>
                    <img src={githubIcon} alt="github icon" />
                </a>
                <a href="https://Linkedin.com" target='_blank'>
                    <img src={LinkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p>Passionner du monde du développement Web.</p>
            <a href={CV} download>
                <button className='hover'>Mon CV</button>
            </a>
        </div>
    </section>
  );
}

export default Hero;