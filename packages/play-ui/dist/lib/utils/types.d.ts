export type UnionToObject<T extends keyof any> = {
    [P in T]: never;
};
export type UnionPick<T extends keyof any, P extends T> = keyof Pick<UnionToObject<T>, P>;
