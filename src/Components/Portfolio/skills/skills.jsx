import { Grid, IconButton, Typography } from "@mui/material";
import { IoLogoGithub } from "react-icons/io5";
import React from "react";

function Skills() {
    const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const [GridSize, setGridSize] = React.useState(1);
    const handleResize = () => {
        setGridSize(window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 3 : 4);
    };
    const handleHover = (event) => {
        event.currentTarget.style.backgroundColor = 'black';
        event.currentTarget.querySelector('i').style.filter = 'invert(100%)';
        event.currentTarget.querySelector('p').style.filter = 'invert(100%)';
    };

    const handleLeave = (event) => {
        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.querySelector('i').style.filter = 'none';
        event.currentTarget.querySelector('p').style.filter = 'none';

    };
    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // Function to chunk the array into groups of five elements
    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Chunk the val array into groups of five elements
    const chunkedVal = chunkArray(val, GridSize);
    return (
        <>
            <center style={{ marginBottom: '4rem' }}>
                <Typography variant="h4" fontFamily={'Sora'}>My <span style={{ fontWeight: 'bolder' }}>Skills</span></Typography>
            </center>
            {chunkedVal.map((chunk, index) => (
                <Grid key={index} container spacing={2} marginBottom={8} display="flex" justifyContent="space-around">
                    <Grid item xs={1} md={1}></Grid>
                    {chunk.map((element, index) => (
                        <Grid item xs={6} sm={3} md={2} lg={2} key={index} sx={{ borderRadius: '0.5rem', padding: '0.3rem', border: '2px solid black' }} onMouseOver={handleHover} onMouseOut={handleLeave}>
                            <center>
                                <i class="devicon-cplusplus-plain" style={{ color: 'black', fontSize: '6rem' }}></i>
                                <Typography style={{ '.&hover': { color: 'white' } }} fontFamily={'Sora'} ><p style={{ color: "black" }}>C++</p></Typography>
                            </center>
                        </Grid>
                    ))}
                    <Grid item xs={1} md={1}></Grid>
                </Grid>
            ))}
        </>
    );
}

export default Skills;
