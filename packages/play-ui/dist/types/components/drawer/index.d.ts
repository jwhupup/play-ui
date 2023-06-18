export declare const PlDrawer: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    shakeOff: {
        type: import("vue").PropType<("header" | "mask" | "x-button")[]>;
        default: () => never[];
    };
    placement: {
        type: import("vue").PropType<"top" | "bottom" | "left" | "right">;
        default: string;
    };
    fullscreen: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open")[], "close" | "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shakeOff: {
        type: import("vue").PropType<("header" | "mask" | "x-button")[]>;
        default: () => never[];
    };
    placement: {
        type: import("vue").PropType<"top" | "bottom" | "left" | "right">;
        default: string;
    };
    fullscreen: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    shakeOff: ("header" | "mask" | "x-button")[];
    placement: "top" | "bottom" | "left" | "right";
    fullscreen: boolean;
}, {}>>;
export default PlDrawer;
export * from './src/index';
