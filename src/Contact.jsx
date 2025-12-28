import useAnimation from "./useAnimation";
import emailjs  from "emailjs-com";
import {useRef, useState} from 'react';

const Contact = () => {
    const {targetElement, isElementVisible} = useAnimation();
    const contactForm = useRef();
    const [fieldName, setFieldName] = useState("");
    const [fieldPhone, setFieldPhone] = useState("");
    const [fieldEmail, setFieldEmail] = useState("");
    const [fieldSubject, setFieldSubject] = useState("");
    const [fieldMessage, setFieldMessage] = useState("");
    const [successMessage, setSucessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(false);
 

    const handleFormSubmission = async(e) => {
        e.preventDefault();

        //Check if there is existing error message in the form and set it to false
        if(errorMessage) setErrorMessage(false);

        try{
            //Request to EmailJS
            const response = await emailjs.sendForm(
                "service_kurufeb",
                "template_m9j6vp9",
                contactForm.current,
                "eegWjDT5Z9ZRBRqqg"
            )
            if(response.status !== 200) {
                throw new Error(`HTTP Error: Status ${response.status}`);
            }

            setLoading(true);

            //Update state values
            setTimeout(() => {
                //Empty the fields and display the success message
                setFieldName(""),
                setFieldPhone(""),
                setFieldEmail(""),
                setFieldSubject(""),
                setFieldMessage(""),
                setLoading(false),
                setErrorMessage(false),
                setSucessMessage(true)

                //Hide the sucesss message after 2 sec
                setTimeout(() => {
                    setSucessMessage(false);
                    console.log("Sucess Message Disappear")
                }, 2000)
            }, 2000)
        } catch (error) {() => {
            console.log(error);
            setErrorMessage(true);
        }
        }
    }
        
    return (
        <section className={`w-full flex justify-center contact mb-20 ${isElementVisible ? 'fadeUp' : 'not-activate-element'}`} id="contact-me" ref={targetElement}> 
            <div className="inner-con max-w-[1320px] w-full px-10">
                <div className="content-container w-full flex flex-col sm:flex-row justify-evenly items-stretch py-0">
                    <div className="col text-details w-full sm:w-[40%] h-auto lg:h-[430px] px-5 sm:px-10 py-20 sm:py-10">
                        <p className="intro gradient-highlighted">Get In Touch</p>
                        <h2 className="w-full sm:w-[75%]">Elevate your brand with Me</h2>
                        <p>Have a project in mind, a question, or just want to say hello? Feel free to reach out!I’m always open to discussing.</p>
                    </div>
                    <div className="col w-full sm:w-[60%] h-auto lg:h-[430px] px-5 sm:px-10 py-20 sm:py-10">
                        <div className="form-container">
                            <form onSubmit={handleFormSubmission} className="flex flex-wrap flex-row justify-between gap-7" ref={contactForm}>
                                <input onChange={e => setFieldName(e.target.value)} value={fieldName} type="text" name="your-name" id="your-name" placeholder="Your Name *" required className="inputfield-item w-[100%] lg:w-[47%]"/>
                                <input onChange={e => setFieldPhone(e.target.value)} value={fieldPhone} type="tel" name="phone-number" id="phone-number" placeholder="Phone Number" className="inputfield-item w-[100%] lg:w-[47%]"/>
                                <input onChange={e => setFieldEmail(e.target.value)} value={fieldEmail} type="email" name="email-address" id="email-address" placeholder="Your Email *" required className="inputfield-item w-[100%] lg:w-[47%]"/>
                                <input onChange={e => setFieldSubject(e.target.value)} value={fieldSubject} type="text" name="subject" id="subject" placeholder="Subject *" required className="inputfield-item w-[100%] lg:w-[47%]"/>
                                <textarea onChange={e => setFieldMessage(e.target.value)} value={fieldMessage} name="message" id="message" className="inputfield-item w-[100%]" placeholder="Your Message *" required></textarea>
                                <button type="submit">Appointment Now</button>
                                <p className={`loading ${loading ? 'active' : ''}`}>Loading....</p>
                                <p className={`error-message ${errorMessage ? 'active' : ''}`}>Submission Failed.</p>
                                <p className={`success-message ${successMessage ? 'active' : ''}`}>Submission Success!</p>
                            </form>
                        </div>
                    </div>
                    <div className="backlight"></div>
                </div>
            </div>
        </section>
    )
}

export default Contact;