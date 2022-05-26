import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepOne from "./StepOne/StepOne";
import StepTow from "./StepTow/StepTow";
import StepThree from "./StepThree/StepThree";
import "./CreatProject.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTow />;
    case 2:
      return <StepThree />;
    default:
      return "Unknown stepIndex";
  }
}

const CreatProject = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="stepescon ">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel style={{ transform: "scale(1.4)" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div className="qwqwq">
              <Typography className={classes.instructions}>
                {/* ------------------------------- */}
                {/*** Animation All steps completed ***/}
                {/* ------------------------------- */}
                <div style={{ fontSize: "220%" }}>All steps completed</div>
              </Typography>

              <Button onClick={handleReset} style={{ fontSize: "220%" }}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className="iputesstepone aqw">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatProject;
