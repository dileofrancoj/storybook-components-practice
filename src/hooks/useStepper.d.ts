import { Props } from '../ui/molecules/Stepper/Stepper.types';
import { default as React } from '../../node_modules/react';

interface UseStepperProps {
    increment: () => void;
    decrement: () => void;
    isRemovePressed: boolean;
    isAddPressed: boolean;
    shouldShowTrashIcon: boolean;
    setIsAddPressed: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRemovePressed: React.Dispatch<React.SetStateAction<boolean>>;
    count: number;
}
export declare const useStepper: (props: Props) => UseStepperProps;
export {};
