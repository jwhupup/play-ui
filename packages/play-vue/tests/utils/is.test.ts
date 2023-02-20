import { describe, expect, it } from 'vitest'
import { isArray, isString } from '../../src/utils'

describe('utils of is', () => {
  it('Is it a string?', () => {
    expect(isString('hello!')).toBeTruthy()
  })

  it('Is it an array?', () => {
    const tempArray: unknown[] = []
    expect(isArray(tempArray)).toBeTruthy()
  })
})
