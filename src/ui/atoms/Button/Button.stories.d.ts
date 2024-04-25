import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
