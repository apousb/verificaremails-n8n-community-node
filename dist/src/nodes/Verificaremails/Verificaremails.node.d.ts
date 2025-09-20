export declare class Verificaremails {
    description: {
        displayName: string;
        name: string;
        icon: string;
        group: string[];
        version: number;
        description: string;
        defaults: {
            name: string;
        };
        inputs: string[];
        outputs: string[];
        credentials: {
            name: string;
            required: boolean;
        }[];
        properties: ({
            displayName: string;
            name: string;
            type: string;
            options: {
                name: string;
                value: string;
            }[];
            default: string;
            description: string;
            placeholder?: undefined;
            displayOptions?: undefined;
            required?: undefined;
        } | {
            displayName: string;
            name: string;
            type: string;
            default: string;
            placeholder: string;
            description: string;
            displayOptions: {
                show: {
                    service: string[];
                };
            };
            options?: undefined;
            required?: undefined;
        } | {
            displayName: string;
            name: string;
            type: string;
            default: string;
            placeholder: string;
            description: string;
            displayOptions: {
                show: {
                    service: string[];
                };
            };
            required: boolean;
            options?: undefined;
        } | {
            displayName: string;
            name: string;
            type: string;
            options: {
                name: string;
                value: number;
            }[];
            default: number;
            description: string;
            displayOptions: {
                show: {
                    service: string[];
                };
            };
            required: boolean;
            placeholder?: undefined;
        } | {
            displayName: string;
            name: string;
            type: string;
            options: {
                name: string;
                value: string;
            }[];
            default: string;
            description: string;
            displayOptions: {
                show: {
                    service: string[];
                };
            };
            placeholder?: undefined;
            required?: undefined;
        })[];
    };
    execute(this: any): Promise<any[][]>;
}
