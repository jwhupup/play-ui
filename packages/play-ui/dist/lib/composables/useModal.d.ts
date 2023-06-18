export declare const useModal: (emit: (event: 'open' | 'close') => void) => {
    modal: import("vue").Ref<HTMLElement | undefined> & import("./useToggle").ToggleHandler;
};
