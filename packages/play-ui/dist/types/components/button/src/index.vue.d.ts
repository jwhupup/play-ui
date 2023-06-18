declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./type").ButtonType>;
        default: string;
    };
    nativeType: {
        type: import("vue").PropType<import("./type").ButtonNativeType>;
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
        type: import("vue").PropType<import("./type").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./type").ButtonType>;
        default: string;
    };
    nativeType: {
        type: import("vue").PropType<import("./type").ButtonNativeType>;
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
        type: import("vue").PropType<import("./type").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./type").ButtonType;
    nativeType: import("./type").ButtonNativeType;
    state: import("../../component").ComponentState;
    size: import("../../component").ComponentSize;
    shape: import("./type").ButtonShape;
    disabled: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
