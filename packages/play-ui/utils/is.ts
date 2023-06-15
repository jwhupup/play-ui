export const isNumber = (val?: any): val is number => typeof val === 'number'
export const isNonnegativeNumber = (val?: any): val is number => isNumber(val) && val >= 0
