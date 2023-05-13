export type Union2Object<T extends keyof any> = { [P in T]: never; }

export type UnionPick<T extends keyof any, P extends T> = keyof Pick<Union2Object<T>, P>
