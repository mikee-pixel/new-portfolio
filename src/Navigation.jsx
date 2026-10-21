import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryMenuList from "./data/PrimaryMenuList";
import { ArrowUpRight, Dot } from "lucide-react";

const Navigation = () => {

    //Primary Menu List Data
    const primaryMenuList = Object.values(PrimaryMenuList);
    console.log(primaryMenuList);
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
                            <div className="mobile-slideout__container p-10 flex flex-col gap-8">
                                <div className="close-btn-container" onClick={() => hideMobileMenu()}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                                <div className="mobile--menu-header !text-(--color-white) !text-[30px] !font-[800]">
                                    Michael<span className="text-(--color-accent)">Jhon</span>
                                </div>

                                <div className="status-container flex flex-row items-center gap-2 border-[1px] border-(--color-accent)/50 p-1 rounded-[50px] bg-(--color-accent)/14 text-(--color-white) font-[600]">
                                    <Dot className="w-[30px] h-[30px] stroke-(--color-hover)"/>
                                    <p>Available for new projects</p>
                                </div>
                                <div className="mobile-menu-list__container flex flex-col gap-3">
                                    <p className="uppercase text-(--small-label) text-(--text-subtle) !text-[18px]">Menu</p>
                                    <ul className="flex flex-col items-start justify-center gap-6 pb-10">
                                        {primaryMenuList.map((menuItemList, index) => (
                                            <li className="flex flex-row justify-between items-center w-full" key={index}>
                                                <div className="menu-item__content flex flex-row gap-3 w-[85%]">
                                                    <p className="menu-num text-[20px] text-(--color-hover) mt-[10px]">{String(index + 1).padStart(2, "0")}</p>
                                                    <div className="menu-item__details flex flex-col gap-0">
                                                        <span className="!text-(--color-white) text-[35px] font-(--heading-style)">{menuItemList.label}</span>
                                                        <p className="text-(--text-subtle)">Who I am and what I do</p>
                                                    </div> 
                                                </div>
                                                <div className="menu-item__icon w-[10%] flex flex-row justify-center items-center relative">
                                                    <ArrowUpRight className="stroke-(--text-subtle) relative"/>
                                                </div>
                                            </li>
                                        ))}
                                        
                    
                                        {/* <li><Link to="#about" onClick={() => hideMobileMenu()}>About</Link></li>
                                        <li><Link to="#skillset" onClick={() => hideMobileMenu()}>Skills</Link></li>
                                        <li><Link to="#resume" onClick={() => hideMobileMenu()}>Resume</Link></li>
                                        <li><Link to="#portfolio" onClick={() => hideMobileMenu()}>Portfolio</Link></li>
                                        <li><Link to="#contact-me" onClick={() => hideMobileMenu()}>Contact</Link></li> */}
                                    </ul>
                                </div>
                                
                                <a href="tel:+639926414357" className="primary-btn icon-rotate-animation call-me-bt w-full text-center">Call Me <span className="btn-icon"><FontAwesomeIcon icon={faPhoneFlip}/></span></a>
                            </div>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation;