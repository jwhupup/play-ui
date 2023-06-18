import type { ExtractPropTypes } from 'vue';
export type TabPaneProps = Required<ExtractPropTypes<typeof tabPaneProps>>;
declare const tabPaneProps: {
    name: StringConstructor;
} & {
    type: {
        type: import("vue").PropType<import("../../button").ButtonType>;
        default: string;
    };
    nativeType: {
        type: import("vue").PropType<import("../../button").ButtonNativeType>;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("../../button").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
};
declare const _default: import("vue").DefineComponent<{
    name: StringConstructor;
} & {
    type: {
        type: import("vue").PropType<import("../../button").ButtonType>;
        default: string;
    };
    nativeType: {
        type: import("vue").PropType<import("../../button").ButtonNativeType>;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("../../button").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: StringConstructor;
} & {
    type: {
        type: import("vue").PropType<import("../../button").ButtonType>;
        default: string;
    };
    nativeType: {
        type: import("vue").PropType<import("../../button").ButtonNativeType>;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("../../button").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}>>, {
    type: import("../../button").ButtonType;
    nativeType: import("../../button").ButtonNativeType;
    state: import("../../component").ComponentState;
    size: import("../../component").ComponentSize;
    shape: import("../../button").ButtonShape;
    disabled: boolean;
}, {}>;
export default _default;
