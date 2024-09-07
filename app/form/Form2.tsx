'use client';

import React, { useState } from 'react';

type StepProps = {
  nextStep: () => void;
  prevStep: () => void;
  formData: { plan?: string; billing?: 'monthly' | 'yearly' };
  setFormData: (data: { plan?: string; billing?: 'monthly' | 'yearly' }) => void;
};

export default function Step2({ nextStep, prevStep, formData, setFormData }: StepProps) {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>(formData.billing || 'monthly');
  const [plan, setPlan] = useState(formData.plan || 'Arcade');

  const handleNext = () => {
    setFormData({ ...formData, plan, billing });
    nextStep();
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBilling(e.target.value as 'monthly' | 'yearly');
  };

  const monthlyPrices = { Arcade: '$9/mo', Advanced: '$12/mo', Pro: '$15/mo' };
  const yearlyPrices = { Arcade: '$90/yr', Advanced: '$120/yr', Pro: '$150/yr' };

  const prices = billing === 'monthly' ? monthlyPrices : yearlyPrices;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Select Your Plan</h2>
      <h3 className="text-lg mb-4">You have the option of monthly & yearly billing</h3>

      <div className="flex gap-4 mb-6">
        <div
          className={`border ${plan === 'Arcade' ? 'border-blue-500' : 'border-gray-300'} p-4 rounded cursor-pointer`}
          onClick={() => setPlan('Arcade')}
        >
          <span role="img" aria-label="Arcade Icon" className="text-2xl">🎮</span>
          <h4 className="text-xl font-semibold mt-2">Arcade</h4>
          <p className="text-gray-500">{prices.Arcade}</p>
        </div>

        <div
          className={`border ${plan === 'Advanced' ? 'border-blue-500' : 'border-gray-300'} p-4 rounded cursor-pointer`}
          onClick={() => setPlan('Advanced')}
        >
          <span role="img" aria-label="Advanced Icon" className="text-2xl">🚀</span>
          <h4 className="text-xl font-semibold mt-2">Advanced</h4>
          <p className="text-gray-500">{prices.Advanced}</p>
        </div>

        <div
          className={`border ${plan === 'Pro' ? 'border-blue-500' : 'border-gray-300'} p-4 rounded cursor-pointer`}
          onClick={() => setPlan('Pro')}
        >
          <span role="img" aria-label="Pro Icon" className="text-2xl">💼</span>
          <h4 className="text-xl font-semibold mt-2">Pro</h4>
          <p className="text-gray-500">{prices.Pro}</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="mr-4">
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
        <label>
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

      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Back</button>
        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}
