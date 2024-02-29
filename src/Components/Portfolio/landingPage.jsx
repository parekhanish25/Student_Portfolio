import React from 'react';
import App from './Navbar/App';
import HeroSection from './Herosection/herosection';
import Skills from './skills/skills';
import AboutMe from './Aboutme/Aboutme';
import Form from './form/form';

const ProtfolioPage = () => {
    return (
        <>
            <App />
            <HeroSection />
            <Skills/>
            <AboutMe/>
        </>
    );
};

export default ProtfolioPage;
