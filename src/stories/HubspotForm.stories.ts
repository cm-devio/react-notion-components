import type { Meta, StoryObj } from "@storybook/react";
import { HubspotForm } from "./HubspotForm";

const meta: Meta<typeof HubspotForm> = {
	title: "Components/HubspotForm",
	component: HubspotForm,
	argTypes: {
		portalId: {
			control: {
				type: "text",
			},
		},
		formId: {
			control: {
				type: "text",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof HubspotForm>;

export const Default: Story = {
	args: {
		portalId: "123456",
		formId: "654321",
	},
};
