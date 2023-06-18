import type { ComponentResolver } from 'unplugin-vue-components';
export interface PlayResolverOptions {
    importStyle?: boolean | 'less';
    from?: string;
}
export declare const isSSR: boolean;
export declare function kebabCase(key: string): string;
export declare function PlayResolver(options?: PlayResolverOptions): ComponentResolver;
