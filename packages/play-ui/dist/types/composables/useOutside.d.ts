import { type Ref } from 'vue';
export declare function useOutside(target: Ref<HTMLElement | undefined>, watcher: Ref<boolean>): {
    isOutside: Ref<boolean>;
};
