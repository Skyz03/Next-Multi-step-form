'use client';

import React, { useState } from 'react';

type StepProps = {
  prevStep: () => void;  // Function to go back to the previous step
  formData: { addOns?: { name: string; price: number }[] };  // Form data to track selected add-ons
  setFormData: (data: { addOns?: { name: string; price: number }[] }) => void;  // Function to update form data
  nextStep: () => void;  // Function to go to the next step
};

export default function Step3({ prevStep, formData, setFormData, nextStep }: StepProps) {
  // Define the available add-ons and their prices
  const addOnOptions: { [key: string]: number } = {
    'Online service': 1,
    'Larger storage': 2,
    'Customizable profile': 2
  };

  // Local state for selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(
    formData.addOns ? formData.addOns.map(addOn => addOn.name) : []
  );

  // Toggle the selection of an add-on
  const handleAddOnChange = (addOn: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOn)
        ? prev.filter((item) => item !== addOn)  // Remove add-on if already selected
        : [...prev, addOn]  // Add add-on if not selected
    );
  };

  // Update form data with selected add-ons and proceed to the next step
  const handleNext = () => {
    // Map selected add-ons to include their prices
    const selectedAddOnsWithPrices = selectedAddOns.map(name => ({
      name,
      price: addOnOptions[name as keyof typeof addOnOptions]  // Type assertion
    }));
    setFormData({ ...formData, addOns: selectedAddOnsWithPrices });  // Save selected add-ons to form data
    nextStep();  // Move to the next step
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Header for add-ons selection */}
      <h2 className="text-2xl font-bold mb-4">Pick add-ons</h2>
      <h3 className="text-lg mb-6">Add-ons help enhance your gaming experience</h3>

      {/* Add-ons selection options */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Add-on for Online service */}
        <div
          className={`border p-4 rounded-lg cursor-pointer ${selectedAddOns.includes('Online service') ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => handleAddOnChange('Online service')}
        >
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedAddOns.includes('Online service')} // Show as checked if selected
              onChange={() => handleAddOnChange('Online service')} // Toggle selection
              className="mr-3"
            />
            <div>
              <h4 className="text-xl font-semibold">Online service</h4>
              <p className="text-gray-500">Access to multiplayer games</p>
              <p className="text-blue-500 font-semibold">+ $1/mo</p>
            </div>
          </label>
        </div>

        {/* Add-on for Larger storage */}
        <div
          className={`border p-4 rounded-lg cursor-pointer ${selectedAddOns.includes('Larger storage') ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => handleAddOnChange('Larger storage')}
        >
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedAddOns.includes('Larger storage')} // Show as checked if selected
              onChange={() => handleAddOnChange('Larger storage')} // Toggle selection
              className="mr-3"
            />
            <div>
              <h4 className="text-xl font-semibold">Larger storage</h4>
              <p className="text-gray-500">Extra 1TB of cloud save</p>
              <p className="text-blue-500 font-semibold">+ $2/mo</p>
            </div>
          </label>
        </div>

        {/* Add-on for Customizable profile */}
        <div
          className={`border p-4 rounded-lg cursor-pointer ${selectedAddOns.includes('Customizable profile') ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => handleAddOnChange('Customizable profile')}
        >
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedAddOns.includes('Customizable profile')} // Show as checked if selected
              onChange={() => handleAddOnChange('Customizable profile')} // Toggle selection
              className="mr-3"
            />
            <div>
              <h4 className="text-xl font-semibold">Customizable profile</h4>
              <p className="text-gray-500">Custom theme on your profile</p>
              <p className="text-blue-500 font-semibold">+ $2/mo</p>
            </div>
          </label>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
