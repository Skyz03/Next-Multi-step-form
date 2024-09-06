'use client';

import React, { useState } from 'react';

type StepProps = {
  nextStep: () => void;
  formData: any;
  setFormData: (data: any) => void;
};

export default function Step1({ nextStep, formData, setFormData }: StepProps) {
  const [name, setName] = useState(formData.name || '');

  const handleNext = () => {
    setFormData({ ...formData, name });
    nextStep();
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
