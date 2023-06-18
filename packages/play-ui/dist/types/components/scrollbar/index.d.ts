export declare const PlScrollbar: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    height: {
        type: NumberConstructor;
        default: number;
    };
    minThumbSize: {
        type: NumberConstructor;
        default: number;
    };
    behavior: {
        type: import("vue").PropType<ScrollBehavior>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        default: number;
    };
    minThumbSize: {
        type: NumberConstructor;
        default: number;
    };
    behavior: {
        type: import("vue").PropType<ScrollBehavior>;
        default: string;
    };
}>> & {
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    height: number;
    minThumbSize: number;
    behavior: ScrollBehavior;
}, {}>>;
export default PlScrollbar;
export * from './src/index';
