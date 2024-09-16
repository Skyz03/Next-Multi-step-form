import { CustomedCard } from '@components/atoms'
import { PLANS } from '@utils/constants'

const CustomedCardList = () => (
  <section className='flex flex-col gap-4 md:flex-row'>
    {PLANS.map((planOption) => (
      <CustomedCard planOption={planOption} />
    ))}
  </section>
)

export default CustomedCardList
