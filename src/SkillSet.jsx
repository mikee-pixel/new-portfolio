import useAnimation from "./useAnimation";
import SkillData from "./data/SkillData";

const SkillSet = () => {
    const {targetElement, isElementVisible} = useAnimation();
    const {targetElement: skillsRef, isElementVisible: skillsVisible} = useAnimation();

    //Skill Data
    const skills = Object.values(SkillData);

    return (
        <section className="w-full flex justify-center skillset bg-(--color-secondary-bg)" id="skillset" ref={targetElement}>
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container py-20 flex flex-col items-center">
                    <h2 className={`${isElementVisible ? 'fadeUp' : 'not-activate-element'}`}>Skills</h2>
                    <div className={`separator w-25 flex flex-row items-center py-5 ${isElementVisible ? 'fadeUp' : ''}`}>
                        <hr className="separator-item w-8" />
                        <hr className="separator-item w-10 border-[3px] highlight" />
                        <hr className="separator-item w-8" />
                    </div>
                    <div className="skills-container w-full flex flex-row flex-wrap justify-between items-start gap-5 mt-8" ref={skillsRef}>
                        {skills.map((skill) => (
                            <div className="skill-item w-full md:w-[45%]" key={skill.id}>
                                <div className="details w-full flex flex-row items-center justify-between mb-2">
                                    <div className="skill-name">{skill.name}</div>
                                    <div className="skill-percentage">{skill.level}%</div>
                                </div>
                                <div className="skill-level">
                                    <div className="skill-bar">
                                        <div className="skill-overlaybar" style={{width: skillsVisible ? `${skill.level}%` : 0}}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillSet;
