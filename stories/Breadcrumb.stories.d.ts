import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
declare const meta: Meta<typeof Breadcrumb>;
export default meta;
type Story = StoryObj<typeof Breadcrumb>;
export declare const Default: Story;
export declare const WithSeparator: Story;
export declare const WithCustomSeparator: Story;
export declare const WithNoSeparator: Story;
