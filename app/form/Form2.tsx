'use client';

import React, { useState } from 'react';

// Define a type for the plan names
type PlanType = 'Arcade' | 'Advanced' | 'Pro';

// Define the StepProps type
type StepProps = {
  nextStep: () => void; // Function to move to the next step
  prevStep: () => void; // Function to move to the previous step
  formData: { plan?: PlanType; billing?: 'monthly' | 'yearly'; planPrice?: number }; // Current form data
  setFormData: (data: { plan?: PlanType; billing?: 'monthly' | 'yearly'; planPrice?: number }) => void; // Function to update form data
};

// Define pricing plans with type
const monthlyPrices: Record<PlanType, number> = { Arcade: 9, Advanced: 12, Pro: 15 };
const yearlyPrices: Record<PlanType, number> = { Arcade: 90, Advanced: 120, Pro: 150 };

export default function Step2({ nextStep, prevStep, formData, setFormData }: StepProps) {
  // Local state for plan, billing, and price
  const [billing, setBilling] = useState<'monthly' | 'yearly'>(formData.billing || 'monthly');
  const [plan, setPlan] = useState<PlanType>(formData.plan || 'Arcade');
  const [price, setPrice] = useState<number>(getPrice(plan, billing));

  // Get price based on plan and billing
  function getPrice(plan: PlanType, billing: 'monthly' | 'yearly'): number {
    return billing === 'monthly' ? monthlyPrices[plan] : yearlyPrices[plan];
  }

  // Update plan and price
  const handlePlanChange = (newPlan: PlanType) => {
    setPlan(newPlan);
    setPrice(getPrice(newPlan, billing));
  };

  // Update form data and proceed to the next step
  const handleNext = () => {
    setFormData({ ...formData, plan, billing, planPrice: price }); // Merge current form data with step-specific values
    nextStep(); // Move to the next step
  };

  // Handle changes in billing frequency
  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBilling = e.target.value as 'monthly' | 'yearly';
    setBilling(newBilling);
    setPrice(getPrice(plan, newBilling)); // Update price based on new billing frequency
  };

  // Determine the prices to display based on selected billing frequency
  const prices = billing === 'monthly' ? monthlyPrices : yearlyPrices;

  return (
    <div className="p-4">
      {/* Header for the plan selection */}
      <h2 className="text-2xl font-bold mb-2">Select Your Plan</h2>
      <h3 className="text-lg mb-4">You have the option of monthly & yearly billing</h3>

      {/* Plan selection options */}
      <div className="flex gap-4 mb-6">
        {/* Plan option for Arcade */}
        <div
          className={`border ${plan === 'Arcade' ? 'border-blue-500' : 'border-gray-300'} p-4 rounded cursor-pointer`}
          onClick={() => handlePlanChange('Arcade')}
        >
          <img src="/assets/images/icon-arcade.svg" alt="Arcade Icon" className="w-10 h-10" />
          <h4 className="text-xl font-semibold mt-2">Arcade</h4>
          <p className="text-gray-500">${prices.Arcade}/mo</p>
        </div>

        {/* Plan option for Advanced */}
        <div
          className={`border ${plan === 'Advanced' ? 'border-blue-500' : 'border-gray-300'} p-4 rounded cursor-pointer`}
          onClick={() => handlePlanChange('Advanced')}
        >
          <img src="/assets/images/icon-advanced.svg" alt="Advanced Icon" className="w-10 h-10" />
          <h4 className="text-xl font-semibold mt-2">Advanced</h4>
          <p className="text-gray-500">${prices.Advanced}/mo</p>
        </div>

        {/* Plan option for Pro */}
        <div
          className={`border ${plan === 'Pro' ? 'border-blue-500' : 'border-gray-300'} p-4 rounded cursor-pointer`}
          onClick={() => handlePlanChange('Pro')}
        >
          <img src="/assets/images/icon-pro.svg" alt="Pro Icon" className="w-10 h-10" /> 
          <h4 className="text-xl font-semibold mt-2">Pro</h4>
          <p className="text-gray-500">${prices.Pro}/mo</p>
        </div>
      </div>

      {/* Billing frequency options */}
      <div className="mb-6">
        <label className="mr-4 flex items-center">
          <input
            type="radio"
            name="billing"
            value="monthly"
            checked={billing === 'monthly'}
            onChange={handleBillingChange}
            className="mr-2"
          />
          Monthly
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="billing"
            value="yearly"
            checked={billing === 'yearly'}
            onChange={handleBillingChange}
            className="mr-2"
          />
          Yearly
        </label>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
