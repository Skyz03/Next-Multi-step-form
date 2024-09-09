import MultiStepForm from '@/components/MultiStep'
import Image from 'next/image'

export default function FormPage() {
  return (
    <section className='flex p-5 gap-24 pr-24 bg-white shadow-md rounded-2xl'>
      <picture>
        <Image
          src='/assets/images/bg-sidebar-desktop.svg'
          height={100}
          width={100}
          alt='Background'
          className='w-fit'
        />
      </picture>
      <div className='self-center'>
        <MultiStepForm />
      </div>
    </section>
  )
}
