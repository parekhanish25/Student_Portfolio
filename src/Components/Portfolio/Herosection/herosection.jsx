import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { IoMail } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import hero from '../../../images/hero.jpg';
import { Container } from '@mui/material';
import axios from 'axios';
const HeroSection = ({ id }) => {
    const [Data, setData] = useState([]);
    const handleHover = (event) => {
        event.currentTarget.style.backgroundColor = 'black';
        event.currentTarget.querySelector('svg').style.filter = 'invert(100%)';
    };

    const handleLeave = (event) => {
        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.querySelector('svg').style.filter = 'none';
    };
    const [isMobileView, setIsMobileView] = React.useState(false);

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 700);
    };
    useEffect(() => {
        handleFetch();
    }, []);
    const handleFetch = async () => {
        try {
            const res = await axios.get(`/GetHeaderSection/${id}`);
            if (res.data.status === 200) {

                setData(res.data.Data);
            }
        } catch (e) {
            console.log(e);
        }
    }
    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Grid container marginTop={'12vh'}>
            {isMobileView && < Grid item xs={12} md={4} marginBottom={10} container justifyContent="center" >
                <img src={Data.ProfilePic} width={200} alt='Image' />
            </Grid >}
            <Grid item lg={1}></Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} >
                {/* Empty grid item for left space */}

                <Grid container>
                    {/* Empty grid item for left space */}
                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                    {/* Content grid items */}
                    <Grid item xs={11} sm={6} md={10} lg={6}>
                        <Typography fontFamily={'Sora'} variant="h4" gutterBottom>
                            Hello, I am <span style={{ fontWeight: 'bolder' }} >{Data.Name}</span>
                        </Typography>
                        <Typography fontFamily={'Sora'} variant="subtitle1" gutterBottom>
                            {Data.Role}
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Grid item xs={12} md={6}> */}
                <Grid container>
                    {/* Empty grid item for left space */}
                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                    {/* Content grid items */}
                    <Grid item xs={9} sm={11} md={10} lg={6}>
                        <Typography fontFamily={'Sora'} color={'text.main'} textAlign={'justify'} paragraph>
                            {Data.Description}
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ultrices turpis. */}
                        </Typography>
                    </Grid>
                </Grid>
                {/* </Grid> */}
                {/* Icons */}
                <br />
                <br />
                <br />
                <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'space-around' }}  >
                    <Grid></Grid>
                    <Grid item xs={2} md={2} sx={{ borderRadius: '0.5rem', padding: '0.3rem', border: '2px solid black' }} onMouseOver={handleHover} onMouseOut={handleLeave}>
                        <center>
                            <IconButton>
                                <IoMail color='black' />
                            </IconButton>
                        </center>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{ borderRadius: '0.5rem', padding: '0.3rem', border: '2px solid black' }} onMouseOver={handleHover} onMouseOut={handleLeave}>
                        <center>
                            <IconButton>
                                <IoLogoLinkedin color='black' />
                            </IconButton>
                        </center>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{ borderRadius: '0.5rem', padding: '0.3rem', border: '2px solid black' }} onMouseOver={handleHover} onMouseOut={handleLeave}>
                        <center>
                            <IconButton>
                                <IoLogoInstagram color='black' />
                            </IconButton>
                        </center>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{ borderRadius: '0.5rem', padding: '0.3rem', border: '2px solid black' }} onMouseOver={handleHover} onMouseOut={handleLeave}>
                        <center>
                            <IconButton>
                                <IoLogoGithub color='black' />
                            </IconButton>
                        </center>
                    </Grid>
                </Grid>
            </Grid>
            {/* Column 2: Photo */}
            {!isMobileView && < Grid item xs={12} sm={6} md={6} lg={4} marginBottom={10} container justifyContent="center" >
                <img src={Data.ProfilePic} width={200} alt='Image'></img>
            </Grid >}
        </Grid>
    );
};
export default HeroSection;