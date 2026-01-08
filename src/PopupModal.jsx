const PopupModal = () => {
    return(
        <div className="popup-modal flex justify-center items-center w-[100%] h-screen">
            <div className="inner-con w-[80%] flex flex-row gap-10 bg-gradient-to-br from-[#2eaf9d] via-[#2eaf9d] to-[#b0f7ef] rounded-xl">
                <div className="inner-con2 bg-[#111826] text-white rounded-xl">
                    <div className="col project-image w-[60%]"><img src={`${project.featuredImage}`} alt="" /></div>
                    <div className="col project-full-dec w-[45%]">
                        <p className="company-tag">Project: {project.company}</p>
                        <h3 className="projectName">{project.websiteName}</h3>
                        <p className="project-desc">{project.description}</p>
                        {projectFilter ==='filter-web' && (
                            <button type="button">View Website</button>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PopupModal;