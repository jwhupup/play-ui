import type { ExtractPropTypes, PropType } from 'vue';
export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
export interface ScrollbarInstance extends HTMLElement {
    scrollto(options: ScrollToOptions): void;
}
declare const scrollbarProps: {
    height: {
        type: NumberConstructor;
        default: number;
    };
    minThumbSize: {
        type: NumberConstructor;
        default: number;
    };
    behavior: {
        type: PropType<ScrollBehavior>;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    height: {
        type: NumberConstructor;
        default: number;
    };
    minThumbSize: {
        type: NumberConstructor;
        default: number;
    };
    behavior: {
        type: PropType<ScrollBehavior>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        default: number;
    };
    minThumbSize: {
        type: NumberConstructor;
        default: number;
    };
    behavior: {
        type: PropType<ScrollBehavior>;
        default: string;
    };
}>> & {
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    height: number;
    minThumbSize: number;
    behavior: ScrollBehavior;
}, {}>;
export default _default;
