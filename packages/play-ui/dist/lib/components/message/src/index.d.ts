import { type ExtractPropTypes, type PropType } from 'vue';
export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>;
declare const messageProps: {
    content: StringConstructor;
    shakeOff: {
        type: PropType<"x-button"[]>;
        default: () => never[];
    };
    state: {
        type: PropType<"info" | "success" | "warning" | "danger">;
        default: string;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const MessageConstructor: import("vue").DefineComponent<{
    content: StringConstructor;
    shakeOff: {
        type: PropType<"x-button"[]>;
        default: () => never[];
    };
    state: {
        type: PropType<"info" | "success" | "warning" | "danger">;
        default: string;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    content: StringConstructor;
    shakeOff: {
        type: PropType<"x-button"[]>;
        default: () => never[];
    };
    state: {
        type: PropType<"info" | "success" | "warning" | "danger">;
        default: string;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    state: "info" | "success" | "warning" | "danger";
    shakeOff: "x-button"[];
    autoClose: boolean;
}, {}>;
declare const _default: (options?: MessageProps) => void;
export default _default;
