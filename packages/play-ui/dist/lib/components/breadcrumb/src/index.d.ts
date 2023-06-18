import type { PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
export interface BreadcrumbItem {
    name: string;
    separator?: String;
    to: RouteLocationRaw;
    icon: string;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: PropType<BreadcrumbItem[]>;
    replace: BooleanConstructor;
    separator: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<BreadcrumbItem[]>;
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
}, {}>;
export default _default;
