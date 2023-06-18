export declare const PlMessage: (options?: Partial<import("vue").ExtractPropTypes<{
    content: StringConstructor;
    shakeOff: {
        type: import("vue").PropType<"x-button"[]>;
        default: () => never[];
    };
    state: {
        type: import("vue").PropType<"info" | "success" | "warning" | "danger">;
        default: string;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> | undefined) => void;
export default PlMessage;
export * from './src/index';
