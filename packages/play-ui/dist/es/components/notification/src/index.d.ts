import { type ExtractPropTypes, type PropType } from 'vue';
import { type ToggleHandler } from '../../../composables';
type ShakeOffProp = 'x-button' | 'icon' | 'title';
export type NotificationProps = Partial<ExtractPropTypes<typeof notificationProps>>;
export type NotificationInstance = Pick<ToggleHandler, 'state' | 'open' | 'close'>;
declare const notificationProps: {
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: PropType<(handler: NotificationInstance) => any>;
    onConfirm: PropType<(handler: NotificationInstance) => any>;
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
};
export declare const NotificationConstructor: import("vue").DefineComponent<{
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: PropType<(handler: NotificationInstance) => any>;
    onConfirm: PropType<(handler: NotificationInstance) => any>;
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: PropType<(handler: NotificationInstance) => any>;
    onConfirm: PropType<(handler: NotificationInstance) => any>;
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
}>>, {
    shakeOff: ShakeOffProp[];
    placement: "left" | "right";
    autoClose: boolean;
}, {}>;
declare const _default: (options?: NotificationProps) => void;
export default _default;
