import type { App, Component, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

const prefix = 'Pl'

export function withInstall<T extends Component>(comp: T) {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component(`${prefix}${comp.name}`, comp)
  }
  return comp as SFCWithInstall<T>
}
