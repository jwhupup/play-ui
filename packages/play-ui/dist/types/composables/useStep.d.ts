export declare const useStep: <T>(modelValue: T[], emit: (event: 'update:modelValue', ...args: any[]) => void) => {
    steps: import("vue").WritableComputedRef<T[]>;
    current: import("vue").Ref<number>;
    next: (step?: number) => number | undefined;
    prev: (step?: number) => number | undefined;
    toggle: (value: number) => void;
    add: (step: T) => void;
    sub: (stepIndex: number) => void;
};
