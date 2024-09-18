'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { BillingFrequency, CustomedButton, FormHeading} from '@components/atoms'
import { StepProps } from '@interfaces/commons'
import { useMultiFormContext } from '@context/MultiFormContext'
import { CustomedCardList } from '@components/molecules'

export default function Step2({
  nextStep,
  prevStep,
  formData,
  setFormData,
}: StepProps) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm()

  
  const {billing, plan,  price} = useMultiFormContext()

  
  // Handle form submission
  const onSubmit = () => {
    // Update formData correctly
    setFormData({
      ...formData,
      plan: plan, // Set the selected plan
      billing: billing, // Set the billing frequency
      planPrice: price, // Set the calculated price
    })
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
        <CustomedCardList/>
        <BillingFrequency />
      </div>

      <div className='mt-6 flex justify-between'>
        <CustomedButton
          typeButton='button'
          fn={prevStep}
          label='Go Back'
          style='bg-transparent hover:bg-transparent hover:text-gray-500 border-none text-gray-500'
        />
        <CustomedButton
          typeButton='submit'
          label='Next Step'
        />
      </div>
    </form>
  )
}
