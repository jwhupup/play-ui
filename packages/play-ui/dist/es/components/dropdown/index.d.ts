export declare const PlDropdown: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    placement: {
        type: import("vue").PropType<import("@popperjs/core").Placement>;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<"click" | "hover">;
        default: string;
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placement: {
        type: import("vue").PropType<import("@popperjs/core").Placement>;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<"click" | "hover">;
        default: string;
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
}>>, {
    data: any[];
    placement: import("@popperjs/core").Placement;
    trigger: "click" | "hover";
}, {}>>;
export default PlDropdown;
export * from './src/index';
