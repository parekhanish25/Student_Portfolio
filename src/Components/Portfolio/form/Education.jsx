import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, IconButton, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicDropdownList = () => {
    const [dropdowns, setDropdowns] = useState([{ id: 1, selectedValue: '' }]);

    const handleAddDropdown = () => {
        const newDropdowns = [...dropdowns];
        const newId = dropdowns.length + 1;
        newDropdowns.push({ id: newId, selectedValue: '' });
        setDropdowns(newDropdowns);
    };

    const handleDeleteDropdown = (id) => {
        const newDropdowns = dropdowns.filter(dropdown => dropdown.id !== id);
        setDropdowns(newDropdowns);
    };

    const handleChange = (event, id) => {
        const { value } = event.target;
        const newDropdowns = dropdowns.map(dropdown =>
            dropdown.id === id ? { ...dropdown, selectedValue: value } : dropdown
        );
        setDropdowns(newDropdowns);
    };

    return (
        <Grid container spacing={2} marginTop={2}>
            <Grid item lg={5.5}></Grid>
            <Typography fontFamily={'Sora'} variant="h5" gutterBottom>
                My <span style={{ fontWeight: 'bold' }}>Skills</span>
            </Typography>
            {dropdowns.map(({ id, selectedValue }) => (
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
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
            ))}
            <Grid container marginTop={3}>
                <Grid item lg={5}></Grid>
                <Button onClick={handleAddDropdown} variant="outlined" color="primary">
                    Add Skills
                </Button>
            </Grid>
        </Grid>
    );
};

export default DynamicDropdownList;
