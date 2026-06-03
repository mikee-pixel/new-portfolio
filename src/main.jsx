import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollToView from './ScrollToView.jsx'
import App from './App.jsx'
import Statistic from './Statistic.jsx'
import About from './About.jsx'
import SkillSet from './SkillSet.jsx'
import Resume from './Resume.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import ContactDetails from './ContactDetails.jsx'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToView />
      <Navigation />
      <App />
      <Statistic />
      <About />
      <SkillSet />
      <Resume />
      <Portfolio />
      <Contact />
      <ContactDetails />
      <Footer />
    </BrowserRouter>
  </StrictMode>,

)
