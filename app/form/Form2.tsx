'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputSwitch } from 'primereact/inputswitch'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { FormHeading } from '@components/atoms'

const plans = [
  {
    name: 'Arcade',
    priceMonthly: 9,
    priceYearly: 90,
    imgSrc: '/assets/images/icon-arcade.svg',
    altText: 'Arcade Icon',
  },
  {
    name: 'Advanced',
    priceMonthly: 12,
    priceYearly: 120,
    imgSrc: '/assets/images/icon-advanced.svg',
    altText: 'Advanced Icon',
  },
  {
    name: 'Pro',
    priceMonthly: 15,
    priceYearly: 150,
    imgSrc: '/assets/images/icon-pro.svg',
    altText: 'Pro Icon',
  },
]
// Define a type for the plan names
type PlanType = 'Arcade' | 'Advanced' | 'Pro'

// Define the StepProps type
type StepProps = {
  nextStep: () => void // Function to move to the next step
  prevStep: () => void // Function to move to the previous step
  formData: {
    plan?: PlanType
    billing?: 'monthly' | 'yearly'
    planPrice?: number
  } // Current form data
  setFormData: (data: {
    plan?: PlanType
    billing?: 'monthly' | 'yearly'
    planPrice?: number
  }) => void // Function to update form data
}

// Define pricing plans with type
const monthlyPrices: Record<PlanType, number> = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
}
const yearlyPrices: Record<PlanType, number> = {
  Arcade: 90,
  Advanced: 120,
  Pro: 150,
}

export default function Step2({
  nextStep,
  prevStep,
  formData,
  setFormData,
}: StepProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  // Manage plan and billing state manually
  const [billing, setBilling] = useState<'monthly' | 'yearly'>(
    formData.billing || 'monthly',
  )
  const [plan, setPlan] = useState<PlanType>(formData.plan || 'Arcade')
  const [price, setPrice] = useState<number>(getPrice(plan, billing))

  // Get price based on plan and billing
  function getPrice(plan: PlanType, billing: 'monthly' | 'yearly'): number {
    return billing === 'monthly' ? monthlyPrices[plan] : yearlyPrices[plan]
  }

  // Update plan and price
  const handlePlanChange = (newPlan: PlanType) => {
    setPlan(newPlan)
    setPrice(getPrice(newPlan, billing))
  }

  // Update billing and price
  const handleBillingChange = (checked: boolean) => {
    const newBilling = checked ? 'yearly' : 'monthly'
    setBilling(newBilling)
    setPrice(getPrice(plan, newBilling))
  }

  // Handle form submission
  const onSubmit = () => {
    // Update formData correctly
    setFormData({
      ...formData,
      plan: plan, // Set the selected plan
      billing: billing, // Set the billing frequency
      planPrice: price, // Set the calculated price
    })
    console.log('Data on submit:', { plan, billing, price })
    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-20 h-full bg-white rounded-lg'
    >
      {/* Plan selection options */}

      <div className='flex flex-col gap-4'>
        <FormHeading
          text='Personal Info'
          infoText='Please provide your name, email address, and phone number.'
        />
        <div className='flex flex-row gap-4'>
          {plans.map((planOption) => (
            <Card
              key={planOption.name}
              className={`cursor-pointer min-w-40 p-4 rounded-md hover:border-marine_blue ${
                plan === planOption.name
                  ? 'border-2 border-marine_blue'
                  : 'border border-gray-300'
              }`}
              onClick={() => handlePlanChange(planOption.name as PlanType)}
            >
              <img
                src={planOption.imgSrc}
                alt={planOption.altText}
                className='w-10 h-10 mb-2'
              />
              <h4 className='text-xl font-semibold text-marine_blue'>
                {planOption.name}
              </h4>
              <p className='text-cool_gray'>
                $
                {billing === 'monthly'
                  ? planOption.priceMonthly
                  : planOption.priceYearly}
                <span className='text-cool_gray text-sm'>
                  {billing === 'monthly' ? '/mo' : '/yr'}
                </span>
              </p>

              {/* Conditionally render "2 months free" text for yearly billing */}
              {billing === 'yearly' && (
                <p className='text-marine_blue font-semibold text-sm'>
                  2 months free
                </p>
              )}
            </Card>
          ))}
        </div>
        {/* Billing frequency options */}
        <div className='flex items-center justify-center gap-4 bg-alabaster p-4 mt-4'>
          <label className='text-marine_blue'>Monthly</label>
          <InputSwitch
            checked={billing === 'yearly'}
            onChange={(e) => handleBillingChange(e.value)}
          />
          <label className='text-marine_blue'>Yearly</label>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='flex justify-between mt-6'>
        <Button
          type='button'
          onClick={prevStep}
          label='Go Back'
          className='text-gray-700 px-4 py-2 rounded-md'
        />
        <Button
          type='submit'
          label='Next Step'
          className='bg-marine_blue text-white px-6 py-3 rounded-md'
        />
      </div>
    </form>
  )
}
