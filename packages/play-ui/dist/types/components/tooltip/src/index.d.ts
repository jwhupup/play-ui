import { type ExtractPropTypes, type PropType } from 'vue';
import { type Placement } from '@popperjs/core';
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
declare const tooltipProps: {
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
    content: StringConstructor;
    placement: {
        type: PropType<Placement>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    content: StringConstructor;
    placement: {
        type: PropType<Placement>;
        default: string;
    };
}>>, {
    placement: Placement;
}, {}>;
export default _default;
