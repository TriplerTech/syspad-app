import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";

import TokenForm from "./Forms/TokenForm";
import LaunchpadForm from "./Forms/LaunchpadForm";
import AdditionalInfoForm from "./Forms/AdditionalInfoForm";
import Review from "./Review";
import SubmitSuccess from "./SubmitSuccess";

import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import useStyles from "./styles";

import "./index.scss";

const steps = ["Verify Token", "IDO Project Info", "Additional Info", "Finish"];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <TokenForm formField={formField} />;
    case 1:
      return <LaunchpadForm formField={formField} />;
    case 2:
      return <AdditionalInfoForm formField={formField} />;
    case 3:
      return <Review />;
    default:
      return <div>Not Found</div>;
  }
}

const Create = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <div className="main-area">
      <div className="container mt-50">
        <h3 className="text-white">Create Launchpad</h3>
        <React.Fragment>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel className="text-white">{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <SubmitSuccess />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="main-form" id={formId}>
                    {_renderStepContent(activeStep)}

                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={_handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      )}
                      <div className={classes.wrapper}>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          {isLastStep ? "Submit" : "Next"}
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Create;
