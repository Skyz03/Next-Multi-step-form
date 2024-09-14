
export type PlanType = 'Arcade' | 'Advanced' | 'Pro'

export type Billing = 'monthly' | 'yearly'

export interface StepProps {
  nextStep: () => void // Function to move to the next step
  prevStep: () => void // Function to move to the previous step
  formData: {
    plan?: PlanType
    billing?: Billing
    planPrice?: number
  } // Current form data
  setFormData: (data: {
    plan?: PlanType
    billing?: Billing
    planPrice?: number
  }) => void // Function to update form data
}


export type Plan  = {
  name:string,
  priceMonthly:number,
  priceYearly:number,
  imgSrc:string,
  altText:string,
}