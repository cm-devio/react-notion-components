import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: [
					"default",
					"destructive",
					"outline",
					"secondary",
					"ghost",
					"link",
				],
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

export const Destructive: Story = {
	args: {
		variant: "destructive",
		size: "default",
		children: "Destructive Button",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "default",
		children: "Outline Button",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "default",
		children: "Secondary Button",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		size: "default",
		children: "Ghost Button",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		size: "default",
		children: "Link Button",
	},
};

export const LargeButton: Story = {
	args: {
		variant: "default",
		size: "large",
		children: "Large Button",
	},
};

export const AsChild: Story = {
	args: {
		variant: "default",
		size: "default",
		children: "As Child Button",
	},
};
