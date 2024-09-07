'use client';

import React, { useState } from 'react';
import Step1 from '../app/form/Form1';
import Step2 from '../app/form/Form2';
import Step3 from '../app/form/Form3';
import Step4 from '../app/form/Form4';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Perform any final validation or submit formData to an API here
    console.log(formData);  // Log form data or handle API submission
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
    case 4:
      return <Step4 prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />;
    default:
      return null;
  }
};

export default MultiStepForm;
