export declare const PlVirtualList: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    listHeight: {
        type: NumberConstructor;
        default: number;
    };
    listItemCount: {
        type: NumberConstructor;
        default: number;
    };
    estimatedListItemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    listHeight: {
        type: NumberConstructor;
        default: number;
    };
    listItemCount: {
        type: NumberConstructor;
        default: number;
    };
    estimatedListItemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
}>>, {
    listHeight: number;
    listItemCount: number;
}, {}>>;
export declare const PlVirtualListItem: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>>;
export default PlVirtualList;
export * from './src/index';
