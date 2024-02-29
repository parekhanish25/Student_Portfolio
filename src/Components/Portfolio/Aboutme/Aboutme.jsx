import React from 'react';
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
const AboutMe = () => {
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
    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <center style={{ marginBottom: '2rem' }}>
                <Typography variant="h4" fontFamily={'Sora'}>About <span style={{ fontWeight: 'bolder' }}>Me</span></Typography>
            </center>
            <Grid container marginTop={'1vh'}>
                <Grid item md={1} lg={1}></Grid>
                {!isMobileView && < Grid item xs={12} sm={4} md={2} lg={4} marginBottom={10} marginTop={3} container justifyContent="center" >
                   
                        <img src={hero} width={200} height={350} alt='Image'></img>
                </Grid >}
                <Grid item xs={12} sm={8} md={9} lg={6} >
                    <Grid container>
                        <Grid item xs={1} sm={1} md={1} lg={2}></Grid>
                        <Grid item xs={9} sm={10} md={10} lg={10}>
                            <Typography fontFamily={'Sora'} color={'text.main'} paragraph textAlign={'justify'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ultrices turpis Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa nisi labore sint, est dicta odio hic. Excepturi, quos sapiente, recusandae, hic maiores magnam sint esse voluptas consequatur inventore autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi, porro doloribus possimus ex odit voluptatum aut beatae debitis perspiciatis ratione quia, cum magnam optio facilis esse omnis reprehenderit qui.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni beatae voluptatibus sit aspernatur facere, sapiente nesciunt expedita autem? Facilis rerum minima, quas architecto consequatur nulla recusandae veritatis quidem assumenda quos?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ad minus accusamus facilis repellat repudiandae numquam mollitia culpa, ducimus doloribus, harum earum eaque nemo minima ex dolor rem, officiis deleniti.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid >
            </Grid >
        </>
    );
};
export default AboutMe;