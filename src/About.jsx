import useAnimation from "./useAnimation";
import { MapPin } from "lucide-react";
import BlurbIcon from "./components/widgets/BlurbIcon";
import ExpertiseData from "./data/ExpertiseData";
import TechStack from "./data/TechStack";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from "embla-carousel-auto-scroll";

const About = () => {
    //Fade Animation
    const {targetElement, isElementVisible} = useAnimation();

    //Expertise Data
    const expertiseData = Object.values(ExpertiseData);

    //TechStack Data
    const techStack = Object.values(TechStack);
    
    //Embla Carousel
    const [emblaRef] = useEmblaCarousel(
        {loop: true, dragFree: true}, 
        [
            AutoScroll({
                speed: 0.8,               // lower = slower (default is 2)
                startDelay: 0,            // start immediately (default is 1000ms)
                stopOnInteraction: false, // keep scrolling after a drag
                stopOnMouseEnter: true,   // pause on hover
            }),
        ]);


    const [emblaRef2] = useEmblaCarousel(
        {loop: true, dragFree: true}, 
        [
            AutoScroll({
                speed: 0.8,               // lower = slower (default is 2)
                startDelay: 0,            // start immediately (default is 1000ms)
                direction: "backward",
                stopOnInteraction: false, // keep scrolling after a drag
                stopOnMouseEnter: true,   // pause on hover
            }),
        ]);

    
    

    return (
        <section className="w-full flex justify-center about" id="about" ref={targetElement}> 
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container w-full flex flex-col sm:flex-row justify-evenly items-center py-20 gap-10 sm:gap-0">
                    <div className={`col col1 w-full sm:w-1/2 flex flex-col p-0 md:p-5 ${isElementVisible ? 'fadeLeft' : 'not-activate-element'}`}>
                        <img src="/new-portfolio/assets/mikee-headshot-wearing-suit-v4.png" alt="michael navidad profile" />
                    </div>
                    <div className={`col col2 w-full sm:w-1/2 flex flex-col gap-4 ${isElementVisible ? 'fadeRight' : 'not-activate-element'}`}>
                        <p className="intro gradient-highlighted">About Me</p>
                        <h2 className="text-(--color-white)"><span className="text-(--color-accent)">Michael</span>, Website Developer</h2>
                        <p className="base-location__container flex flex-row items-center gap-2 text-(--text-muted)">
                            <span className="icon-location"><MapPin className="stroke-(--color-accent) w-[20px] h-[20px]"/></span> Based in the Philippines · Working with clients worldwide
                        </p>
                        <p className="about-details text-(--text-body)">For six years, I've crafted interactive and dynamic websites, taking projects from concept to completion. I specialize in designing and developing user-friendly, responsive websites, leveraging the latest technologies and best practices. My expertise includes building E-commerce and corporate websites, website speed optimization, API integration, and building custom hooks and functions.</p>
                        <div className="expertise-container flex flex-col gap-5">
                            <h4 className="text-(--color-white)">My Expertise</h4>
                            <div className="blurb-icon-grid__container grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {expertiseData && expertiseData.map(blurbIconItem => (
                                    <div className="blurb-item__container bg-(--color-tertiary-bg) rounded-[16px] p-5 border-[1px] border-(--border-color-light)" key={blurbIconItem.id}>
                                        <BlurbIcon 
                                            is_img={false}
                                            icon={blurbIconItem.icon}
                                            title={blurbIconItem.title}
                                            description={blurbIconItem.description}
                                        />
                                    </div>
                                    
                                ))}
                            </div>
                            <div className="carousel-skills-container overflow-hidden">
                                <div className="carousel flex flex-row items-center gap-8">
                                    <div className="embla">
                                        {/* Embla Carousel 1 */}
                                        <div className="embla__viewport" ref={emblaRef}>
                                            <div className="embla__container">
                                                {techStack && techStack.map(techStackItem => (
                                                    <div className="embla__slide pl-[10px]">
                                                        <div className="slide-content__wrapper flex flex-row items-center gap-3 bg-(--color-tertiary-bg) rounded-[30px] p-[10px] border-[1px] border-(--border-color-light)">
                                                            <div className={`tech-acrony flex justify-center items-center rounded-[100%]`} style={{
                                                            backgroundColor: techStackItem.backgroundColor, 
                                                            fontFamily: "var(--heading-style)",
                                                            fontWeight: 600,
                                                            color: techStackItem.textColor,
                                                            width: "35px",
                                                            height: "35px"
                                                            }}>
                                                                <p className="font-var(--heading-style)">{techStackItem.techAcronym}</p>
                                                            </div>
                                                            <div className="tech-title text-(--color-white) font-[600]">
                                                                {techStackItem.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                
                                            </div>
                                        </div>

                                        {/* Embla Carousel 2 */}
                                        <div className="embla__viewport pt-[20px]" ref={emblaRef2}>
                                            <div className="embla__container">
                                                {techStack && techStack.map(techStackItem => (
                                                    <div className="embla__slide pl-[10px]">
                                                        <div className="slide-content__wrapper flex flex-row items-center gap-3 bg-(--color-tertiary-bg) rounded-[30px] p-[10px] border-[1px] border-(--border-color-light)">
                                                            <div className={`tech-acrony flex justify-center items-center rounded-[100%]`} style={{
                                                            backgroundColor: techStackItem.backgroundColor, 
                                                            fontFamily: "var(--heading-style)",
                                                            fontWeight: 600,
                                                            color: techStackItem.textColor,
                                                            width: "35px",
                                                            height: "35px"
                                                            }}>
                                                                <p className="font-var(--heading-style)">{techStackItem.techAcronym}</p>
                                                            </div>
                                                            <div className="tech-title text-(--color-white) font-[600]">
                                                                {techStackItem.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;