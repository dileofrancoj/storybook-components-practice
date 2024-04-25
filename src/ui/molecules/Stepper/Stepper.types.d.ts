export interface Props {
    defaultValue?: number;
    min?: number;
    max: number;
    onStepperChange: (value: number) => void;
    withTrashIcon?: boolean;
}
