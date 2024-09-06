'use client';

import React from 'react';

type StepProps = {
  prevStep: () => void;  // Function to go back to the previous step
  formData: { email?: string; name?: string };  // Form data with optional fields
  handleSubmit: () => void;  // Function to handle form submission
};

export default function Step3({ prevStep, formData, handleSubmit }: StepProps) {
  return (
    <div>
      <h2>Step 3: Review Information</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
