import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Card, CardContent, Box, Grid } from '@mui/material';
import LoginForm from './Login';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
    }}>
    <Container maxWidth="sm">
      <Card sx={{ boxShadow: 8, marginTop: 8 ,borderRadius:4,padding:2}}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            SignUp
          </Typography>
          <Box component="form" onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  fullWidth
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Repeat Password"
                  fullWidth
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <center>
            <Grid container spacing={1}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <center>
            <Box sx={{ marginTop: 2,borderRadius:5,maxWidth:150 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={handleLogin}
              >
                Login
              </Button>
             </Box>
             </center>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="center" gutterBottom>
            Already have an account?<Link to="/Login" underline="none">Login</Link>
          </Typography>
            </Grid>
          </Grid>
            </center>
            </Box>
        </CardContent>
      </Card>
    </Container>
    </Box>
  );
};
export default SignUp;