import { useEffect, useState, useRef } from "react";

const Statistic = () => {
  const [successProject, setSuccessProject] = useState(0);
  const [satisfiedClient, setSatisfiedClient] = useState(0);
  const [yearOfExperience, setyearOfExperience] = useState(0);
  const targetRef = useRef(null);
  const intervalRef = useRef(null);

  const elementVisible = (isVisible) => {
    if(isVisible) {
      intervalRef.current = setInterval(() => {
        //helper function for incremental counter.
        const counterIncrement = (minimumValue, maximumValue) => {
          if(minimumValue < maximumValue) return minimumValue + 1;
          return minimumValue;
        }

        setSuccessProject(successProject => counterIncrement(successProject, 20));
        setSatisfiedClient(satisfiedClient => counterIncrement(satisfiedClient, 7));
        setyearOfExperience(yearOfExperience => counterIncrement(yearOfExperience, 6));

        // console.log("Interval function");
      }, 80)
    } else {
      clearInterval(intervalRef.current);
      setSuccessProject(0);
      setSatisfiedClient(0);
      setyearOfExperience(0);
    }
    
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          elementVisible(true)
          // console.log("Element is in the view port");
        } else {
          elementVisible(false);
          // console.log("Element is NOT in the viewport");
        }
      })
    }, {
      threshold: 1,
    })

    observer.observe(targetRef.current);

    //this function secure to terminate the observer once the React component unmount.
    return () => {
      if(intervalRef.current) observer.unobserve(targetRef.current);
      observer.disconnect();
    }
  }, [])
  
  
  

  return (
    <section ref={targetRef} className={`flex flex-row justify-center w-full statistic ${targetRef ? 'fadeUp' : 'not-activate-element'}`}>
      <div className="inner-con max-w-[1320px] w-full flex items-center justify-center px-10">
        <div className="container-content w-full flex flex-row flex-wrap items-center justify-around p-10 gap-10 sm:gap-0">
          <div className="counter-item flex flex-col items-center w-full sm:w-1/3">
            <p className="counter-number">{successProject}+</p>
            <p className="counter-data">Success Projects</p>
          </div>
          <div className="counter-item flex flex-col items-center w-full sm:w-1/3">
            <p className="counter-number">{satisfiedClient}+</p>
            <p className="counter-data">Satisfied Client</p>
          </div>
          <div className="counter-item flex flex-col items-center w-full sm:w-1/3">
            <p className="counter-number">{yearOfExperience}+</p>
            <p className="counter-data">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
