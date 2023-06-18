import { type Ref, type WatchStopHandle } from 'vue';
export interface CloseOption {
    delay?: number;
}
export interface ToggleHandler {
    state: Ref<boolean>;
    open: () => any;
    close: (option?: CloseOption) => any;
    toggle: () => any;
    onOpen: (cb: () => any) => WatchStopHandle;
    onClose: (cb: () => any) => WatchStopHandle;
}
export declare function useToggle(): ToggleHandler;
