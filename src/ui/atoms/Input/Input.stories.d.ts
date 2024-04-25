import { Props } from './Input.Props';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<Props>;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        layout: string;
    };
    argTypes: {
        placeholder: {
            description: string;
            type: "string";
            defaultValue: string;
        };
    };
};
export default meta;
type Story = StoryObj<Props>;
export declare const Playground: Story;
