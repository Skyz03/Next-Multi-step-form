import { PlanType } from "@interfaces/commons"

export const monthlyPrices: Record<PlanType, number> = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
}
export const yearlyPrices: Record<PlanType, number> = {
  Arcade: 90,
  Advanced: 120,
  Pro: 150,
}

export function getPrice(plan: PlanType, billing: 'monthly' | 'yearly'): number {
  return billing === 'monthly' ? monthlyPrices[plan] : yearlyPrices[plan]
}