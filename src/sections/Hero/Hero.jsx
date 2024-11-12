import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import LinkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id="hero">
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="photo de profil" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
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