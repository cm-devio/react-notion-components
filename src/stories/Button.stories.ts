import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["default", "destructive", "outline"],
			},
		},
		size: {
			control: {
				type: "select",
				options: ["default", "large"],
			},
		},
		children: {
			control: {
				type: "boolean",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		variant: "default",
		size: "default",
		children: "Default Button",
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "large",
		children: "Large Button",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "default",
		children: "Outline Button",
	},
};
