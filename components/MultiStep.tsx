'use client';

import React, { useState } from 'react';
import Step1 from '../app/form/Form1';
import Step2 from '../app/form/Form2';
import Step3 from '../app/form/Form3';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Submit formData here to an API or do final validation
    console.log(formData);
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
    case 3:
      return <Step3 prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />;
    default:
      return null;
  }
};

export default MultiStepForm;
