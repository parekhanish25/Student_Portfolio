import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Avatar } from '@mui/material';
import axios from 'axios';
const AboutMeSection = () => {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

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
        <Grid container spacing={3}>
            <Grid item xs={12}>
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
                <input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                        Upload Photo
                    </Button>
                </label>

            </Grid>
            <Button variant="contained" onClick={handleSubmit} component="span">
                Submit
            </Button>
        </Grid>
    );
};
export default AboutMeSection;