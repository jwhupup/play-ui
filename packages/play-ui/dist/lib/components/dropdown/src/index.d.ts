import { type ExtractPropTypes, type PropType } from 'vue';
import { type Placement } from '@popperjs/core';
import type { ButtonProps } from '../../button';
import type { BadgeProps } from '../../badge';
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export interface DropdownData {
    name: string;
    title?: string;
    divider?: boolean;
    disabled?: boolean;
    button?: Partial<Pick<ButtonProps, 'state' | 'type' | 'iconLeft' | 'iconRight'> & {
        badge: BadgeProps;
    }>;
    callback?: () => void;
    children?: DropdownData[];
}
declare const dropdownProps: {
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
};
declare const _default: import("vue").DefineComponent<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
}>>, {
    data: any[];
    placement: Placement;
    trigger: "click" | "hover";
}, {}>;
export default _default;
