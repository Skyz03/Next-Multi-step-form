"use client"

import { Billing, PlanType } from '@interfaces/commons'
import { getPrice } from '@utils/helpers'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type formData = {
  plan:string | undefined,
  billing:string,
  planPrice:number,
  addOns: [],
}


type MultiFormContextType = {
  formData:formData
  billing: Billing
  plan: PlanType
  price: number
  setPrice: Dispatch<SetStateAction<number>>
  setPlan: Dispatch<SetStateAction<PlanType>>
  setBilling: Dispatch<SetStateAction<Billing>>
  setFormData: Dispatch<SetStateAction<formData>>
}

const multiFormContextDeafultValue: MultiFormContextType = {
  formData: {
    plan: undefined,
    billing: 'monthly',
    planPrice: 0,
    addOns: [],
  },
  billing:'monthly',
  plan: 'Arcade',
  price: 0,
  setPrice: () => {},
  setPlan: () => {},
  setBilling: () => {},
  setFormData: () => {},
}

export const MultiFormContext = createContext<MultiFormContextType>(
  multiFormContextDeafultValue
)

export function useMultiFormContext() {
  return useContext(MultiFormContext)
}

export default function MultiFormProvider({ children }:{children:React.ReactNode}) {
  const [formData, setFormData] = useState<formData>(
    multiFormContextDeafultValue.formData
  )

  const [billing, setBilling] = useState<Billing>(
   multiFormContextDeafultValue.billing
  )

  const [plan, setPlan] = useState<PlanType>(multiFormContextDeafultValue.plan)

  const [price, setPrice] = useState<number>(getPrice(plan, billing))

  return (
    <MultiFormContext.Provider value={{ formData, setFormData, billing, setBilling, plan, setPlan, price, setPrice }}>
      {children}
    </MultiFormContext.Provider>
  )
}