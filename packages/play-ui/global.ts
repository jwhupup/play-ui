declare interface UIEvent {
  readonly target: HTMLElement
}
declare interface FocusEvent {
  readonly target: HTMLInputElement
}
declare type Union2Object<T extends keyof any> = { [P in T]: never; }

declare type UnionPick<T extends keyof any, P extends T> = keyof Pick<Union2Object<T>, P>
