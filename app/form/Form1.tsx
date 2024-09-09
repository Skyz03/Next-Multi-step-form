'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { FormHeading } from '@components/atoms'

type StepProps = {
  nextStep: () => void
  formData: any
  setFormData: (data: any) => void
}

type FormData = {
  name: string
  email: string
  phone: string
}

export default function Step1({ nextStep, formData, setFormData }: StepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setFormData({ ...formData, ...data })
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeading
        text='Personal Info'
        infoText='Please provide your name, email address, and phone number.'
      />
      {/* Input for Name */}
      <label className='block mb-2 font-medium text-marine_blue'>Name</label>
      <InputText
        {...register('name', { required: 'Name is required' })}
        defaultValue={formData.name}
        placeholder='Enter your name'
        className={`w-full p-4 mb-2 border font-bold text-marine_blue border-cool_gray rounded-md focus:outline-none focus:ring-2 
          ${errors.name ? 'border-strawberry_red' : 'focus:ring-marine_blue hover:border-purplish_blue'}`}
      />
      {errors.name && (
        <p className='text-strawberry_red text-sm'>{errors.name.message}</p>
      )}

      {/* Input for Email */}
      <label className='block mb-2 font-medium text-marine_blue'>
        Email Address
      </label>
      <InputText
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Please enter a valid email address',
          },
        })}
        defaultValue={formData.email}
        placeholder='Enter your email'
        className={`w-full p-4 mb-2 border font-bold text-marine_blue border-cool_gray rounded-md focus:outline-none focus:ring-2 
          ${errors.email ? 'border-strawberry_red' : 'focus:ring-marine_blue hover:border-purplish_blue'}`}
      />
      {errors.email && (
        <p className='text-strawberry_red text-sm'>{errors.email.message}</p>
      )}

      {/* Input for Phone */}
      <label className='block mb-2 font-medium text-marine_blue'>Phone</label>
      <InputText
        {...register('phone', {
          required: 'Phone is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Please enter a valid phone number',
          },
        })}
        defaultValue={formData.phone}
        placeholder='Enter your phone number'
        className={`w-full p-4 mb-2 border font-bold text-marine_blue border-cool_gray rounded-md focus:outline-none focus:ring-2 
          ${errors.phone ? 'border-strawberry_red' : 'focus:ring-marine_blue hover:border-purplish_blue'}`}
      />
      {errors.phone && (
        <p className='text-strawberry_red text-sm'>{errors.phone.message}</p>
      )}

      {/* Button aligned to the right */}
      <div className='flex justify-end mt-6'>
        <Button
          type='submit'
          label='Next'
          className='bg-marine_blue text-white font-bold py-2 px-4 rounded-md hover:bg-purplish_blue transition'
        />
      </div>
    </form>
  )
}
