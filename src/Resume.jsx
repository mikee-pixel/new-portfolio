import useAnimation from "./useAnimation";

const Resume = () => {

    // const {targetElement, isElementVisible} = useAnimation();
    const {targetElement: titleRef, isElementVisible: titleVisible} = useAnimation();
    const {targetElement: barRef, isElementVisible: barVisible} = useAnimation();
    const {targetElement: educationTitleRef, isElementVisible: educationTitleVisible} = useAnimation();
    const {targetElement: educationRef, isElementVisible: educationVisible} = useAnimation();
    const {targetElement: resumeTitleRef, isElementVisible: resumeTitleVisible} = useAnimation();
    const {targetElement: work1Ref, isElementVisible: work1Visible} = useAnimation();
    const {targetElement: work2Ref, isElementVisible: work2Visible} = useAnimation();
    const {targetElement: work3Ref, isElementVisible: work3Visible} = useAnimation();
    const {targetElement: work4Ref, isElementVisible: work4Visible} = useAnimation();



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
                            <div className={`work-item history-item ${work1Visible ? 'fadeUp' : 'not-activate-element'}`} ref={work1Ref}>
                                <div className="inner-con">
                                    <h4>Manager / Senior Website Developer</h4>
                                    <p className="year backgroundcolor-gradient">Sept 2023 - Present</p>
                                    <h5><i>BURK Digital</i></h5>
                                    <ul className="jobresponsibility-container">
                                        <li className="job-item">Managing the team workload using Agile Sprint, analyzing the project requirements, and ensuring the client requirements are met.</li>
                                        <li className="job-item">Manage different servers and domain registrar.</li>
                                        <li className="job-item">Create custom functions and advance custom fields based on the project requirements.</li>
                                        <li className="job-item">Maintain WordPress websites, plugins, and themes.</li>
                                        <li className="job-item">Create and design webpages and dynamic website components.</li>
                                        <li className="job-item">Optimize websites for performance, security, and scalability.</li>
                                        <li className="job-item">Ensuring cross-platform optimization.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`work-item history-item ${work2Visible ? 'fadeUp' : 'not-activate-element'}`} ref={work2Ref}>
                                <div className="inner-con">
                                    <h4>Digital Marketing Developer</h4>
                                    <p className="year backgroundcolor-gradient">Nov 2021 - Aug 2023</p>
                                    <h5><i>GoFluent Philippines, Inc.</i></h5>
                                    <ul className="jobresponsibility-container">
                                        <li className="job-item">Managing and planning the corporate and client websites on WordPress using a custom theme, Gutenberg and Divi.</li>
                                        <li className="job-item">Create dynamic pages, build custom theme plates, resuable blocks & functionality, increase website performance, perform SEO and website localization.</li>
                                        <li className="job-item">Responsible for website migration, single page redirections, and geotargeting for advertisement and marketing.</li>
                                        <li className="job-item">Create wireframes, user journey, and QA testing.</li>
                                        <li className="job-item">Setup google analytics and google tag manager.</li>
                                        <li className="job-item">Coordinate and collaborate with different teams across the globe to deliver exceptional digital/web output.</li>
                                        <li className="job-item">Resolve issues on the website and coordinate with the Marketing Ops and Global Marketing Team.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`work-item history-item ${work3Visible ? 'fadeUp':'not-activate-element'}`} ref={work3Ref}>
                                <div className="inner-con">
                                    <h4>Website QA</h4>
                                    <p className="year backgroundcolor-gradient">March 2021 - Nov 2021</p>
                                    <h5><i>OptimizeX Inc.</i></h5>
                                    <ul className="jobresponsibility-container">
                                        <li className="job-item">Perform QA checking such as cross-browser compatibility, website responsiveness, design & content, functionality, links, and redirections.</li>
                                        <li className="job-item">Create workflow & work around process, user journey, user manuals, and documentation research for the latest QA tools.</li>
                                        <li className="job-item">Build and use computer-assisted software engineering(CASE) tools to automate the writing of some codes.</li>
                                        <li className="job-item">Create a test automation script using selenium, C++, Java, and JavaScript.</li>
                                        <li className="job-item">Monitor website performance, search engine ranking, and checking client requirement.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`work-item history-item ${work4Visible ? 'fadeUp' : 'not-activate-element'}`} ref={work4Ref}>
                                <div className="inner-con">
                                    <h4>Digital Specialist</h4>
                                    <p className="year backgroundcolor-gradient">Aug 2019 - January 2021</p>
                                    <h5><i>Asian Datawords 24/7 Philippines Inc.</i></h5>
                                    <ul className="jobresponsibility-container">
                                        <li className="job-item">Configuration and adaptation of website using different Content Management System(CMS) such as DRUPAL, WEZEN, PIM, HYBRIS, as well as the most powerful WordPress.</li>
                                        <li className="job-item">Capable to develop a static and dynamic website from desktop to mobile-responsive designs.</li>
                                        <li className="job-item">Maintenance, integration, and update of brands’ websites.</li>
                                        <li className="job-item">Quality assurance of digital support across desktop and mobile environments.</li>
                                        <li className="job-item">Capable to used Adobe Photoshops and Adobe Illustrator to edit products.</li>
                                        <li className="job-item">Work on several projects requests simultaneously while meeting tight deadlines</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;