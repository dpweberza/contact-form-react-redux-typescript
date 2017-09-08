interface IInputProps {
    id: string;
    label: string;
    type: string;
    componentClass?: string;
    meta: {
        touched: boolean;
        error : string;
    },
    input: object;
}