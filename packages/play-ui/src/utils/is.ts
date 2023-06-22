export const isBoolean = (val?: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val?: any): val is number => typeof val === 'number'
export const isNonnegativeNumber = (val?: any): val is number => isNumber(val) && val >= 0
