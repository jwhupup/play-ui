import { type ExtractPropTypes, type PropType } from 'vue';
import { type ToggleHandler } from '../../../composables';
export interface DarwerInstance extends ToggleHandler, HTMLElement {
}
export type DarwerProps = ExtractPropTypes<typeof darwerProps>;
type ShakeOffProp = 'x-button' | 'mask' | 'header';
declare const darwerProps: {
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<"top" | "bottom" | "left" | "right">;
        default: string;
    };
    fullscreen: BooleanConstructor;
};
declare const _default: import("vue").DefineComponent<{
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<"top" | "bottom" | "left" | "right">;
        default: string;
    };
    fullscreen: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open")[], "close" | "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<"top" | "bottom" | "left" | "right">;
        default: string;
    };
    fullscreen: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    shakeOff: ShakeOffProp[];
    placement: "top" | "bottom" | "left" | "right";
    fullscreen: boolean;
}, {}>;
export default _default;
