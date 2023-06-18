export declare const PlBreadcrumb: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: import("vue").PropType<import("./src/index").BreadcrumbItem[]>;
    replace: BooleanConstructor;
    separator: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<import("./src/index").BreadcrumbItem[]>;
    replace: BooleanConstructor;
    separator: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    separator: string;
}, {}>>;
export default PlBreadcrumb;
export * from './src/index';
