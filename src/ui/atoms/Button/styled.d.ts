import { VariantProps } from './Button.props';

export interface ButtonProps {
    variant?: VariantProps;
}
interface LabelProps {
    textColor: React.CSSProperties['color'];
}
export declare const Label: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, LabelProps>>;
export declare const Button: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps>>;
export {};
