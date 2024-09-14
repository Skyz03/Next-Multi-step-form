import { useMultiFormContext } from "@context/MultiFormContext";
import { Plan, PlanType } from "@interfaces/commons";
import { getPrice } from "@utils/helpers";
import Image from "next/image";
import { Card } from "primereact/card";

interface CustomedCardProps {
  planOption:Plan;
}

const CustomedCard = ({planOption}:CustomedCardProps)=> {

const {plan, billing, setPlan, setPrice} = useMultiFormContext()

const handlePlanChange = (newPlan: PlanType) => {
  setPlan(newPlan)
  setPrice(getPrice(newPlan, billing))
}

return(
<Card
key={planOption.name}
className={`min-w-40 cursor-pointer rounded-md p-4 hover:border-marine_blue ${
  plan === planOption.name
    ? 'border-2 border-marine_blue'
    : 'border border-gray-300'
}`}
onClick={() => handlePlanChange(planOption.name as PlanType)}
>
<Image
  src={planOption.imgSrc}
  alt={planOption.altText}
  width={40}
  height={40}
  className='mb-2 h-10 w-10'
/>
<span className='text-xl font-semibold text-marine_blue'>
  {planOption.name}
</span>
<p className='text-cool_gray'>
  $
  {billing === 'monthly'
    ? planOption.priceMonthly
    : planOption.priceYearly}
  <span className='text-sm text-cool_gray'>
    {billing === 'monthly' ? '/mo' : '/yr'}
  </span>
</p>

{billing === 'yearly' && (
  <p className='text-sm font-semibold text-marine_blue'>
    2 months free
  </p>
)}
</Card>)}

export default CustomedCard;