import {useState, useEffect, useRef } from "react";
import useAPIRequest from "./useAPIRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "./ErrorMessage";

const Portfolio = () => {
    const [projectFilter, setProjectFilter] = useState('filter-all');
    const [projectID, setProjectID] = useState(null);
    const projectsContainer = useRef(null);
    const [isProjectVisible, setIsProjectVisible] = useState(false); 

    //API Request to Projects 
    const {data, loading, errorMessage} = useAPIRequest("http://localhost:8000/projects");
    //Update the filter value
    const handleFilter = (filterValue) => {
        setProjectFilter(filterValue);
    }

    //useAnimation Function Displaying the Projects.
    useEffect(() => {
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsProjectVisible(true);
                }
            })
        }, {
            threshold: 0.1,
        })

        if(projectsContainer.current) projectObserver.observe(projectsContainer.current);

        return () => {
            if(projectsContainer.current) projectObserver.unobserve(projectsContainer.current);
            projectObserver.disconnect();
        }
    }, [])

    //Display Popup Modal Function
    const showPopupModal = (key) => {
        // console.log(`Project ID: ${id}`);
        // console.log(project.id)
        const popUpObject = data.filter(project => project.id === key);
        console.log(popUpObject);
        setProjectID(key);   
    }

    const closePopupModal = () => {
        setProjectID(false);
    }

    return(
        <section className="flex justify-center portfolio" id="portfolio">
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container w-full flex flex-col items-center py-20">
                    <h2>Portfolio</h2>
                    <div className="separator w-25 flex flex-row items-center py-5">
                        <hr className="separator-item w-8" />
                        <hr className="separator-item w-10 border-[3px] highlight" />
                        <hr className="separator-item w-8" />
                    </div>
                    <p className="text-desc">Here are my previous works.</p>
                    <div className="previous-projects py-10 flex flex-col items-center w-full">
                        <div className="tabs-container flex flex-row flex-wrap justify-center gap-10 sm:gap-10 px-5 sm:px-10 md:px-20">
                            <button className={`tab ${projectFilter === 'filter-all' ? 'active' : ""} w-full sm:w-[200px] `} onClick={() => handleFilter("filter-all")}>All</button>
                            <button className={`tab ${projectFilter ==='filter-web' ? "active" : " "} w-full sm:w-[200px]`} onClick={() => handleFilter("filter-web")}>Web Development</button>
                            <button className={`tab ${projectFilter === 'filter-design' ? "active" : " "} w-full sm:w-[200px]`} onClick={() => handleFilter("filter-design")}>Graphics Design</button>
                            <button className={`tab ${projectFilter === 'filter-logo' ? "active" : " "} w-full sm:w-[200px]`} onClick={() => handleFilter("filter-logo")}>Logo Design</button>
                        </div>
                        <div className={`projects-container w-full flex flex-col sm:flex-row justify-center flex-wrap gap-5 py-10 ${isProjectVisible ? 'fadeUp' : 'not-activate-element'}`} ref={projectsContainer}>
                            {errorMessage && <ErrorMessage />}
                            {loading && <div className="loader"></div>}
                            { data && 
                                data.filter(perProjectCat => perProjectCat.filterCategory.includes(projectFilter)).map(project => (
                                        <div className={`project-item bg-white flex flex-col ${isProjectVisible ? 'fadeUp' : 'not-activate-element'} w-[100%] sm:w-[45%] lg:w-[29%] h-350px`} key={project.id}>
                                            <div className="featured-image-container" style={{backgroundImage:`url(${project.featuredImage[0]})`}}>
                                            </div>
                                            <div className="project-details flex flex-row items-center w-full">
                                                <div className="tech-stack-container flex flex-col">
                                                    <h5>{project.websiteName}</h5>
                                                    <ul className="flex flex-row items-center flex-wrap gap-2">
                                                    {project.techStack.map((tech, index) => (
                                                        <li key={index}><p>{tech}</p></li>
                                                    ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="btn-container">
                                                <button type="button" className="primary-btn" onClick={() => showPopupModal(project.id)} >View Details</button>
                                            </div>
                                            <div className="btn-container-mobile" onClick={() => showPopupModal(project.id)}></div>
                                            <div className={`popup-modal flex justify-center items-center w-[100%] h-screen ${project.id === projectID ? 'active' : ""}`}>
                                                <div className="inner-con w-[80%] h-[95vh] flex bg-gradient-to-br from-[#2eaf9d] via-[#2eaf9d] to-[#b0f7ef] p-[2px] rounded-xl">
                                                    <div className="project-detailed-container flex flex-col lg:flex-row bg-[#111826] text-white rounded-xl py-15 px-5 md:py-10 md:px-10 gap-10">
                                                        <div className="close-btn-container" onClick={() => closePopupModal(project.id)}>
                                                            <FontAwesomeIcon icon={faXmark} />
                                                        </div>
                                                        
                                                        <div className="col project-full-dec w-full lg:w-[45%] h-auto flex flex-col gap-2">
                                                            <p className="company-tag">Project/Company: {project.company}</p>
                                                            <h3 className="projectName">{project.websiteName}</h3>
                                                            <div className="project-desc-container">
                                                                {project.description.map((itemDesc, index) => (
                                                                    <p className="description-item" key={index}>{itemDesc}</p>
                                                                ))}
                                                            </div>
                                                            <div className="tech-stack-display">
                                                                <p className="tech-title mb-[10px]">Tech Stack:</p>
                                                                <ul className="flex flex-row flex-wrap list-none gap-2 mb-[20px]">
                                                                    {project.techStack.map((tech, index) => (
                                                                        <li className="px-5 py-1 mr-[10px]" key={index}>{tech}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="btn-view-website-container mt-[10px]">
                                                                {project.filterCategory.includes("filter-web") && <a href={`${project.url}`} target="_blank" type="button" className="primary-btn">View Website</a>}     
                                                            </div>
                                                        </div>

                                                        <div className="col project-image w-full lg:w-[60%]">
                                                            {project.featuredImage.map((image, index) => (
                                                                <img src={`${image}`} alt={`${project.websiteName}`} className="w-full h-auto" key={index}/>
                                                            ))}
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                ))
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;