'use client'

import React, { useState } from 'react'
import Step1 from '../app/form/Form1'
import Step2 from '../app/form/Form2'
import Step3 from '../app/form/Form3'
import Step4 from '../app/form/Form4'

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1) // Track the current step of the form
  const [formData, setFormData] = useState({
    plan: undefined,
    billing: 'monthly',
    planPrice: 0,
    addOns: [],
  }) // Store form data across steps

  // Function to move to the next step
  const nextStep = () => setStep(step + 1)

  // Function to move to the previous step
  const prevStep = () => setStep(step - 1)

  // Function to handle final form submission
  const handleSubmit = () => {
    // Perform any final validation or submit formData to an API here
    console.log(formData) // Log form data or handle API submission
  }

  // Determine which step to display based on the current step
  let stepContent
  switch (step) {
    case 1:
      stepContent = (
        <Step1
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )
      break
    case 2:
      stepContent = (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )
      break
    case 3:
      stepContent = (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )
      break
    case 4:
      stepContent = (
        <Step4
          prevStep={prevStep}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      )
      break
    default:
      stepContent = null // Render nothing if step is invalid
  }

  return (
    <>
      {/* Container for the form */}
      <div>
        {stepContent} {/* Render the current step's content */}
      </div>
    </>
  )
}

export default MultiStepForm
