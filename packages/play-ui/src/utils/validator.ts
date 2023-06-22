import type { Rule, ValidateError } from 'async-validator'
import Schema from 'async-validator'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'

export function useValidator(source: Ref, rules: Rule) {
  const result = ref(true)
  const validator = new Schema({
    value: rules,
  })

  watch(source, () => {
    validator.validate({ value: source.value }, (errors: ValidateError[] | null) => {
      console.log(source.value)

      if (errors?.length)
        result.value = false
    })
  })

  return {
    result,
  }
}
