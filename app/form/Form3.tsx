'use client'

import React, { useState } from 'react'
import { CustomedButton, FormHeading } from '@components/atoms'

type StepProps = {
  prevStep: () => void // Function to go back to the previous step
  formData: {
    addOns?: { name: string; price: number }[]
    billing?: 'monthly' | 'yearly' // Add billing information from Step 2
  } // Form data to track selected add-ons
  setFormData: (data: {
    addOns?: { name: string; price: number }[]
    billing?: 'monthly' | 'yearly' // Include billing here as well
  }) => void // Function to update form data
  nextStep: () => void // Function to go to the next step
}

export default function Step3({
  prevStep,
  formData,
  setFormData,
  nextStep,
}: StepProps) {
  // Define the base monthly add-on prices
  const addOnOptions: { [key: string]: number } = {
    'Online service': 1,
    'Larger storage': 2,
    'Customizable profile': 2,
  }

  // Local state for selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(
    formData.addOns ? formData.addOns.map((addOn) => addOn.name) : [],
  )

  // Get the billing type (default to monthly if not set)
  const billing = formData.billing || 'monthly'

  // Function to toggle the selection of an add-on
  const handleAddOnChange = (addOn: string) => {
    setSelectedAddOns(
      (prev) =>
        prev.includes(addOn)
          ? prev.filter((item) => item !== addOn) // Remove add-on if already selected
          : [...prev, addOn], // Add add-on if not selected
    )
  }

  // Update form data with selected add-ons and proceed to the next step
  const handleNext = () => {
    // Map selected add-ons to include their adjusted prices based on billing frequency
    const selectedAddOnsWithPrices = selectedAddOns.map((name) => ({
      name,
      price:
        billing === 'monthly'
          ? addOnOptions[name as keyof typeof addOnOptions] // Monthly price
          : addOnOptions[name as keyof typeof addOnOptions] * 10, // Yearly price (10 months, 2 months free)
    }))
    setFormData({ ...formData, addOns: selectedAddOnsWithPrices }) // Save selected add-ons to form data
    nextStep() // Move to the next step
  }

  return (
    <form className='flex h-full flex-col gap-10 rounded-lg bg-white'>
      {/* Header for add-ons selection */}
      <div className='flex flex-col gap-2'>
        <FormHeading
          text='Pick add-ons'
          infoText='Add-ons help enhance your gaming experience'
        />
        {/* Add-ons selection options */}
        <div className='flex flex-col gap-4'>
          {/* Add-on for Online service */}
          <div
            className={`min-w-40 cursor-pointer rounded-lg border p-4 hover:border-marine_blue ${
              selectedAddOns.includes('Online service')
                ? 'border-2 border-marine_blue'
                : 'border border-gray-300'
            }`}
            onClick={() => handleAddOnChange('Online service')}
          >
            <label className='flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={selectedAddOns.includes('Online service')} // Show as checked if selected
                onChange={() => handleAddOnChange('Online service')} // Toggle selection
                className='mr-3'
              />
              <div>
                <h4 className='text-xl font-semibold text-marine_blue'>
                  Online service
                </h4>
                <p className='text-cool_gray'>Access to multiplayer games</p>
                <p className='font-semibold text-marine_blue'>
                  + $
                  {billing === 'monthly'
                    ? addOnOptions['Online service'] // Monthly price
                    : addOnOptions['Online service'] * 10}
                  {billing === 'yearly' && '/yr'}
                  {billing === 'monthly' && '/mo'}
                </p>
              </div>
            </label>
          </div>

          {/* Add-on for Larger storage */}
          <div
            className={`min-w-40 cursor-pointer rounded-lg border p-4 hover:border-marine_blue ${
              selectedAddOns.includes('Larger storage')
                ? 'border-2 border-marine_blue'
                : 'border border-gray-300'
            }`}
            onClick={() => handleAddOnChange('Larger storage')}
          >
            <label className='flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={selectedAddOns.includes('Larger storage')} // Show as checked if selected
                onChange={() => handleAddOnChange('Larger storage')} // Toggle selection
                className='mr-3'
              />
              <div>
                <h4 className='text-xl font-semibold text-marine_blue'>
                  Larger storage
                </h4>
                <p className='text-cool_gray'>Extra 1TB of cloud save</p>
                <p className='font-semibold text-marine_blue'>
                  + $
                  {billing === 'monthly'
                    ? addOnOptions['Larger storage']
                    : addOnOptions['Larger storage'] * 10}
                  {billing === 'yearly' && '/yr'}
                  {billing === 'monthly' && '/mo'}
                </p>
              </div>
            </label>
          </div>

          {/* Add-on for Customizable profile */}
          <div
            className={`min-w-40 cursor-pointer rounded-lg border p-4 hover:border-marine_blue ${
              selectedAddOns.includes('Customizable profile')
                ? 'border-2 border-marine_blue'
                : 'border border-gray-300'
            }`}
            onClick={() => handleAddOnChange('Customizable profile')}
          >
            <label className='flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={selectedAddOns.includes('Customizable profile')} // Show as checked if selected
                onChange={() => handleAddOnChange('Customizable profile')} // Toggle selection
                className='mr-3'
              />
              <div>
                <h4 className='text-xl font-semibold text-marine_blue'>
                  Customizable profile
                </h4>
                <p className='text-cool_gray'>Custom theme on your profile</p>
                <p className='font-semibold text-marine_blue'>
                  + $
                  {billing === 'monthly'
                    ? addOnOptions['Customizable profile']
                    : addOnOptions['Customizable profile'] * 10}
                  {billing === 'yearly' && '/yr'}
                  {billing === 'monthly' && '/mo'}
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='flex justify-between'>
        <CustomedButton
          typeButton='button'
          fn={prevStep}
          label='Go Back'
          style='bg-transparent hover:bg-transparent hover:text-gray-500 border-none text-gray-500'
        />
        <CustomedButton
          typeButton='button'
          fn={handleNext}
          label='Next'
        />
      </div>
    </form>
  )
}
