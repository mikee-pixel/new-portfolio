import useAnimation from "./useAnimation";
import useAPIRequest from "./useAPIRequest";
import ErrorMessage from "./ErrorMessage";


const About = () => {
    //Fade Animation
    const {targetElement, isElementVisible} = useAnimation();

    //API Request to Skill Icons
    const {data, loading, errorMessage} = useAPIRequest("http://localhost:9000/skillIcons");

    

    return (
        <section className="w-full flex justify-center about" id="about" ref={targetElement}> 
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container w-full flex flex-col sm:flex-row justify-evenly items-center py-20 gap-10 sm:gap-0">
                    <div className={`col w-full sm:w-1/2 flex flex-col p-0 md:p-5 ${isElementVisible ? 'fadeLeft' : 'not-activate-element'}`}>
                        <img src="/new-portfolio/assets/mikee-headshot-wearing-suit-v4.png" alt="michael navidad profile" />
                    </div>
                    <div className={`col w-full sm:w-1/2 flex flex-col ${isElementVisible ? 'fadeRight' : 'not-activate-element'}`}>
                        <p className="intro gradient-highlighted">About Me</p>
                        <h2><span className="highlight">Michael</span>, Website Developer test</h2>
                        <h3>Based in Philippines</h3>
                        <p className="about-details">For six years, I've crafted dynamic websites, taking projects from concept to completion. I specialize in designing and developing user-friendly, responsive websites, leveraging the latest technologies and best practices. My expertise includes rigorous testing and debugging, server configuration and DNS management, SEO optimization, and website speed enhancement.</p>
                        <div className="expertise-container mt-5">
                            <h4>My Expertise</h4>
                            <div className="expertise-blurb grid grid-cols-1 sm:grid-cols-2 gap-8 pt-5">
                                <div className="blurb-item flex flex-row items-center backdrop-light-item bg-gradient-to-br from-[#2eaf9d] via-[#2eaf9d] to-[#b0f7ef] p-[2px] rounded-xl">
                                    <div className="inner-con w-full flex flex-row items-center bg-[#111826] text-white rounded-xl p-3">
                                        <div className="blurb-icon w-[17%]"><img src="/new-portfolio/assets/coding-primary-color.png" alt="website development icon" /></div>
                                        <p className="blurb-title w-[70%]">Website Design & Development</p>
                                    </div>
                                </div>
                                <div className="blurb-item flex flex-row items-center backdrop-light-item bg-gradient-to-br from-[#2eaf9d] via-[#2eaf9d] to-[#b0f7ef] p-[2px] rounded-xl">
                                    <div className="inner-con w-full flex flex-row items-center bg-[#111826] text-white rounded-xl p-3">
                                        <div className="blurb-icon w-[17%]"><img src="/new-portfolio/assets/ecommerce-primary-color.png" alt="e-commerce icon" /></div>
                                        <p className="blurb-title w-[70%]">E-Commerce Website</p>
                                    </div>
                                </div>
                                <div className="blurb-item flex flex-row items-center backdrop-light-item bg-gradient-to-br from-[#2eaf9d] via-[#2eaf9d] to-[#b0f7ef] p-[2px] rounded-xl">
                                    <div className="inner-con w-full flex flex-row items-center bg-[#111826] text-white rounded-xl p-3">
                                        <div className="blurb-icon w-[17%]"><img src="/new-portfolio/assets/web-optimization-primary-color.png" alt="website optimization icon" /></div>
                                        <p className="blurb-title w-[70%]">Website Speed Optimization</p>
                                    </div>
                                </div>
                                <div className="blurb-item flex flex-row items-center backdrop-light-item bg-gradient-to-br from-[#2eaf9d] via-[#2eaf9d] to-[#b0f7ef] p-[2px] rounded-xl">
                                    <div className="inner-con w-full flex flex-row items-center bg-[#111826] text-white rounded-xl p-3">
                                        <div className="blurb-icon w-[17%]"><img src="/new-portfolio/assets/seo-primary-color.png" alt="seo icon" /></div>
                                        <p className="blurb-title w-[70%]">Search Engine optimization</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-skills-container overflow-hidden pt-10">
                                {errorMessage && <ErrorMessage/>}
                                {loading && <div className="loader"></div>}
                                <div className="carousel flex flex-row items-center gap-8">
                                    {data && data.map(skillIcon => (
                                        <div className={`skill-item w-[30%] sm:w-[20%] flex-none justify-center items-center px-2`} key={skillIcon.id}>
                                            <img src={`${skillIcon.iconUrl}`} alt={`${skillIcon.name}`} />
                                        </div>
                                    ))}
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