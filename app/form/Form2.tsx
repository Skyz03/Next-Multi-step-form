'use client';

import React, { useState } from 'react';

type StepProps = {
  nextStep: () => void;  // Function that advances to the next step
  prevStep: () => void;  // Function that goes back to the previous step
  formData: { email?: string };  // Form data, with email being optional at this step
  setFormData: (data: { email?: string }) => void;  // Function to update form data
};

export default function Step2({ nextStep, prevStep, formData, setFormData }: StepProps) {
  const [email, setEmail] = useState(formData.email || '');

  const handleNext = () => {
    setFormData({ ...formData, email });
    nextStep();
  };

  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
