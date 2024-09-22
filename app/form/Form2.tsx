'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { InputSwitch } from 'primereact/inputswitch'
import { Button } from 'primereact/button'
import { FormHeading } from '@components/atoms'
import { StepProps } from '@interfaces/commons'
import { useMultiFormContext } from '@context/MultiFormContext'
import { getPrice } from '@utils/helpers'
import { CustomedCardList } from '@components/molecules'

export default function Step2({
  nextStep,
  prevStep,
  formData,
  setFormData,
}: StepProps) {
  const { handleSubmit } = useForm()

  const { billing, setBilling, plan, price, setPrice } = useMultiFormContext()

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
      className='flex h-full flex-col gap-10 rounded-lg bg-white'
    >
      <div className='flex flex-col gap-4'>
        <FormHeading
          text='Personal Info'
          infoText='Please provide your name, email address, and phone number.'
        />
        <CustomedCardList />
        {/* Billing frequency options */}
        <div className='mt-4 flex items-center justify-center gap-4 bg-alabaster p-4'>
          <label className='text-marine_blue'>Monthly</label>
          <InputSwitch
            checked={billing === 'yearly'}
            onChange={(e) => handleBillingChange(e.value ?? false)}
          />
          <label className='text-marine_blue'>Yearly</label>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='mt-6 flex justify-between'>
        <Button
          type='button'
          onClick={prevStep}
          label='Go Back'
          className='rounded-md px-4 py-2 text-gray-700'
        />
        <Button
          type='submit'
          label='Next Step'
          className='rounded-md bg-marine_blue px-6 py-3 text-white'
        />
      </div>
    </form>
  )
}
