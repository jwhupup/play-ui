import type { Component, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export declare function withInstall<T extends Component>(comp: T): SFCWithInstall<T>;
