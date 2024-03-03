import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, IconButton, Grid, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const SoftSkillExam = () => {
    const [examDropdown, setExamDropdown] = useState([]);
    const [skillDropdown, setSkillDropdown] = useState([]);
    const [skills, setSkills] = useState([{ id: 1, selectedValue: '' }]);
    const [exams, setExams] = useState([{ id: 1, name: '', score: '' }]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = async () => {
        try {
            const examRes = await axios.get('/Exam');
            if (examRes.data.status === 200) {
                setExamDropdown(examRes.data.Data);
            }

            const skillRes = await axios.get('/SoftSkill');
            if (skillRes.data.status === 200) {
                setSkillDropdown(skillRes.data.Data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleAddDropdown = () => {
        const newSkills = [...skills];
        const newId = skills.length + 1;
        newSkills.push({ id: newId, selectedValue: '' });
        setSkills(newSkills);
    };

    const handleDeleteDropdown = (id) => {
        const newSkills = skills.filter(skill => skill.id !== id);
        setSkills(newSkills);
    };

    const handleChangeSkill = (event, id) => {
        const { value } = event.target;
        const newSkills = skills.map(skill =>
            skill.id === id ? { ...skill, selectedValue: value } : skill
        );
        setSkills(newSkills);
    };

    const handleAddExam = () => {
        const newExams = [...exams];
        const newId = exams.length + 1;
        newExams.push({ id: newId, name: '', score: '' });
        setExams(newExams);
    };

    const handleDeleteExam = (id) => {
        const newExams = exams.filter(exam => exam.id !== id);
        setExams(newExams);
    };

    const handleChangeExamName = (event, id) => {
        const { value } = event.target;
        const newExams = exams.map(exam =>
            exam.id === id ? { ...exam, name: value } : exam
        );
        setExams(newExams);
    };

    const handleChangeExamScore = (event, id) => {
        const { value } = event.target;
        const newExams = exams.map(exam =>
            exam.id === id ? { ...exam, score: value } : exam
        );
        setExams(newExams);
    };

    const handleSubmit = async () => {
        const Skill = skills.map(skill => skill.selectedValue); 
        const ExamData = exams.map(exam => ({ Email: '21it101@charusat.edu.in', Name: exam.name, Score: exam.score }));
        const Data = { Email: '21it101@charusat.edu.in', Skill: Skill, ExamData: ExamData };
        try {
            const response = await axios.post('/AddSoftSkills', Data);
            console.log('Data sent to backend:', response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    return (
        <Grid container spacing={2} marginTop={2}>
            <Grid item lg={4}></Grid>
            <Typography fontFamily={'Sora'} variant="h5" gutterBottom>
                My <span style={{ fontWeight: 'bold' }}>SoftSkills/Exams</span>
            </Typography>
            {skills.map(({ id, selectedValue }) => (
                <Grid item xs={12} key={id}>
                    <Grid container justifyContent={'center'}>
                        <Grid item lg={2}>
                            <Typography fontFamily={'Sora'} gutterBottom>Soft Skill {id}</Typography>
                        </Grid>
                        <Grid item lg={9}></Grid>
                        <Grid item lg={1}>
                            <IconButton gutterBottom onClick={() => handleDeleteDropdown(id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <FormControl fullWidth>
                        <Select
                            value={selectedValue}
                            onChange={(event) => handleChangeSkill(event, id)}
                        >
                            {skillDropdown.map((dropdown, index) => (
                                <MenuItem key={index} value={dropdown.name}>{dropdown.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            ))}
            {exams.map(({ id, name, score }) => (
                <Grid item xs={12} key={id}>
                    <Grid container justifyContent={'center'}>
                        <Grid item lg={2}>
                            <Typography fontFamily={'Sora'} gutterBottom>Exam {id}</Typography>
                        </Grid>
                        <Grid item lg={9}></Grid>
                        <Grid item lg={1}>
                            <IconButton gutterBottom onClick={() => handleDeleteExam(id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <FormControl fullWidth>
                        <Select
                            value={name}
                            onChange={(event) => handleChangeExamName(event, id)}
                            inputProps={{
                                name: `exam-name-${id}`,
                                id: `exam-name-${id}`,
                            }}
                        >
                            {examDropdown.map((dropdown, index) => (
                                <MenuItem key={index} value={dropdown.name}>{dropdown.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Score"
                        value={score}
                        onChange={(event) => handleChangeExamScore(event, id)}
                        fullWidth
                    />
                </Grid>
            ))}
            <Grid container spacing={2} marginTop={3}>
                <Grid item xs={4}></Grid>
                <Grid xs={3}>
                    <Button onClick={handleAddDropdown} variant="outlined" color="primary">
                        Add Soft Skill
                    </Button>
                </Grid>
                <Grid xs={3}>
                    <Button onClick={handleAddExam} variant="outlined" color="primary">
                        Add Exam
                    </Button>
                </Grid>
                <Grid xs={2}>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SoftSkillExam;
