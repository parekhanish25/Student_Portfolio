import React, { useState } from 'react';
import { Grid, TextField, IconButton, Button, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DeleteIcon from '@mui/icons-material/Delete';

const ExperienceForm = () => {
    const [experiences, setExperiences] = useState([{ id: 1, title: '', duration: '', description: '' }]);

    const handleAddExperience = () => {
        const newExperiences = [...experiences];
        const newId = experiences.length + 1;
        newExperiences.push({ id: newId, title: '', duration: '', description: '' });
        setExperiences(newExperiences);
    };

    const handleDeleteExperience = (id) => {
        const newExperiences = experiences.filter(exp => exp.id !== id);
        setExperiences(newExperiences);
    };

    const handleInputChange = (id, field, value) => {
        const newExperiences = experiences.map(exp =>
            exp.id === id ? { ...exp, [field]: value } : exp
        );
        setExperiences(newExperiences);
    };

    return (
        <Grid container spacing={2}>
            <Grid container>
                <Grid item lg={4} ></Grid>
                <Typography fontFamily={'Sora'} variant="h4" gutterBottom>
                    My <span style={{ fontWeight: 'bold' }}>Exprience </span>
                </Typography>
            </Grid>
            {experiences.map(({ id, title, duration, description }) => (
                <Grid item xs={12} key={id}>
                    <Grid container>
                        <Grid container marginBottom={3}>
                            <Grid item lg={5}>
                                <Typography fontFamily={'Sora'} variant="body" gutterBottom>
                                    Exprience <span style={{ fontWeight: 'bold' }}>{id}</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={6}></Grid>
                            <Grid item lg={1}>
                                <IconButton onClick={() => handleDeleteExperience(id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={3}>
                            <Grid item lg={5.5}>
                                <TextField
                                    label="Company Name"
                                    value={title}
                                    onChange={(e) => handleInputChange(id, 'title', e.target.value)}
                                    fullWidth
                                />
                         </Grid>
                            <Grid item lg={0.5}></Grid>
                            <Grid item lg={5.5}>
                                <TextField
                                    label="Role"
                                    value={title}
                                    onChange={(e) => handleInputChange(id, 'title', e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={3}>
                            <Grid item lg={5.5}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label={'Start Date'}/>
                                </LocalizationProvider>
                            </Grid> 
                            <Grid item lg={0.5}></Grid>
                            <Grid item lg={5.5}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label={'End Date'}/>
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={3}>
                            <Grid item lg={11.5}>
                                <TextField
                                    label="Description"
                                    value={description}
                                    onChange={(e) => handleInputChange(id, 'description', e.target.value)}
                                    fullWidth
                                    multiline
                                    rows={3}
                                />
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            ))}
            <Grid item xs={12}>
                <Button onClick={handleAddExperience} variant="outlined" color="primary">
                    Add Experience
                </Button>
            </Grid>
        </Grid>
    );
};

export default ExperienceForm;
