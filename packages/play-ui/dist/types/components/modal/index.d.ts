export declare const PlModal: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    shakeOff: {
        type: import("vue").PropType<("footer" | "header" | "mask" | "x-button" | "confirm-button" | "cancel-button")[]>;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "cancel" | "open" | "confirm")[], "close" | "cancel" | "open" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shakeOff: {
        type: import("vue").PropType<("footer" | "header" | "mask" | "x-button" | "confirm-button" | "cancel-button")[]>;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    draggable: boolean;
    shakeOff: ("footer" | "header" | "mask" | "x-button" | "confirm-button" | "cancel-button")[];
    cancelText: string;
    confirmText: string;
}, {}>>;
export default PlModal;
export * from './src/index';
