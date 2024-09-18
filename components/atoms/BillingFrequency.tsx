import { useMultiFormContext } from "@context/MultiFormContext";
import { getPrice } from "@utils/helpers";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

const BillingFrequency = ()=>{

  const {billing, setBilling, setPrice, plan} = useMultiFormContext()

  const handleBillingChange = (checked: boolean) => {
    const newBilling = checked ? 'yearly' : 'monthly'
    setBilling(newBilling)
    setPrice(getPrice(plan, newBilling))
  }


  return <div className='mt-4 flex items-center rounded-lg justify-center gap-4 bg-alabaster p-4'>
  <label className='text-marine_blue'>Monthly</label>
  <InputSwitch
    checked={billing === 'yearly'}
    onChange={(e: InputSwitchChangeEvent) => handleBillingChange(e.value ?? false)}
  />
  <label className='text-marine_blue'>Yearly</label>
</div>
}


export default BillingFrequency;