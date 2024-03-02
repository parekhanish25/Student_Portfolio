import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, IconButton, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const DynamicDropdownList = () => {
    const [dropdowns, setDropdowns] = useState([]);
    const [skills, setSkills] = useState([{ id: 1, selectedValue: '' }]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = async () => {
        try {
            const res = await axios.get('/SkillsList');
            if (res.data.status === 200) {
                setDropdowns(res.data.Data);
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

    const handleChange = (event, id) => {
        const { value } = event.target;
        const newSkills = skills.map(skill =>
            skill.id === id ? { ...skill, selectedValue: value } : skill
        );
        setSkills(newSkills);
    };

    const handleSubmit = async () => {
        const Skill = skills.map(skill => skill.selectedValue);
        const Data = { Email: '21it101@charusat.edu.in', Skill: Skill };
        try {
            const response = await axios.post('/AddSkills', Data);
            console.log('Data sent to backend:', response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    return (
        <Grid container spacing={2} marginTop={2}>
            <Grid item lg={5.5}></Grid>
            <Typography fontFamily={'Sora'} variant="h5" gutterBottom>
                My <span style={{ fontWeight: 'bold' }}>Skills</span>
            </Typography>
            {skills.map(({ id, selectedValue }) => (
                <Grid item xs={12} key={id}>

                    <Grid container justifyContent={'center'}>
                        <Grid item lg={2}>
                            <Typography fontFamily={'Sora'} gutterBottom>Dropdown {id}</Typography>
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
                            onChange={(event) => handleChange(event, id)}
                        >
                            {dropdowns.map((dropdown, index) => (
                                <MenuItem key={index} value={dropdown.name}>{dropdown.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Grid>
            ))}
            <Grid container marginTop={3}>
                <Grid item lg={5}></Grid>
                <Button onClick={handleAddDropdown} variant="outlined" color="primary">
                    Add Skills
                </Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
};

export default DynamicDropdownList;
