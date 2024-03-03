import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DetailsSection from './detail';
import EducationSection from './Education';
import { Card, Grid } from '@mui/material';
import ExperienceForm from './Exprience';
import AboutMeSection from './Aboutme';
import ProjectsSection from './Projects';
import { Checkmark } from 'react-checkmark'
import { Link } from 'react-router-dom';
import SoftSkillExam from './SoftSkill';
export default function Form() {
  const steps = [1, 2, 3, 4, 5, 6]
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <Grid container marginTop={'2rem'} marginBottom={'2rem'} className='Form'  >
      <Grid item md={2} xs={1} sm={2} lg={3}></Grid>
      <Grid className='Form' item md={8} xs={10} sm={8} lg={6}  >
        <Card sx={{ maxWidth: 'md', padding: '3rem', boxShadow: '0 8px 10px rgba(0, 0, 0, 0.1)' }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton onClick={handleStep(index)}>
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div style={{ marginTop: '1rem' }}>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <center>
                    <Checkmark size="xxLarge" />
                    Your Website Is Ready
                  </center>
                  <Button variant="contained"><Link to="">CLick to Visit Your</Link> </Button>
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {/* <Button onClick={handleReset}>Reset</Button> */}
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* {activeStep === 0 && <HeaderSection />} */}
                {activeStep === 0 && <DetailsSection submit={activeStep === 0 && completed[activeStep]} />}
                {activeStep === 1 && <EducationSection submit={activeStep === 1 && completed[activeStep]} />}
                {activeStep === 2 && <ExperienceForm submit={activeStep === 2 && completed[activeStep]} />}
                {activeStep === 3 && <AboutMeSection submit={activeStep === 3 && completed[activeStep]} />}
                {activeStep === 4 && <ProjectsSection submit={activeStep === 4 && completed[activeStep]} />}
                {activeStep === 5 && <SoftSkillExam submit={activeStep === 5 && completed[activeStep]} />}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button

                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    ((
                      <Button disabled={completed[activeStep]} onClick={handleComplete}>
                        {completedSteps() === (totalSteps() - 1)
                          ? 'Finish'
                          : 'Finish'}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}