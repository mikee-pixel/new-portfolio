import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";


const ContactDetails = () => {
  return (
    <section className="flex justify-center contact-details">
      <div className="inner-con max-w-[1320px] w-full px-10">
        <div className="content-container w-full flex flex-col items-center py-20">
          <h2>Contact</h2>
          <div className="separator w-25 flex flex-row items-center py-5">
            <hr className="separator-item w-8" />
            <hr className="separator-item w-10 border-[3px] highlight" />
            <hr className="separator-item w-8" />
          </div>
          <div className="contacts-container w-full flex flex-col lg:flex-row justify-around items-center gap-5">
            <div className="blurb-item w-[100%] md:w-[70%] lg:w-[30%] flex flex-row items-center backdrop-light-item rounded-xl px-5 py-5">
              <a href="tel:+639926414357" className="flex flex-row items-center">
                <div className="blurb-icon-container w-[15%]">
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="blurb-detail-container w-[80%] flex flex-col justify-items-start">
                    <h4 className="blurb-title pb-1">Location:</h4>
                    <p className="blurb-text">Bacoor, Cavite</p>
                </div>
              </a>
            </div> 
            <div className="blurb-item w-[100%] md:w-[70%] lg:w-[30%] flex flex-row items-center backdrop-light-item rounded-xl px-5 py-5">
              <a href="mailto:michaelnavidad36@gmail.com" className="flex flex-row items-center">
                <div className="blurb-icon-container w-[15%]">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="blurb-detail-container w-[80%] flex flex-col justify-items-start">
                    <h4 className="blurb-title pb-1">Email:</h4>
                    <p className="blurb-text">michealnavidad36@gmail.com</p>
                </div>
              </a>
            </div> 
            <div className="blurb-item w-[100%] md:w-[70%] lg:w-[30%] flex flex-row items-center backdrop-light-item rounded-xl px-5 py-5">
              <a href="tel:+639926414357" className="flex flex-row items-center">
                <div className="blurb-icon-container w-[15%]">
                    <FontAwesomeIcon icon={faMobile} />
                </div>
                <div className="blurb-detail-container w-[80%] flex flex-col justify-items-start">
                    <h4 className="blurb-title pb-1">Phone:</h4>
                    <p className="blurb-text">09926414357</p>
                </div>
              </a>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
