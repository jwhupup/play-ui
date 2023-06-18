import type { PropType, Ref } from 'vue';
export interface StepsItem {
    name: string;
    description?: string;
    icon?: string;
    state?: 'pending' | 'processing' | 'done';
    result?: 'success' | 'fail' | 'exception';
}
export type StepsToggleOptions = Pick<StepsItem, 'state' | 'result'>;
export type StepsInstance = HTMLElement & {
    current: Ref<number>;
    toggle: (stepIndex: number, options: StepsToggleOptions) => any;
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<StepsItem[]>;
        require: boolean;
    };
    vertical: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<StepsItem[]>;
        require: boolean;
    };
    vertical: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    vertical: boolean;
}, {}>;
export default _default;
