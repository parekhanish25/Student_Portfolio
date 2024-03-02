import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
const ProjectsSection = () => {
    const [projects, setProjects] = useState([{ id: 1, Email: '21it101@charusat.edu.in', PName: '', Image: null, Description: '', Github: '', TechnologyStack: '' }]);

    const handleAddProject = () => {
        const newProjects = [...projects];
        const newId = projects.length + 1;
        newProjects.push({
            id: newId, Email: '21it101@charusat.edu.in', PName: '', Image: null, Description: '', Github: '', TechnologyStack: ''
        });
        setProjects(newProjects);
    };
    const handleDeleteProject = (id) => {
        const newProjects = projects.filter(project => project.id !== id);
        setProjects(newProjects);
    };
    const handleInputChange = (id, field, value) => {
        const newProjects = projects.map(project =>
            project.id === id ? { ...project, [field]: value } : project
        );
        setProjects(newProjects);
    };
    const handleImageChange = (id, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newProjects = projects.map(project =>
                    project.id === id ? { ...project, Image: reader.result } : project
                );
                setProjects(newProjects);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post('/AddProjects', projects);
            console.log('Data sent to backend:', response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    }
    return (
        <Grid container spacing={3}>
            <Grid container marginTop={4}>
                <Grid item lg={5}></Grid>
                <Typography fontFamily={'Sora'} variant="h4">Projects</Typography>
            </Grid>
            {projects.map(({ id, Image, description, githubLink, demoLink }) => (
                <Grid item xs={12} key={id}>
                    <Grid container marginTop={2}>
                        <Grid item lg={6}>
                            <Typography fontFamily={'Sora'} variant="h6">Project <span style={{ fontWeight: 'bold' }}>{id}</span></Typography>
                        </Grid>
                        <Grid item lg={5}>
                        </Grid>
                        <Grid item lg={1} >
                            <IconButton onClick={() => handleDeleteProject(id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container marginBottom={3}>
                        <Grid item lg={12}>
                            <TextField
                                label="Project Name"
                                value={description}
                                onChange={(e) => handleInputChange(id, 'PName', e.target.value)}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12}>
                            <TextField
                                label="Description"
                                value={description}
                                onChange={(e) => handleInputChange(id, 'Description', e.target.value)}
                                fullWidth
                                multiline
                                rows={3}
                            />
                        </Grid>
                    </Grid>
                    <Grid container marginTop={3}>
                        <Grid item lg={5.5}>
                            <TextField
                                label="GitHub/Demo Link"
                                value={githubLink}
                                onChange={(e) => handleInputChange(id, 'Github', e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item lg={0.5}>
                        </Grid>
                        <Grid item lg={6}>
                            <TextField
                                label="Technology used"
                                value={githubLink}
                                onChange={(e) => handleInputChange(id, 'TechnologyStack', e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item lg={1}>
                        </Grid>
                        <Grid item lg={5} marginTop={2}>
                            <input
                                accept="image/*"
                                id={`project-image-${id}`}
                                type="file"
                                style={{ display: 'none' }}
                                onChange={(e) => handleImageChange(id, e)}
                            />
                            <label htmlFor={`project-image-${id}`}>
                                <Button variant="contained" component="span">
                                    Upload Image
                                </Button>
                            </label>
                            {Image && <img src={Image} alt="Project" style={{ maxWidth: '100px', display: 'block', marginTop: '10px' }} />}
                        </Grid>
                    </Grid>

                </Grid>
            ))}
            <Grid item xs={12}>
                <Button onClick={handleAddProject} variant="outlined" color="primary">
                    Add Project
                </Button>
                <Button variant="contained" onClick={handleSubmit} component="span">
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
};

export default ProjectsSection;
