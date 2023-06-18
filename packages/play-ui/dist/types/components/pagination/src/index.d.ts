import type { PropType, Ref } from 'vue';
import type { ButtonShape, ButtonType } from '../../button';
export type PaginationInstance = HTMLElement & {
    current: Ref<number>;
    prev: (step?: number) => any;
    next: (step?: number) => any;
    toggle: (value?: number) => any;
};
declare const _default: import("vue").DefineComponent<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    showCount: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    showCount: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
}>>, {
    type: ButtonType;
    shape: ButtonShape;
    count: number;
    showCount: number;
}, {}>;
export default _default;
