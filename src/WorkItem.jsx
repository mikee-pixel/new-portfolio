import useAnimation from "./useAnimation"

const WorkItem = ({work}) => {

    const {targetElement, isElementVisible} = useAnimation();

    return(
        <div className={`work-item history-item ${isElementVisible ? 'fadeUp' : 'not-activate-element'}`} ref={targetElement} >
            <div className="inner-con">
                <h4>{work.role}</h4>
                <p className="year backgroundcolor-gradient">{work.yearOfService}</p>
                <h5><i>{work.companyName}</i></h5>
                <ul className="jobresponsibility-container">
                    {work.responsibilities.map((responsibility, index) => (
                        <li className="job-item" key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WorkItem;