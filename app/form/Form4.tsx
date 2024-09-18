import Image from "next/image"

const Step4 = () => {

    return (
      <section className='flex h-full flex-col items-center justify-center gap-6 rounded-lg bg-white'>
        <div className="flex flex-col justify-center items-center gap-10">
          <Image src="/assets/images/icon-thank-you.svg" alt="thank-you" height={100} width={100} />
        <h1 className='text-4xl font-bold text-marine_blue'>Thank You!</h1>
        </div>
        <p className='text-center px-12 text-cool_gray'>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
        </p>
      </section>
    )
  }


export default Step4
