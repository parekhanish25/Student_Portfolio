import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Typography, Avatar, Card, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { GridView } from '@mui/icons-material';
const AboutMeSection = () => {
    const [description, setDescription] = useState('');
    const [Dropdown, setDropdown] = useState([]);
    const [image, setImage] = useState(null);
    const [Branch, setBranch] = useState('');
    const [CGPA, setCGPA] = useState(0.0);
    useEffect(() => {
        handleFetch();
    }, []);
    const handleFetch = async () => {
        try {
            const res = await axios.get('/branch');
            if (res.data.status === 200) {
                setDropdown(res.data.Data);
            }
        } catch (e) {
            console.log(e);
        }
    }
    const handleChange = (event) => {
        const { value } = event.target;
        setBranch(value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async () => {
        const Data = { Image: image, Description: description, Email: '21it101@charusat.edu.in' };
        try {
            const response = await axios.post('/AddAboutme', Data);
            console.log('Data sent to backend:', response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    }
    return (
        <Grid container spacing={1}>

            <Grid item xs={5}>
            </Grid>
            <Grid item xs={7}>
                <Typography variant="h4">About Me</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Description"
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </Grid>
            <Grid item xs={12}>
            <Grid container>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <Select
                            value={Branch}
                            name='Branch'
                            onChange={(event) => handleChange(event)}
                        >
                            {Dropdown.map((dropdown, index) => (
                                <MenuItem key={index} value={dropdown.name}>{dropdown.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <TextField
                        label="CGPA"
                        variant="outlined"
                        fullWidth
                        value={CGPA}
                        onChange={handleDescriptionChange}
                    />
                </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={2}>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </Grid>
                <Grid item  >
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span">
                            Upload Photo
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleSubmit} component="span">
                        Submit
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1} >
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                    <Card style={{ border: '1px solid black' }}>
                        {image && <img src={image} alt="Project" style={{ maxWidth: '100px', display: 'block', marginTop: '10px' }} />}
                    </Card>
                </Grid>

            </Grid>
        </Grid>
    );
};
export default AboutMeSection;