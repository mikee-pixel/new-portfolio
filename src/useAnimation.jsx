import {useState, useEffect, useRef} from 'react';

const useAnimation = (threshold = 0.3) => {
    const targetElement = useRef(null);
    const [isElementVisible, setIsElementVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setIsElementVisible(true);
                }
            })
        },{
            threshold
        })

        if(targetElement.current) observer.observe(targetElement.current);

        return () => {
            if(targetElement.current) observer.unobserve(targetElement.current);
            observer.disconnect();
        }
    }, [threshold])

    return{targetElement, isElementVisible}
    
}

export default useAnimation;