'use client'
import { useState } from 'react'
import MultiStepForm from '@/components/MultiStep'

// Define the type for the step object
interface StepProps {
  number: number
  title: string
  subtitle: string
  isActive: boolean
}

// Initial steps array (without isActive, which will be updated dynamically)
const initialSteps: Omit<StepProps, 'isActive'>[] = [
  { number: 1, title: 'Your Info', subtitle: 'Step 1' },
  { number: 2, title: 'Select Plan', subtitle: 'Step 2' },
  { number: 3, title: 'Add-ons', subtitle: 'Step 3' },
  { number: 4, title: 'Summary', subtitle: 'Step 4' },
]

// Step component to represent each individual step
function Step({ number, title, subtitle, isActive }: StepProps) {
  return (
    <div className='flex items-center gap-4'>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${isActive ? 'bg-blue-500 text-white' : 'border text-white'}`}
      >
        {number}
      </div>
      <div className='hidden md:block'>
        <p className='text-sm font-semibold uppercase text-cool_gray'>
          {subtitle}
        </p>
        <h2 className='font-bold uppercase text-white'>{title}</h2>
      </div>
    </div>
  )
}

export default function FormPage() {
  // State to track the current active step
  const [currentStep, setCurrentStep] = useState(1)

  // Dynamically update the steps array with isActive based on currentStep
  const steps = initialSteps.map((step) => ({
    ...step,
    isActive: step.number === currentStep, // Set active based on the current step
  }))

  return (
    <section className='flex flex-col gap-8 rounded-2xl bg-white p-5 shadow-md md:flex-row'>
      {/* Sidebar with background image and steps */}
      <div className="w-full rounded-2xl bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-center bg-no-repeat p-8 md:w-1/3">
        {/* Dynamically render steps */}
        <div className='flex flex-row justify-center gap-8 md:flex-col md:justify-start'>
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              subtitle={step.subtitle}
              isActive={step.isActive}
            />
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className='flex-grow'>
        <div className='relative flex h-full items-center justify-center rounded-xl bg-white p-6 lg:max-h-[650px] lg:min-h-[650px] lg:min-w-[600px] lg:max-w-[600px]'>
          {/* Pass setCurrentStep t  o ltiStepForm to allow
            fg */}
          <MultiStepForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </div>
    </section>
  )
}
