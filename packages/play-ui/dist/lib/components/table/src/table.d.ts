import type { Ref } from 'vue';
import type { TableProps } from '../../component';
export declare const config: Ref<{
    striped: boolean;
    width: number;
    columns: {
        name: string;
        key?: string | undefined;
        width?: number | undefined;
        index?: number | undefined;
        children?: any[] | undefined;
    }[];
    data: Record<string, any>[];
}>;
export declare const genTableConfig: (props: TableProps, el: Ref<HTMLElement | undefined>) => void;
