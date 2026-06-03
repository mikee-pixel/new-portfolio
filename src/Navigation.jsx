import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    const targetHeader = useRef(null);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    
    useEffect(() => {
        const headerMenuObserver = new IntersectionObserver((entries) => {
            entries.map(entry => {
                if(!entry.isIntersecting) {
                    setIsHeaderSticky(true);
                } else {
                    setIsHeaderSticky(false);
                }
            });
        }, {
            threshold: 0,
        })

        if(targetHeader.current) headerMenuObserver.observe(targetHeader.current);

        return () => headerMenuObserver.disconnect();
    }, [])

    const showMobileMenu = () => {
        console.log("Mobile menu trigger");
        setIsMobileMenuActive(true);
    }

    const hideMobileMenu = () => {
        setIsMobileMenuActive(false);
    }

    return (
        <header className={`w-full flex justify-center items-center navigation ${isHeaderSticky ? 'active' : ""}`} ref={targetHeader}> 
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container w-full flex flex-col sm:flex-row justify-evenly items-center py-5 gap-10 sm:gap-0">
                    <div className="menu-container desktop w-full flex flex-row items-center justify-between">
                        <div className="branding-container">
                            <a href="#hero"><span className="first-branding">Michael</span><span className="second-branding">Jhon</span></a>
                        </div>
                        <div className="menu-item-container">
                            <ul className="flex flex-row items-center justify-center gap-6">
                                <li><Link to="#about">About</Link></li>
                                <li><Link to="#skillset">Skills</Link></li>
                                <li><Link to="#resume">Resume</Link></li>
                                <li><Link to="#portfolio">Portfolio</Link></li>
                                <li><Link to="#contact-me">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="menu-btn-container flex flex-row items-center justify-center">
                            <a href="tel:+639926414357" className="primary-btn icon-rotate-animation call-me-btn">Call Me <span className="btn-icon"><FontAwesomeIcon icon={faPhoneFlip}/></span></a>
                            <div className="burger-menu-container" onClick={() => showMobileMenu()}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        </div>
                    </div>
                    <div className={`menu-container mobile flex flex-col items-start justify-center ${isMobileMenuActive ? "active" : "not-active"}`}>
                            <div className="close-btn-container" onClick={() => hideMobileMenu()}>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                            <ul className="flex flex-col items-start justify-center gap-6 pb-10">
                                <li><Link to="#about" onClick={() => hideMobileMenu()}>About</Link></li>
                                <li><Link to="#skillset" onClick={() => hideMobileMenu()}>Skills</Link></li>
                                <li><Link to="#resume" onClick={() => hideMobileMenu()}>Resume</Link></li>
                                <li><Link to="#portfolio" onClick={() => hideMobileMenu()}>Portfolio</Link></li>
                                <li><Link to="#contact-me" onClick={() => hideMobileMenu()}>Contact</Link></li>
                            </ul>
                            <a href="tel:+639926414357" className="primary-btn icon-rotate-animation call-me-bt w-full text-center">Call Me <span className="btn-icon"><FontAwesomeIcon icon={faPhoneFlip}/></span></a>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation;