import { useState, useEffect, useRef, useCallback } from "react";
// import useAPIRequest from "./useAPIRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faLink,
  faCalendar,
  faLayerGroup,
  faTag,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "./ErrorMessage";
import PortfolioData from "./data/PortfolioData";
import {
  Calendar,
  Layers,
  Link,
  X,
  Tag,
  Blocks,
  Monitor,
  PenTool,
  SplinePointer,
  ArrowRight,
  ShoppingCart,
  Search,
} from "lucide-react";

import useEmblaCarousel from "embla-carousel-react";

const Portfolio = () => {
    const projectsContainer = useRef(null);
    const [projectID, setProjectID] = useState(false);
    const [projectFilter, setProjectFilter] = useState("filter-all");
    const [isProjectVisible, setIsProjectVisible] = useState(false);

    //Update the filter value
    const handleFilter = (filterValue) => {
        setProjectFilter(filterValue);
    };

    //Portfolio Data
    const portfolioData = Object.values(PortfolioData);
    const projectFilterResults = portfolioData.filter((projectItem) => projectItem.filterCategory.includes(projectFilter));
    const selectedProject = portfolioData.find((projectItem) => projectItem.id === projectID) ?? null;

    //Close the Popup Modal using ESC Key Press
    useEffect(() => {
        if (!projectID) return;
        const handleCloseModal = (e) => {
            if (e.key === "Escape") {
                console.log("Keypress function executed");
                setProjectID(false);
            }
        };
        document.addEventListener("keydown", handleCloseModal)
        return () => document.removeEventListener("keydown", handleCloseModal);
    }, [projectID]);

    //Close the modal when user click outside the modal container
    useEffect(() => {
        if (!projectID) return;

        const handleClick = (e) => {
        if (!e.target.closest(".inner-popup-modal")) {
            console.log("User click outside the modal");
            setProjectID(false);
        }
        };
        document.addEventListener("pointerdown", handleClick);
        return () => document.removeEventListener("pointerdown", handleClick);
    }, [projectID]);

    //Portfolio Popup Carousel
    const [selectedIndex, setSelectedIndex] = useState(0);

    //Portfolio Thumbnail Carousel
    const [thumbsRef, thumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    });

    const scrollTo = useCallback(
        (index) => {
            if (!thumbsApi) return;

            thumbsApi.scrollTo(index);
            setSelectedIndex(index);
        },
        [thumbsApi],
    );

    const onThumbSelect = useCallback(() => {
        if (!thumbsApi) return;

        setSelectedIndex(thumbsApi.selectedScrollSnap());
    }, [thumbsApi]);

    useEffect(() => {
        if (!thumbsApi) return;

        onThumbSelect();

        thumbsApi.on("select", onThumbSelect);
        thumbsApi.on("reInit", onThumbSelect);

        return () => {
        thumbsApi.off("select", onThumbSelect);
        thumbsApi.off("reInit", onThumbSelect);
        };
    }, [thumbsApi, onThumbSelect]);

    //useAnimation Function Displaying the Projects.
    useEffect(() => {
        const projectObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsProjectVisible(true);
            }
            });
        },
        {
            threshold: 0.1,
        },
        );

        if (projectsContainer.current)
        projectObserver.observe(projectsContainer.current);

        return () => {
        if (projectsContainer.current)
            projectObserver.unobserve(projectsContainer.current);
        projectObserver.disconnect();
        };
    }, []);

  return (
    <section className="flex justify-center portfolio" id="portfolio">
        <div className="inner-con max-w-[1320px] w-full px-10">
            <div className="content-container w-full flex flex-col items-center py-20">
                <h2 className="text-(--color-white)">Portfolio</h2>
                    <div className="separator w-25 flex flex-row items-center py-5">
                        <hr className="separator-item w-8" />
                        <hr className="separator-item w-10 border-[3px] highlight" />
                        <hr className="separator-item w-8" />
                    </div>
                <p className="text-desc text-(--text-muted) text-center">Websites and online stores I've built for growing businesses.</p>
                <div className="previous-projects py-10 flex flex-col items-center">
                    <div className="tabs-container flex flex-row max-[850px]:flex-wrap flex-nowrap justify-center w-fit gap-10 md:gap-3 xl:gap-10 max-[850px]:px-[10px] max-[850px]:py-[10px] px-[7px] py-[7px] bg-(--color-tertiary-bg) max-[850px]:rounded-[35px] rounded-[50px]">
                        <button className={`tab ${projectFilter === "filter-all" ? "active" : ""} flex flex-row items-center justify-between gap-3 max-[850px]:w-full w-auto`} onClick={() => handleFilter("filter-all")}>
                            <div className="tab-content-container flex flex-row items-center gap-5">
                                <div className="tab-icon-left-container">
                                    <Blocks className="sm:h-[30px] sm:w-[30px]"/> 
                                </div>
                                <div className="tab-labels flex flex-col text-left">
                                    <div className="tab-title">All</div>
                                    <p className="tab-descripton max-[850px]:block hidden">View all projects.</p>
                                </div>
                            </div>
                            <div className="tab-icon-container  max-[850px]:block hidden">
                                <ArrowRight />
                            </div>
                        </button>
                        <button className={`tab ${projectFilter === "filter-web" ? "active" : " "} flex flex-row items-center justify-between gap-3 max-[850px]:w-full w-auto`} onClick={() => handleFilter("filter-web")}>
                            <div className="tab-content-container flex flex-row items-center gap-5">
                                <div className="tab-icon-left-container">
                                    <Monitor className="sm:h-[30px] sm:w-[30px]"/> 
                                </div>
                                <div className="tab-labels flex flex-col text-left">
                                    <div className="tab-title">Web Development</div>
                                    <p className="tab-descripton max-[850px]:block hidden">Custom websites & web applications.</p>
                                </div>
                            </div>
                            <div className="tab-icon-container  max-[850px]:block hidden">
                                <ArrowRight />
                            </div>
                        </button>
                        <button className={`tab ${projectFilter === "filter-ecommerce" ? "active" : ""} flex flex-row items-center justify-between gap-3 max-[850px]:w-full w-auto`} onClick={() => handleFilter("filter-ecommerce")}>
                            <div className="tab-content-container flex flex-row items-center gap-5">
                                <div className="tab-icon-left-container">
                                    <ShoppingCart className="sm:h-[30px] sm:w-[30px]"/> 
                                </div>
                                <div className="tab-labels flex flex-col text-left">
                                    <div className="tab-title">E-Commerce</div>
                                    <p className="tab-descripton max-[850px]:block hidden">Online stores & digital solutions.</p>
                                </div>
                            </div>
                            <div className="tab-icon-container max-[850px]:block hidden">
                                <ArrowRight />
                            </div>
                        </button>
                        <button className={`tab ${projectFilter === "filter-logo" ? "active" : " "} flex flex-row items-center justify-between gap-3 max-[850px]:w-full w-auto`} onClick={() => handleFilter("filter-logo")}>
                            <div className="tab-content-container flex flex-row items-center gap-5">
                                    <div className="tab-icon-left-container">
                                        <Search className="sm:h-[30px] sm:w-[30px]"/> 
                                    </div>
                                    <div className="tab-labels flex flex-col text-left">
                                        <div className="tab-title">SEO</div>
                                        <p className="tab-descripton max-[850px]:block hidden">Increase visibility & drive traffic.</p>
                                    </div>
                                </div>
                                <div className="tab-icon-container  max-[850px]:block hidden">
                                    <ArrowRight />
                                </div>
                        </button>
                        <button className={`tab ${projectFilter === "filter-design" ? "active" : " "} flex flex-row items-center justify-between gap-3 max-[850px]:w-full w-auto`} onClick={() => handleFilter("filter-design")}>
                            <div className="tab-content-container flex flex-row items-center gap-5">
                                <div className="tab-icon-left-container">
                                    <PenTool className="sm:h-[30px] sm:w-[30px]"/> 
                                </div>
                                <div className="tab-labels flex flex-col text-left">
                                    <div className="tab-title">Graphics Design</div>
                                    <p className="tab-descripton max-[850px]:block hidden">Creative design & branding.</p>
                                </div>
                            </div>
                            <div className="tab-icon-container  max-[850px]:block hidden">
                                <ArrowRight />
                            </div>
                        </button>    
                    </div>
                <div className={`projects-container w-full flex flex-col sm:flex-row justify-center flex-wrap gap-5 py-10 ${isProjectVisible ? "fadeUp" : "not-activate-element"}`} ref={projectsContainer}>
                    {/* Portfolio Grid */}
                    {projectFilterResults.length > 0 ? (
                        projectFilterResults.map((project) => (
                        <div className={`project-item bg-white flex flex-col ${isProjectVisible ? "fadeUp" : "not-activate-element"} w-[100%] sm:w-[45%] lg:w-[29%] h-350px`} key={project.id} onClick={() => setProjectID(project.id)}>
                            <div className="featured-image-container" style={{backgroundImage: `url(${project.featuredImages[0].src})`, }}></div>
                            <div className="project-details flex flex-row items-center w-full">
                                <div className="tech-stack-container flex flex-col">
                                    <h5>{project.websiteName}</h5>
                                    {project.techStack && (
                                    <ul className="flex flex-row items-center flex-wrap gap-2">
                                        {project.techStack.map((tech, index) => (
                                        <li key={index}>
                                            <p>{tech}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    )}
                                </div>
                            </div>
                            <div className="btn-container">
                                <button type="button" className="primary-btn" onClick={() => { setProjectID(project.id); }}> View Details</button>
                            </div>
                        </div>
                    ))
                    ) : (
                        <div className="nothing-found">
                            <h5 className="text-(--color-accent)">Nothing Here Yet</h5>
                            <p>
                                I'm still building my collection for this category. Check
                                out my other projects.
                            </p>
                        </div>
                    )}

                {/* Popup Modal Container  */}
                {selectedProject && (
                    <div className={`popup-modal flex justify-center items-center w-[100%] h-screen ${projectID ? "active" : ""}`} >
                        <div className={`inner-con inner-popup-modal  w-[90%] lg:[80%] h-[80vh] sm:h-[60vh] xl:h-[95vh] flex p-[2px] rounded-xl project-inner-modal-${selectedProject.id}`} key={selectedProject.id}>
                            <div className="project-detailed-container flex flex-col md:flex-row bg-[#131D31] text-white rounded-xl border border-white/8 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)] py-15 px-5 md:py-10 md:px-10 gap-10 overflow-auto sm:overflow-visible">
                                {/*Close BTN */}
                                <div className="close-btn-container" onClick={() => setProjectID(false)}>
                                    <X />
                                </div>

                                {/* Carousel Project Images */}
                                <div className="portfolio-gallery w-full sm:w-[60%]">
                                    {/* Active Image */}
                                    <div className="portfolio-gallery__main">
                                        <img src={selectedProject.featuredImages[selectedIndex].src} alt="" />
                                    </div>
                                    
                                    {/* Thumbnail Carousel */}
                                    <div className="portfolio-gallery__thumbs">
                                        <div className="embla portfolio-gallery__viewport" ref={thumbsRef}>
                                            <div className="embla__container">
                                                {selectedProject.featuredImages.map((image, index) => (
                                                <div className="embla__slide portfolio-gallery__thumb" key={image.id ?? index}>
                                                    <button type="button" onClick={() => scrollTo(index)} className={ index === selectedIndex ? "portfolio-gallery__thumb-btn active" : "portfolio-gallery__thumb-btn"}>
                                                        <img src={image.src} alt={image.alt || ""}/>
                                                    </button>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
   

                                {/* Project Content */}
                                <div className="col project-full-dec w-full sm:w-[45%] h-auto flex flex-col gap-2 overflow-visible sm:overflow-auto">
                                    <p className="company-tag !text-[14px]">
                                        Company: {selectedProject.company}
                                    </p>
                                    <h3 className="projectName">
                                    {selectedProject.websiteName}
                                    </h3>
                                    <div className="project-desc-container pb-3">
                                        <p className="description-item">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                    <hr className="border-white/20" />
                                    <div className="portfolio-tag-container my-5">
                                        <ul className="portfolio-tag-list flex flex-col gap-5">
                                            <div className="live-website flex flex-row flex-nowrap gap-4">
                                                <div className="icon-container">
                                                    <Link />
                                                </div>
                                                <div className="content-container flex flex-col gap-1">
                                                    <h6>Live Website</h6>
                                                    <p>
                                                        <a href={selectedProject.url} target="_blank" className="!p-0 text-[#2563eb]">
                                                            {selectedProject.url}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="project-year flex flew-row flex-nowrap gap-4">
                                                <div className="icon-container">
                                                    <Calendar />
                                                </div>
                                                <div className="content-container flex flex-col gap-1">
                                                    <h6>Project Year</h6>
                                                    <p>{selectedProject.projectYear}</p>
                                                </div>
                                            </div>

                                            <div className="tech-stack flex flex-row flex-nowrap gap-4">
                                                <div className="icon-container">
                                                    <Layers />
                                                </div>
                                                <div className="content-container flex flex-col gap-1">
                                                    <h6>Tech Stacks</h6>
                                                    <div className="stack-container">
                                                    <ul className="flex flex-row flex-wrap gap-4">
                                                        {selectedProject.techStack.map(
                                                        (stackItem, index) => (
                                                            <li
                                                            key={index}
                                                            className="uppercase px-3 py-1 bg-white/8 rounded-[5px]"
                                                            >
                                                            {stackItem}
                                                            </li>
                                                        ),
                                                        )}
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="project-tag flex flex-row flex-nowrap gap-4">
                                                <div className="icon-container">
                                                    <Tag />
                                                </div>
                                                <div className="content-container flex flex-col gap-1">
                                                    <h6>Project Tag</h6>
                                                    <p>{selectedProject.projectTag}</p>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="btn-view-website-container my-[10px] flex">
                                        {selectedProject.filterCategory.includes("filter-web",) && (
                                            <a href={`${selectedProject.url}`} target="_blank" type="button" className="primary-btn flex flex-row flex-nowrap gap-3 items-center">
                                                View Website{" "}
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
