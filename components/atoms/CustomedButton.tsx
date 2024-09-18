interface CustomedButtonProps {
  label: string
  style?: string
  typeButton?:"button" | "submit" | "reset"
  fn?: () => void
}

const CustomedButton = ({label, style, typeButton, fn}:CustomedButtonProps) => {
 return <button
    onClick={fn}
    type={typeButton}
    
    className={`${style} relative self-end overflow-hidden rounded-md bg-marine_blue px-6 py-3 font-medium text-white transition duration-500 ease-in-out hover:bg-[#0d4e6d] hover:text-white hover:before:h-full`}
  >{label}</button>
}

export default CustomedButton
