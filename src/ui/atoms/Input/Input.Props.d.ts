import { InputHTMLAttributes } from '../../../../node_modules/react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: string;
    label?: string;
    placeholder: string;
}
