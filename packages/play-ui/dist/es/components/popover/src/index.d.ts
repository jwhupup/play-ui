import { type ExtractPropTypes, type PropType } from 'vue';
import { type Placement } from '@popperjs/core';
export type PopoverProps = ExtractPropTypes<typeof popoverProps>;
declare const popoverProps: {
    title: StringConstructor;
    content: StringConstructor;
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    content: StringConstructor;
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    title: StringConstructor;
    content: StringConstructor;
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
}>>, {
    placement: Placement;
    trigger: "click" | "hover";
}, {}>;
export default _default;
