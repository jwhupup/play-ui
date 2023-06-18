import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue';
import { type TabHeader } from './header';
export type TabsProps = ExtractPropTypes<typeof tabsProps>;
export type TabsPosition = 'top' | 'left' | 'right';
export declare const PL_TAB_KEY: InjectionKey<{
    paneId: Ref<number>;
    position: Ref<TabsPosition>;
    headers: Ref<TabHeader[]>;
    currentPaneId: Ref<number>;
}>;
declare const tabsProps: {
    defaultTab: StringConstructor;
    position: PropType<TabsPosition>;
};
declare const _default: import("vue").DefineComponent<{
    defaultTab: StringConstructor;
    position: PropType<TabsPosition>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    defaultTab: StringConstructor;
    position: PropType<TabsPosition>;
}>>, {}, {}>;
export default _default;
