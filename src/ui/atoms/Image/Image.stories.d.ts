import { Props } from './Image.props';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<Props>;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        lazyLoad: {
            control: "boolean";
            defaultValue: boolean;
        };
        thumbnail: {
            control: "boolean";
            defaultValue: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<Props>;
export declare const Playground: Story;
