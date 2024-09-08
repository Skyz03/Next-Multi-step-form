'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

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
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      plan: formData.plan || 'Arcade',
      billing: formData.billing || 'monthly',
    }
  });

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

  // Handle changes in billing frequency with InputSwitch
  const handleBillingChange = (checked: boolean) => {
    const newBilling = checked ? 'yearly' : 'monthly';
    setBilling(newBilling);
    setValue('billing', newBilling); // Update react-hook-form state
    setPrice(getPrice(plan, newBilling));
  };

  // Handle form submission
  const onSubmit = (data: { plan: PlanType; billing: 'monthly' | 'yearly' }) => {
    setFormData({ ...formData, plan: data.plan, billing: data.billing, planPrice: price });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-md rounded-lg">
      {/* Header for the plan selection */}
      <h2 className="text-2xl font-bold mb-2 text-marine_blue">Select Your Plan</h2>
      <h3 className="text-lg mb-4 text-cool_gray">You have the option of monthly & yearly billing</h3>

      {/* Plan selection options */}
      <div className="flex gap-4 mb-6">
        {/* Plan option for Arcade */}
        <Card
          className={`cursor-pointer p-4 rounded ${plan === 'Arcade' ? 'border-2 border-marine_blue' : 'border'}`}
          onClick={() => handlePlanChange('Arcade')}
        >
          <img src="/assets/images/icon-arcade.svg" alt="Arcade Icon" className="w-10 h-10" />
          <h4 className="text-xl font-semibold mt-2 text-marine_blue">Arcade</h4>
          <p className="text-cool_gray">${billing === 'monthly' ? monthlyPrices.Arcade : yearlyPrices.Arcade}/mo</p>
        </Card>

        {/* Plan option for Advanced */}
        <Card
          className={`cursor-pointer p-4 rounded ${plan === 'Advanced' ? 'border-2 border-marine_blue' : 'border'}`}
          onClick={() => handlePlanChange('Advanced')}
        >
          <img src="/assets/images/icon-advanced.svg" alt="Advanced Icon" className="w-10 h-10" />
          <h4 className="text-xl font-semibold mt-2 text-marine_blue">Advanced</h4>
          <p className="text-cool_gray">${billing === 'monthly' ? monthlyPrices.Advanced : yearlyPrices.Advanced}/mo</p>
        </Card>

        {/* Plan option for Pro */}
        <Card
          className={`cursor-pointer p-4 rounded ${plan === 'Pro' ? 'border-2 border-marine_blue' : 'border'}`}
          onClick={() => handlePlanChange('Pro')}
        >
          <img src="/assets/images/icon-pro.svg" alt="Pro Icon" className="w-10 h-10" />
          <h4 className="text-xl font-semibold mt-2 text-marine_blue">Pro</h4>
          <p className="text-cool_gray">${billing === 'monthly' ? monthlyPrices.Pro : yearlyPrices.Pro}/mo</p>
        </Card>
      </div>

      {/* Billing frequency options using InputSwitch */}
      <div className="mb-6 flex items-center">
        <label className="mr-4 text-marine_blue">Monthly</label>
        <InputSwitch
          checked={billing === 'yearly'}
          onChange={(e) => handleBillingChange(e.value)}
        />
        <label className="ml-4 text-marine_blue">Yearly</label>
      </div>

      {/* Validation message for billing */}
      {errors.billing && <p className="text-strawberry_red">Please select a billing frequency</p>}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <Button
          type="button"
          onClick={prevStep}
          label="Back"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
        />
        <Button
          type="submit"
          label="Next"
          className="bg-marine_blue text-white px-4 py-2 rounded hover:bg-purplish_blue transition"
        />
      </div>
    </form>
  );
}
