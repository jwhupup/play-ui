import { type Ref } from 'vue';
export interface CountOptions {
    initial?: number;
    min?: number | Ref<number>;
    max?: number | Ref<number>;
}
export declare const useCount: (options?: CountOptions) => {
    count: Ref<number>;
    add: (step?: number) => number | undefined;
    sub: (step?: number) => number | undefined;
    update: (value: number) => void;
};
