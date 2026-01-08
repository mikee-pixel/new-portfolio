import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
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
                                <li><a href="#about">About</a></li>
                                <li><a href="#skillset">Skills</a></li>
                                <li><a href="#resume">Resume</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#contact-me">Contact</a></li>
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
                                <li><a href="#about" onClick={() => hideMobileMenu()}>About</a></li>
                                <li><a href="#skillset" onClick={() => hideMobileMenu()}>Skills</a></li>
                                <li><a href="#resume" onClick={() => hideMobileMenu()}>Resume</a></li>
                                <li><a href="#portfolio" onClick={() => hideMobileMenu()}>Portfolio</a></li>
                                <li><a href="#contact-me" onClick={() => hideMobileMenu()}>Contact</a></li>
                            </ul>
                            <a href="tel:+639926414357" className="primary-btn icon-rotate-animation call-me-bt w-full text-center">Call Me <span className="btn-icon"><FontAwesomeIcon icon={faPhoneFlip}/></span></a>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation;