
import Typewriter from "./TypeWriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import useAnimation from "./useAnimation";


function App() {

  const {targetElement, isElementVisible} = useAnimation();

  return (
    <>
      <section className="flex justify-center w-full hero" id="hero" ref={targetElement}>
         <div className="inner-con max-w-[1320px] w-full justify-evenly px-10">
          <div className="container-content flex flex-wrap items-center justify-evenly gap-10 sm:gap-0 pt-5">
            <div className={`col basis-full sm:basis-1/2 flex flex-col items-start gap-y-1 sm:pb-20 ${isElementVisible ? `fadeLeft` : 'not-activate-element'}`}>
              <p className="intro gradient-highlighted">Hello I'm</p>
              <h1 className="name">Michael Jhon Navidad</h1>
              <p className="position-typewriter gradient-highlighted">A <Typewriter /></p>
              
              <p className="tagline">I Build Websites That Don’t Just Look Good. They Work Smart.</p>
              <div className="hero-cta-container flex flex-wrap items-center gap-4">
                <a
                  href="/new-portfolio/assets/resume/Michael-Navidad-Resume.pdf"
                  download="Michael-Navidad-Resume.pdf"
                  className="primary-btn btn-filled icon-drop-animation"
                >
                  Download Resume <span className="btn-icon"><FontAwesomeIcon icon={faDownload}/></span>
                </a>
                <a href="#contact-me" className="primary-btn icon-slide-animation">Get In Touch <span className="btn-icon"><FontAwesomeIcon icon={faArrowRight}/></span></a>
              </div>
              <p className="hero-file-meta">PDF · Michael-Navidad-Resume.pdf</p>
              <div className="social-medias-container">
                <a href="https://wa.me/639926414357" target="_blank" rel="noopener noreferrer" className="social-media-icon"><FontAwesomeIcon icon={faWhatsapp} /> </a>
                <a href="https://www.linkedin.com/in/michael-jhon-navidad-03307a206/" target="_blank" className="social-media-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://t.me/+639926414357" target="_blank" rel="noopener noreferrer" className="social-media-icon"><FontAwesomeIcon icon={faTelegram}/></a>
              </div>
              
            </div>
            <div className={`col basis-full sm:basis-1/2 flex justify-center self-end ${isElementVisible ? 'fadeRight' : 'not-activate-element'}`}>
              <div className="hero-photo-stage">
                <div className="hero-photo-ring" aria-hidden="true"></div>
                <img className="hero-photo" src="/new-portfolio/assets/mikee-hero-suit.png" alt="Michael Jhon Navidad in a navy suit with arms crossed" />
                <div className="hero-badge">
                  <strong>7+</strong>
                  <small>years building<br />websites</small>
                </div>
              </div>
            </div>
          </div>
         </div>
      </section>

    </>
  )
}

export default App
