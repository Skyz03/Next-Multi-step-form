'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'primereact/button'
import { FormHeading } from '@components/atoms'
import { CustomInputText } from '@components/atoms'
import { EMAILREGEX, PHONEREGEX } from '@utils/constants'
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

  const handleForm = useForm()

  return (
    <form
      className='flex h-full flex-col gap-10'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-2'>
        <FormHeading
          text='Personal Info'
          infoText='Please provide your name, email address, and phone number.'
        />
        <section className='flex flex-col gap-5'>
          <CustomInputText
            handleForm={handleForm}
            name='name'
            label='Name'
            placeholder='e.g. Stephen King'
            required
          />

          <CustomInputText
            handleForm={handleForm}
            name='email'
            label='Email Address'
            placeholder='e.g. stephenking@lorem.com'
            required
            pattern={EMAILREGEX}
          />

          <CustomInputText
            handleForm={handleForm}
            name='phone'
            label='Phone'
            placeholder='e.g. +1 234 567 890'
            required
            pattern={PHONEREGEX}
          />
        </section>
      </div>
      <Button
        type='submit'
        label='Next Step'
        className='self-end rounded-md bg-marine_blue px-6 py-3 font-medium text-white transition hover:bg-purplish_blue'
      />
    </form>
  )
}
