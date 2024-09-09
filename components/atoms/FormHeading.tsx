import { FC } from 'react'

type FormHeadingProps = {
  text: string
  infoText: string
}

const FormHeading: FC<FormHeadingProps> = ({ text, infoText }) => {
  return (
    <section>
      <h1 className='text-4xl font-bold mb-4 text-marine_blue'>{text}</h1>
      <h2 className='text-lg mb-6 text-cool_gray'>{infoText}</h2>
    </section>
  )
}
export default FormHeading
