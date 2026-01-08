
import Typewriter from "./TypeWriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useAnimation from "./useAnimation";


function App() {

  const {targetElement, isElementVisible} = useAnimation();

  return (
    <>
      <section className="flex justify-center w-full hero" id="hero" ref={targetElement}>
         <div className="inner-con max-w-[1320px] w-full justify-evenly px-10">
          <div className="container-content flex flex-wrap items-center justify-evenly gap-10 sm:gap-0 py-5">
            <div className={`col basis-full sm:basis-1/2 flex flex-col items-start gap-y-1 ${isElementVisible ? `fadeLeft` : 'not-activate-element'}`}>
              <p className="intro gradient-highlighted">Hello I'm</p>
              <h1 className="name">Michael Jhon Navidad Test</h1>
              <p className="position-typewriter gradient-highlighted">A <Typewriter /></p>
              
              <p className="tagline">I Build Websites That Don’t Just Look Good. They Work Smart.</p>
              <a href="#contact-me" className="primary-btn icon-slide-animation">Get In Touch <span className="btn-icon"><FontAwesomeIcon icon={faArrowRight}/></span></a>
              <div className="social-medias-container">
                <a href="tel:+639926414357" className="social-media-icon"><FontAwesomeIcon icon={faWhatsapp} /> </a>
                <a href="https://www.linkedin.com/in/michael-jhon-navidad-03307a206/" target="_blank" className="social-media-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="tel:+639926414357" className="social-media-icon"><FontAwesomeIcon icon={faTelegram} /></a>
              </div>
              
            </div>
            <div className={`col basis-full sm:basis-1/2 flex item-center ${isElementVisible ? 'fadeRight' : 'not-activate-element'}`}>
              <img src="/new-portfolio/assets/mikee-headshot-hero-v2.png" alt="profile picture with experience" />
            </div>
          </div>
         </div>
      </section>

    </>
  )
}

export default App
