'use client';

import React from 'react';
import Step1 from '../app/form/Form1';
import Step2 from '../app/form/Form2';
import Step3 from '../app/form/Form3';
import Step4 from '../app/form/Form4';

interface MultiStepFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ currentStep, setCurrentStep }) => {
  const [formData, setFormData] = React.useState({
    plan: undefined,
    billing: 'monthly',
    planPrice: 0,
    addOns: [],
  }); // Store form data across steps

  // Function to move to the next step
  const nextStep = () => setCurrentStep(currentStep + 1);

  // Function to move to the previous step
  const prevStep = () => setCurrentStep(currentStep - 1);

  // Function to handle final form submission
  const handleSubmit = () => {
    // Perform any final validation or submit formData to an API here
    console.log(formData); // Log form data or handle API submission
  };

  // Determine which step to display based on the currentStep
  let stepContent;
  switch (currentStep) {
    case 1:
      stepContent = (
        <Step1
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    case 2:
      stepContent = (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    case 3:
      stepContent = (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    case 4:
      stepContent = (
        <Step4
          prevStep={prevStep}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      );
      break;
    default:
      stepContent = null; // Render nothing if step is invalid
  }

  return <div>{stepContent}</div>;
};

export default MultiStepForm;
