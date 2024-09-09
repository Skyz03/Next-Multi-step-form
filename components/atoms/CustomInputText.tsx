'use client'

import { MESSAGES } from '@utils/constants'
import { InputText, InputTextProps } from 'primereact/inputtext'
import { Controller, UseFormReturn } from 'react-hook-form'
import { classNames as cx } from 'primereact/utils'
import ErrorText from './ErrorText'

type CustomInputTextProps = Omit<InputTextProps, 'pattern'>

interface Props extends CustomInputTextProps {
  handleForm: UseFormReturn<any, any, any>
  label: string
  name: string
  required?: boolean
  pattern?: RegExp
  placeholder?: string
}

const CustomInputText = ({
  handleForm,
  label,
  name,
  required,
  pattern,
  placeholder,
  ...restProps
}: Props) => {
  const {
    formState: { errors },
    control,
  } = handleForm

  return (
    <Controller
      name={name as any}
      control={control}
      rules={{
        required: required ? MESSAGES.ERROR.requiredField : false,
        pattern: pattern && {
          value: pattern,
          message: MESSAGES.ERROR.invalidFormat,
        },
      }}
      render={({
        field: { value, name, ref, onBlur, onChange },
        fieldState: { error },
      }) => {
        return (
          <section className='flex flex-col gap-1 justify-end w-full [&_.p-inputtext]:custom-input [&_.p-inputtext:enabled:focus-visible]:custom-input-active'>
            <div className='flex items-center justify-between'>
              <label htmlFor={name} className='font-medium text-marine_blue'>
                {label}
              </label>
              <ErrorText name={name} errors={errors} />
            </div>
            <InputText
              id={name}
              value={value || ''}
              name={name}
              ref={ref}
              onBlur={(e) => {
                onBlur()
                onChange(e.target.value)
              }}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
              {...restProps}
              className={cx(
                { 'p-invalid': error },
                'p-3 sm:w-full font-medium placeholder: text-lg text-marine_blue',
              )}
            />
          </section>
        )
      }}
    />
  )
}

export default CustomInputText
