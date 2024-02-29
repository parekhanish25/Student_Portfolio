import React from 'react';
import {Typography} from '@mui/material';
const HeaderSection = () => {
    return (
      <>
        <Typography variant="h4" gutterBottom>
          Welcome to the Form!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please fill out the following sections.
        </Typography>
      </>
    );
  };
export default HeaderSection;