'use client';

import React, { useState } from 'react';

type StepProps = {
  nextStep: () => void;
  formData: any;
  setFormData: (data: any) => void;
};

export default function Step1({ nextStep, formData, setFormData }: StepProps) {
  const [name, setName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');

  const handleNext = () => {
    setFormData({ ...formData, name, email, phone });
    nextStep();
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Personal Info</h1>
      <h2 className="text-lg mb-6">Please provide your name, email & phone number</h2>

      <label className="block mb-2 font-medium">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      />

      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      />

      <label className="block mb-2 font-medium">Phone</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number"
        className="w-full mb-6 p-2 border border-gray-300 rounded-lg"
      />

      <button
        onClick={handleNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Next
      </button>
    </div>
  );
}
