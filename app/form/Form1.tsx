'use client';

import React, { useState } from 'react';

type StepProps = {
  nextStep: () => void; // Function to move to the next step
  formData: any; // Current form data
  setFormData: (data: any) => void; // Function to update form data
};

export default function Step1({ nextStep, formData, setFormData }: StepProps) {
  // Local state for each input field
  const [name, setName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');

  // Handle moving to the next step and saving form data
  const handleNext = () => {
    setFormData({ ...formData, name, email, phone }); // Update form data with current step's values
    nextStep(); // Move to the next step
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Header for the step */}
      <h1 className="text-2xl font-bold mb-4">Personal Info</h1>
      <h2 className="text-lg mb-6">Please provide your name, email & phone number</h2>

      {/* Input for Name */}
      <label className="block mb-2 font-medium">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update local state on input change
        placeholder="Enter your name"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      />

      {/* Input for Email */}
      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update local state on input change
        placeholder="Enter your email"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      />

      {/* Input for Phone */}
      <label className="block mb-2 font-medium">Phone</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} // Update local state on input change
        placeholder="Enter your phone number"
        className="w-full mb-6 p-2 border border-gray-300 rounded-lg"
      />

      {/* Button to proceed to the next step */}
      <button
        onClick={handleNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Next
      </button>
    </div>
  );
}
