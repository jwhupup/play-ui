import { type ExtractPropTypes, type PropType } from 'vue';
import { type ToggleHandler } from '../../../composables';
export interface ModalInstance extends ToggleHandler, HTMLElement {
}
export type ModalProps = ExtractPropTypes<typeof modalProps>;
type ShakeOffProp = 'x-button' | 'confirm-button' | 'cancel-button' | 'mask' | 'header' | 'footer';
declare const modalProps: {
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
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
};
declare const _default: import("vue").DefineComponent<{
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "cancel" | "open" | "confirm")[], "close" | "cancel" | "open" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
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
    shakeOff: ShakeOffProp[];
    cancelText: string;
    confirmText: string;
}, {}>;
export default _default;
