import { CodeXml, ScanSearch, ShoppingCart, Zap } from "lucide-react";


const ExpertiseData = {
    webdev: {
        id: 3,
        icon: <CodeXml />,
        title: <h5>Website Design & Development</h5>,
        description: "Custom, responsive sites built to convert."
    },
    ecommerce: {
        id: 2,
        icon: <ShoppingCart />,
        title: <h5>E-Commerce Websites</h5>,
        description: "Online stores that make buying effortless."
    },
    webOptimization: {
        id: 1,
        icon: <Zap />,
        title: <h5>Website Speed Optimization</h5>,
        description: "Faster load times and better Core Web Vitals."
    },
    seo: {
        id: 0,
        icon: <ScanSearch />,
        title: <h5>Search Engine Optimization</h5>,
        description: "Technical SEO that brings in organic traffic."
    }
}

export default ExpertiseData;