import { getCurrentInstance } from 'vue'

/**
 * 将属性暴露在实例对象上。
 * @param apis
 */
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance)
    Object.assign(instance.proxy as object, apis)
}
