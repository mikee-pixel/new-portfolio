import WorkingHistory from "./data/WorkingHistory";
import useAnimation from "./useAnimation";
import WorkItem from "./WorkItem";


const Resume = () => {

    // const {targetElement, isElementVisible} = useAnimation();
    const {targetElement: titleRef, isElementVisible: titleVisible} = useAnimation();
    const {targetElement: barRef, isElementVisible: barVisible} = useAnimation();
    const {targetElement: educationTitleRef, isElementVisible: educationTitleVisible} = useAnimation();
    const {targetElement: educationRef, isElementVisible: educationVisible} = useAnimation();
    const {targetElement: resumeTitleRef, isElementVisible: resumeTitleVisible} = useAnimation();
    
    //Working History Data
    const workingHistory = Object.values(WorkingHistory);
    

    return (
        <section className="w-full flex justify-center resume" id="resume">
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container w-full flex flex-col items-center py-20">
                    <h2 className={`${titleVisible ? 'fadeUp' : 'not-activate-element'}`} ref={titleRef}>Resume</h2>
                    <div className={`separator w-25 flex flex-row items-center py-5 ${barVisible ? 'fadeUp' : 'not-activate-element'}`} ref={barRef}>
                        <hr className="separator-item w-8" />
                        <hr className="separator-item w-10 border-[3px] highlight" />
                        <hr className="separator-item w-8" />
                    </div>
                    <div className="resume-container flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between mt-8">
                        <div className="col education-history w-full sm:w-[48%]">
                            <h3 className={`title mb-5 ${educationTitleVisible ? 'fadeUp' : 'not-activate-element'}`} ref={educationTitleRef}>Education</h3>
                            <div className={`school-item history-item ${educationVisible ? 'fadeUp' : 'not-activate-element'}`} ref={educationRef}>
                                <div className="inner-con">
                                    <h4>University of Perpetual Help System Dalta</h4>
                                    <p className="year backgroundcolor-gradient">2014-2019</p>
                                    <p><i>Bachelor of Science in Computer Engineering</i></p>
                                    <p>During my college days, I've been working on different projects like Robotics, System Development, Web Development, and Programming.</p>
                                    <p>In the year 2019, I also received a <b>proficiency award</b> for our thesis titled <b><i>"Automated Farm Management and Monitoring System".</i></b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col work-history w-full sm:w-[48%]">
                            <h3 className={`title mb-5 ${resumeTitleVisible ? 'fadeUp' : 'not-activate-element'}`} ref={resumeTitleRef}>Professional Experience</h3>                            
                            {/* NEW Working History Template */}
                            {workingHistory && workingHistory.map((work) => (
                                <WorkItem work={work} key={work.id}/>
                            ))}    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;