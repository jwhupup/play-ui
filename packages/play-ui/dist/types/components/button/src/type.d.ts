import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize, ComponentState } from '../../component';
export type ButtonNativeType = 'button' | 'reset' | 'submit';
export type ButtonShape = 'rounded' | 'pilled' | 'circle' | 'plain';
export type ButtonType = 'solid' | 'outline' | 'ghost' | 'white' | 'link';
export declare const buttonProps: {
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    nativeType: {
        type: PropType<ButtonNativeType>;
        default: string;
    };
    state: {
        type: PropType<ComponentState>;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
