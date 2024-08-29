import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
	title: "Components/Breadcrumb",
	component: Breadcrumb,
	argTypes: {
		separator: {
			control: {
				type: "text",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
	args: {},
};

export const WithSeparator: Story = {
	args: {
		separator: "/",
	},
};

export const WithCustomSeparator: Story = {
	args: {
		separator: "🍞",
	},
};

export const WithNoSeparator: Story = {
	args: {
		separator: "",
	},
};
