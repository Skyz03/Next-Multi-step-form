'use client'

import React, { useState } from 'react'
import { FormHeading } from '@components/atoms'

type Step4Props = {
  prevStep: () => void
  formData: {
    plan: string
    billing: 'monthly' | 'yearly'
    planPrice: number
    addOns: { name: string; price: number }[] // Updated format for add-ons
  }
  handleSubmit: () => void // Function to submit the form
}

const Step4: React.FC<Step4Props> = ({ prevStep, formData, handleSubmit }) => {
  const [submitted, setSubmitted] = useState(false)

  // Calculate the total price including add-ons
  const calculateTotal = () => {
    console.log(formData)
    const planPrice = formData.planPrice || 0
    const addonsTotal = formData.addOns.reduce(
      (acc, { price }) => acc + price,
      0,
    )
    return planPrice + addonsTotal
  }

  // Handle form submission
  const onSubmit = () => {
    handleSubmit()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className='flex h-full flex-col items-center justify-center gap-6 rounded-lg bg-white'>
        <h1 className='text-2xl font-bold'>Thank You!</h1>
        <p className='text-lg text-cool_gray'>
          Your submission has been successfully completed.
        </p>
        <div className='w-full rounded-lg bg-magnolia p-4'>
          <h3 className='text-lg font-semibold'>Summary of your submission:</h3>
          <pre className='mt-2 rounded-lg bg-gray-100 p-4'>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
        <p className='text-center text-cool_gray'>
          We will get back to you shortly. If you have any questions, feel free
          to contact our support team.
        </p>
      </div>
    )
  }

  return (
    <form className='flex h-full flex-col gap-10 rounded-lg bg-white'>
      {/* Form Heading */}
      <FormHeading
        text='Finishing Up'
        infoText='Double-check everything looks OK before confirming.'
      />

      <div className='rounded-lg bg-magnolia p-4'>
        {/* Plan Summary */}
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-bold text-marine_blue'>
            {formData.plan} (
            {formData.billing === 'monthly' ? 'Monthly' : 'Yearly'})
          </h3>

          <p className='text-xl font-bold text-marine_blue'>
            ${formData.planPrice}
            {formData.billing === 'monthly' ? '/mo' : '/yr'}
          </p>
        </div>
        <button
          onClick={() => console.log('Change plan button clicked')} // Add functionality for changing plan
          className='text-cool_gray underline hover:text-purplish_blue'
        >
          Change
        </button>

        <hr className='m-4'></hr>
        <div className='gap-2bg-magnolia flex flex-col rounded-lg'>
          {formData.addOns.map(({ name, price }) => (
            <div key={name} className='flex justify-between p-2'>
              <span className='text-cool_gray'>{name}</span>
              <span className='font-medium text-marine_blue'>
                +${price}
                {formData.billing === 'monthly' ? '/mo' : '/yr'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className='flex justify-between rounded-lg p-4 text-lg font-bold'>
        <span className='text-cool_gray'>
          Total (per {formData.billing === 'monthly' ? 'month' : 'year'})
        </span>
        <span className='text-purplish_blue'>
          ${calculateTotal()}
          {formData.billing === 'monthly' ? '/mo' : '/yr'}
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-between'>
        <button
          type='button'
          onClick={prevStep}
          className='rounded-md px-4 py-2 text-gray-700 transition hover:font-bold hover:text-marine_blue'
        >
          Back
        </button>
        <button
          type='button'
          onClick={onSubmit}
          className='rounded-md bg-marine_blue px-6 py-3 text-white transition hover:bg-purplish_blue'
        >
          Confirm
        </button>
      </div>
    </form>
  )
}

export default Step4
