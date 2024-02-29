import React from 'react';
import { Typography, TextField, Grid } from '@mui/material';
const DetailsSection = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={4}></Grid>
                <Typography fontFamily={'Sora'} variant="h5" gutterBottom>
                    Header <span style={{ fontWeight: 'bold' }}>Section</span>
                </Typography>
                <Grid container>
                    <Grid item lg={5.5}>
                        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item lg={0.5}></Grid>
                    <Grid item lg={5.5}>
                        <TextField label="Role" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={11.5}>
                        <TextField label="Description" multiline minRows={3} variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
                <Grid item xs={2}><Typography fontFamily={'Sora'} variant="h6" >
                    Links
                </Typography></Grid>
                <Grid container>
                    <Grid item lg={5.5}>
                        <TextField label="Facebook" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item lg={0.5}></Grid>
                    <Grid item lg={5.5}>
                        <TextField label="Instagram" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={5.5}>
                        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item lg={0.5}></Grid>
                    <Grid item lg={5.5}>
                        <TextField label="Github" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
export default DetailsSection;