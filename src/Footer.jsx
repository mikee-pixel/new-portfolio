import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="w-full flex justify-center footer">
      <div className="inner-con max-w-[1320px] w-full px-10">
        <div className="content-container w-full flex flex-col justify-evenly items-center py-7 gap-3">
            <h2 className='text-center'>Michael Jhon Navidad</h2>
            <p className="text-center"><em>"I Build Websites That Don’t Just Look Good. They Work Smart."</em></p>
            <div className="social-medias-container">
                <a href="tel:+639926414357" className="social-media-icon"><FontAwesomeIcon icon={faWhatsapp} /> </a>
                <a href="https://www.linkedin.com/in/michael-jhon-navidad-03307a206/" target="_blank" className="social-media-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="tel:+639926414357" className="social-media-icon"><FontAwesomeIcon icon={faTelegram} /></a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
