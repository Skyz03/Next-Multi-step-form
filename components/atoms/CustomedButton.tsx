import { Button } from 'primereact/button'

const CustomedButton = () => (
  <Button
    label='Next Step'
    className='before: relative self-end overflow-hidden rounded-md bg-marine_blue px-6 py-3 font-medium text-white transition duration-500 ease-in-out before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-cyan-500 before:transition-all before:duration-700 before:ease-in-out hover:bg-[#0d4e6d] hover:text-white hover:before:h-full'
  />
)

export default CustomedButton
