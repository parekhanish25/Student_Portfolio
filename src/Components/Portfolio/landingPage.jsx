import React, { useRef } from 'react';
import App from './Navbar/App';
import HeroSection from './Herosection/herosection';
import Skills from './skills/skills';
import AboutMe from './Aboutme/Aboutme';
import Form from './form/form';
import Experience from './experienceSection';
import ProjectsSection from './form/Projects';
import ProjectPage from './projectSection';
import { useParams } from 'react-router-dom';

const ProtfolioPage = () => {
    const Parmas = useParams();
    const Projectref = useRef(null);
    const Expref = useRef(null);
    const Skillref = useRef(null);
    const Aboutref = useRef(null);
    const { id } = Parmas;

    const scrollToProject = () => {
        if (Projectref.current) {
            Projectref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const scrollToExprience = () => {
        if (Expref.current) {
            Expref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const scrollToAboutMe = () => {
        if (Aboutref.current) {
            Aboutref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const scrollToSkills = () => {
        console.log('hi');
        if (Skillref.current) {
            console.log('sucess');
            Skillref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('sucess');
        }
    };
    return (
        <>
            <App
                ScrollAbout={scrollToAboutMe} scrollSkill={scrollToSkills} ScrollProject={scrollToProject} ScrollExperience={scrollToExprience}
            />
            <HeroSection id={id} />
            <div ref={Skillref}>
                <Skills id={id} />
            </div>
            <div ref={Expref}>
                <Experience />
            </div>
            <div ref={Aboutref} >
                <AboutMe />
            </div>
            <div ref={Projectref} >
                <ProjectPage />
            </div>

        </>
    );
};

export default ProtfolioPage;
