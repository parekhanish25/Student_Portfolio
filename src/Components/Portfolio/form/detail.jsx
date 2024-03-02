import React, { useEffect, useState } from 'react';
import { Typography, TextField, Grid, Button } from '@mui/material';
import axios from 'axios';
const DetailsSection = ({ submit }) => {
    const [Form, setForm] = useState({
        Name: '',
        Role: '',
        Description: '',
        Leetcode: '',
        Codechef: '',
        Github: '',
        Email: '21it101@charusat.edu.in',
        Linkedin: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }
    useEffect(() => {

    }, [])
    const handleSubmit = async () => {
        try {
            const res = await axios.post('/AddBasicInfo', Form);
            if (res.data.status == 200) {
                console.log(res.data);
            }
        } catch (e) {

        }
    }

    return (
        <>
            <Grid container>
                <Grid item lg={4}></Grid>
                <Typography fontFamily={'Sora'} variant="h5" gutterBottom>
                    Header <span style={{ fontWeight: 'bold' }}>Section</span>
                </Typography>
                <Grid container>
                    <Grid item lg={5.5}>
                        <TextField onChange={handleChange} value={Form.Name} name='Name' label="Name" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item lg={0.5}></Grid>
                    <Grid item lg={5.5}>
                        <TextField onChange={handleChange} value={Form.Role} name='Role' label="Role" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={11.5}>
                        <TextField onChange={handleChange} value={Form.Description} name='Description' label="Description" multiline minRows={3} variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
                <Grid item xs={2}><Typography fontFamily={'Sora'} variant="h6" >
                    Links
                </Typography></Grid>
                <Grid container>
                    <Grid item lg={5.5}>
                        <TextField onChange={handleChange} value={Form.Leetcode} name='Leetcode' label="Leetcode" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item lg={0.5}></Grid>
                    <Grid item lg={5.5}>
                        <TextField onChange={handleChange} value={Form.Codechef} name='Codechef' label="Codechef" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={5.5}>
                        <TextField onChange={handleChange} value={Form.Linkedin} name='Linkedin' label="Linkedin" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item lg={0.5}></Grid>
                    <Grid item lg={5.5}>
                        <TextField onChange={handleChange} value={Form.Github} name='Github' label="Github" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
                <Button disabled={submit} onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>

        </>
    );
};
export default DetailsSection;