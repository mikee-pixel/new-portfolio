import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToView = () => {
    const location = useLocation();
    
    useEffect(() => {
        if(location.hash){
            const element = document.getElementById(`${location.hash.replace("#", "")}`);
            console.log(element);
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }, [location])

    return null;
}

export default ScrollToView;