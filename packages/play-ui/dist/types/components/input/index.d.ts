export declare const PlInput: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("../component").InputType>;
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    nativeType: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../component").ComponentSize>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    rule: {
        type: import("vue").PropType<import("../component").InputRule>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur")[], "update:modelValue" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("../component").InputType>;
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    nativeType: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../component").ComponentSize>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    rule: {
        type: import("vue").PropType<import("../component").InputRule>;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: import("../component").InputType;
    nativeType: string;
    size: import("../component").ComponentSize;
}, {}>>;
export default PlInput;
