import React, { useState } from 'react';
import { Grid, TextField, IconButton, Button, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ExperienceForm = () => {
    const [experiences, setExperiences] = useState([{ id: 1, Email: '21it101@charusat.edu.in', CName: '', Role: '', DurationStart: '', DurationEnd: '', Description: '' }]);

    const handleAddExperience = () => {
        const newExperiences = [...experiences];
        const newId = experiences.length + 1;
        newExperiences.push({ id: newId, CName: '', Email: '21it101@charusat.edu.in', Role: '', DurationStart: '', DurationEnd: '', Description: '' });
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
    const handleDateChange = (id, field, date) => {
        const newExperiences = experiences.map(exp => {
            if (exp.id === id) {
                return { ...exp, [field]: date };
            }
            return exp;
        });
        setExperiences(newExperiences);
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post('/AddExprience', experiences);
            console.log('Data sent to backend:', response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid container>
                <Grid item lg={4} ></Grid>
                <Typography fontFamily={'Sora'} variant="h4" gutterBottom>
                    My <span style={{ fontWeight: 'bold' }}>Exprience </span>
                </Typography>
            </Grid>
            {experiences.map(({ id, CName, Role, DurationStart, DurationEnd, Description }) => (
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
                                    value={CName}
                                    name='CName'
                                    onChange={(e) => handleInputChange(id, e.target.name, e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item lg={0.5}></Grid>
                            <Grid item lg={5.5}>
                                <TextField
                                    label="Role"
                                    name="Role"
                                    value={Role}
                                    onChange={(e) => handleInputChange(id, e.target.name, e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={3}>
                            <Grid item lg={5.5}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker name={'Start Date'} label={'Start Date'}
                                        onChange={(date) => handleDateChange(id, "DurationStart", date)}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item lg={0.5}></Grid>
                            <Grid item lg={5.5}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker name={'End Date'} label={'End Date'}  onChange={(date) => handleDateChange(id, "DurationEnd", date)} />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={3}>
                            <Grid item lg={11.5}>
                                <TextField
                                    label="Description"
                                    name="Description"
                                    value={Description}
                                    onChange={(e) => handleInputChange(id, e.target.name, e.target.value)}
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
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
};

export default ExperienceForm;
