import { useState, useRef, useEffect } from "react";
import useAnimation from "./useAnimation";

const SkillSet = () => {
    const [skillHtml, setSkillHtml] = useState(0);
    const [skillCss, setSkillCss] = useState(0);
    const [skillJavaScript, setSkillJavaScript] = useState(0);
    const [skillWordPress, setSkillWordPress] = useState(0);
    const [skillPhp, setSkillPhp] = useState(0);
    const [skillSql, setSkillSql] = useState(0);
    const [skillReactJs, setSkillReactJs] = useState(0);
    const [skillTailwindCss, setSkillTailwindCss] = useState(0);

    const progressInterval = useRef(null);
    const skillTarget = useRef(null);

    const skillProgression = (isElementVisible) => {
        if(isElementVisible) {
            progressInterval.current = setInterval(() => {

                //helper function interval
                const counter = (initialValue, maxValue) => {
                    if(initialValue < maxValue) return initialValue + 1;
                    return initialValue;
                }

                setSkillHtml(skillHtml => counter(skillHtml, 80));
                setSkillCss(skillCss => counter (skillCss, 90));
                setSkillJavaScript(skillJavaScript => counter(skillJavaScript, 60));
                setSkillWordPress(skillWordPress => counter(skillWordPress, 80));
                setSkillPhp(skillPhp => counter(skillPhp, 70));
                setSkillSql(skillSql => counter(skillSql, 50));
                setSkillReactJs(skillReactJs => counter(skillReactJs, 60));
                setSkillTailwindCss(skillTailwindCss => counter(skillTailwindCss, 50));
                
            }, 10);
        } else {
            clearInterval(progressInterval.current);
        }
    }

    useEffect(() => {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry =>{
                if(entry.isIntersecting) {
                    skillProgression(true);
                } else {
                    skillProgression(false);
                }
            })
        }, {
            threshold: 0.5,
        })

        if(skillTarget.current) skillObserver.observe(skillTarget.current);

        return () => {
            if(skillTarget.current) skillObserver.unobserve(skillTarget.current);
            setTimeout(progressInterval.current);
            skillObserver.disconnect();
        }

    }, [])

    const {targetElement, isElementVisible} = useAnimation();
    return (
        <section className="w-full flex justify-center skillset" id="skillset" ref={targetElement}>
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container py-20 flex flex-col items-center">
                    <h2 className={`${isElementVisible ? 'fadeUp' : 'not-activate-element'}`}>Skills</h2>
                    <div className={`separator w-25 flex flex-row items-center py-5 ${isElementVisible ? 'fadeUp' : ''}`}>
                        <hr className="separator-item w-8" />
                        <hr className="separator-item w-10 border-[3px] highlight" />
                        <hr className="separator-item w-8" />
                    </div>
                    <div className="skills-container w-full flex flex-row flex-wrap justify-between items-start gap-5 mt-8" ref={skillTarget}>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">html</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillHtml}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">php</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillPhp}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">css</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillCss}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">sql</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillSql}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">javascript</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillJavaScript}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">react js</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillReactJs}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">wordpress</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillWordPress}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-item w-full md:w-[45%]">
                            <div className="details w-full flex flex-row items-center justify-between mb-2">
                                <div className="skill-name">tailwind css</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-overlaybar" style={{width: `${skillTailwindCss}%`}}></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillSet;