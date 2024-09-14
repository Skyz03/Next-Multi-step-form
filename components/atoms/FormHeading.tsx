import { FC } from 'react'

type FormHeadingProps = {
  text: string
  infoText: string
}

const FormHeading: FC<FormHeadingProps> = ({ text, infoText }) => {
  return (
    <section>
      <h1 className='mb-4 text-4xl font-bold text-marine_blue'>{text}</h1>
      <h2 className='mb-6 text-lg text-cool_gray'>{infoText}</h2>
    </section>
  )
}
export default FormHeading
