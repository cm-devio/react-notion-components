import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
	title: "Components/Heading",
	component: Heading,
	argTypes: {
		level: {
			control: {
				type: "select",
				options: [1, 2, 3],
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
	args: {
		level: 1,
		children: "Heading 1",
	},
};

export const Heading2: Story = {
	args: {
		level: 2,
		children: "Heading 2",
	},
};

export const Heading3: Story = {
	args: {
		level: 3,
		children: "Heading 3",
	},
};
