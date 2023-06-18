export declare const PlSteps: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<import("./src/index").StepsItem[]>;
        require: boolean;
    };
    vertical: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./src/index").StepsItem[]>;
        require: boolean;
    };
    vertical: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    vertical: boolean;
}, {}>>;
export default PlSteps;
export * from './src/index';
