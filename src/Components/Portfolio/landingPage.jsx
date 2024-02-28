import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import App from '../Navbar/App';
import HeroSection from '../Herosection/herosection';
import Skills from '../skills/skills';

const ProtfolioPage = () => {
    return (
        <>
            <App />
            <HeroSection />
            <Skills/>
        </>
    );
};

export default ProtfolioPage;
