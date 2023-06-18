export declare const PlNotification: (options?: Partial<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: import("vue").PropType<(handler: import("./src/index").NotificationInstance) => any>;
    onConfirm: import("vue").PropType<(handler: import("./src/index").NotificationInstance) => any>;
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    shakeOff: {
        type: import("vue").PropType<("title" | "icon" | "x-button")[]>;
        default: () => never[];
    };
    placement: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
}>> | undefined) => void;
export default PlNotification;
export * from './src/index';
