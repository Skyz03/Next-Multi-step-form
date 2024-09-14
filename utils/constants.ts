export const EMAILREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const PHONEREGEX = /^[0-9]{10}$/

export const MESSAGES = {
  ERROR: {
    requiredField: 'This field is required',
    invalidFormat: 'Invalid data try again',
  },
}

export const PLANS = [
  {
    name: 'Arcade',
    priceMonthly: 9,
    priceYearly: 90,
    imgSrc: '/assets/images/icon-arcade.svg',
    altText: 'Arcade Icon',
  },
  {
    name: 'Advanced',
    priceMonthly: 12,
    priceYearly: 120,
    imgSrc: '/assets/images/icon-advanced.svg',
    altText: 'Advanced Icon',
  },
  {
    name: 'Pro',
    priceMonthly: 15,
    priceYearly: 150,
    imgSrc: '/assets/images/icon-pro.svg',
    altText: 'Pro Icon',
  },
]