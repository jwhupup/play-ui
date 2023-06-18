export * from './install';
export * from './types';
export * from './is';
export declare function runAsync(cb: () => any): void;
export declare function uppercaseFirstWord(word?: string): string | undefined;
export declare function range(start: number, stop: number, step: number): number[];
/**
 * only animation.css
 */
export declare function animation(name: string | undefined, speed?: 'slow' | 'slower' | 'fast' | 'faster', repeat?: 1 | 2 | 3 | 'infinite'): string;
