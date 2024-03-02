import React,{forwardRef} from 'react';
import { Grid, Typography } from '@mui/material';
import image1 from '../../images/image222.jpg'; // Import your image here
import { IoLogOutOutline } from "react-icons/io5";


const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Im Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.',
    image: image1, // Use imported image
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Im Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.',
    image: image1,
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Im Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.',
    image: image1,
  },
];

const ProjectItem = ({ Element }) => {
  const { id, title, description, image } = Element;
  const isOdd = parseInt(id) % 2 !== 0;
  const projectNumber = (parseInt(id) ).toString().padStart(2, '0');

  return (
    <Grid container spacing={3} style={{ paddingLeft:'5vw', marginBottom: '20vh' }}>
      { isOdd?
      <Grid item xs={12} sm={6} order={isOdd ? 1 : 2}>
        <img
          src={image}
          alt={title}
          style={{
        // One-third of the page vertically
            maxWidth: '33vw', // Less than half of the page horizontally
            width: '33vw',
            height: '25vw',
            display: 'block',
            borderRadius:'10vw'
          }}
        />
      </Grid>
      : <Grid style={{paddingLeft:'8vw'}} item xs={12} sm={6} order={isOdd ? 1 : 2}>
      <img
        src={image}
        alt={title}
        style={{
      // One-third of the page vertically
          maxWidth: '33vw', // Less than half of the page horizontally
          width: '33vw',
          height: '25vw',
          display: 'block',
          borderRadius:'10vw'
        }}
      />
    </Grid>
}
      {isOdd?
      <Grid item xs={12} sm={6} order={isOdd ? 2 : 1} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}  >
      <Typography variant="h2" style={{ color: 'white',marginBottom:'1vh' }}>{projectNumber}</Typography>
        <Typography variant="h2" style={{ color: 'white',marginBottom:'3vh' }}>{title}</Typography>
        <Typography variant="body1" style={{ color: 'white',marginBottom:'3vh' }}>{description}</Typography>
        <IoLogOutOutline color='white' style={{ fontSize: '2rem' }} />


      </Grid>
:<Grid item xs={12} sm={6} order={isOdd ? 2 : 1}  >
      <Typography variant="h2" style={{ color: 'white',marginBottom:'1vh' }}>{projectNumber}</Typography>
        <Typography variant="h2" style={{ color: 'white',marginBottom:'3vh' }}>{title}</Typography>
        <Typography variant="body1" style={{ color: 'white',marginBottom:'3vh' }}>{description}</Typography>
        <IoLogOutOutline color='white' style={{ fontSize: '2rem' }} />
      </Grid>}
    </Grid>
  );
};

const ProjectPage = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ background: 'black', padding: '20px', height: 'auto', overflowY: 'auto' }}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
        My <span style={{fontWeight:'bolder'}}>Experience</span>
          <Typography  style={{ color: 'white', marginBottom: '8vh',fontSize:'5vh' }}> My <span style={{fontWeight:'bolder'}}>Projects</span></Typography>
        </Grid>
        {projects.map((project) => (
          <ProjectItem key={project.id} Element={project} />
        ))}
      </Grid>
    </div>
  );
});

export default ProjectPage;
