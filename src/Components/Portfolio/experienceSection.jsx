import React, { useEffect, forwardRef, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import '../../index.css';

const experienceData = [
    {
        companyName: "Company A",
        duration: "Jan 2020 - Dec 2022",
        description: "y son says, “Wouldn’t it be funny if a business called itself ‘The Pumpkin Patch,’ but instead of you picking pumpkins from a field, they patch your carved pumpkins? Like, you bring in your jack-o-lantern and they put the eyes and stuff back in.",
    },
    {
        companyName: "Company B",
        duration: "Feb 2018 - Nov 2019",
        description: "y son says, “Wouldn’t it be funny if a business called itself ‘The Pumpkin Patch,’ but instead of you picking pumpkins from a field, they patch your carved pumpkins? Like, you bring in your jack-o-lantern and they put the eyes and stuff back in.",
    },
    {
        companyName: "Company B",
        duration: "Feb 2018 - Nov 2019",
        description: "My son says, “Wouldn’t it be funny if a business called itself ‘The Pumpkin Patch,’ but instead of you picking pumpkins from a field, they patch your carved pumpkins? Like, you bring in your jack-o-lantern and they put the eyes and stuff back in.",
    },
    // Add more experiences as needed
];

const Experience = forwardRef((props,ref) => {
    const [hoveredStates, setHoveredStates] = useState(Array(experienceData.length).fill(false));

    const handleMouseEnter = (index) => {
        const newHoveredStates = Array(hoveredStates.length).fill(false);
        setHoveredStates(newHoveredStates);
        newHoveredStates[index] = true;
        setHoveredStates(newHoveredStates);
    };

    const handleMouseLeave = (index) => {
        const newHoveredStates = [...hoveredStates];
        newHoveredStates[index] = false;
        setHoveredStates(newHoveredStates);
    };

    return (
        <section ref={ref} style={{ backgroundColor: 'black', padding: '2rem' }}>
            <Typography fontFamily={'Sora'} textAlign={'center'} variant="h3" component="h1" style={{ color: 'white', marginBottom: '2rem' }}>
                My <span style={{ fontWeight: 'bolder' }}>Experience</span>
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {experienceData.map((experience, index) => (
                    <Grid key={index} item xs={12} sm={10} md={8}>
                        <Card onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)} style={{ backgroundColor: hoveredStates[index] ? '#27272a' : 'black', color: 'white', borderRadius: '1rem', border: `2px solid ${index % 2=== 0 ? '#27272a' : '#27272a'}`, padding: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <CardContent>
                                <Grid container>
                                    <Grid item lg={6}>
                                        <Typography fontFamily={'Sora'} variant="h4" component="div">
                                            {experience.companyName}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography fontFamily={'Sora'} variant="subtitle2" component="div" color="white" style={{ marginTop: '0.5rem' }}>
                                            {experience.duration}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography fontFamily={'Sora'} variant="body1" component="div" style={{ marginTop: '1rem' }}>
                                    {experience.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
});

export default Experience;
