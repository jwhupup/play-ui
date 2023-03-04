export const isArray = (val: unknown[]) => Array.isArray(val)

export const isString = <T>(val: T) => typeof val === 'string'
