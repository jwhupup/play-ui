import { type MaybeRef } from 'vue';
export interface DraggableOptions {
    target?: MaybeRef<HTMLElement | undefined>;
    /**
     * Avoiding positional calculation errors caused by css style 'transform: translate()'.
     */
    translateX?: MaybeRef<number>;
    translateY?: MaybeRef<number>;
}
export declare const useDraggable: (handle: MaybeRef<HTMLElement | undefined>, options?: DraggableOptions) => void;
