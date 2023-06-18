import { type ExtractPropTypes } from 'vue';
export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
declare const virtualListProps: {
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
};
declare const _default: import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}, {}>;
export default _default;
