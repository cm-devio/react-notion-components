import type { Meta, StoryObj } from "@storybook/react";
import { Li } from "./Li";

const meta: Meta<typeof Li> = {
	title: "Components/Li",
	component: Li,
};

export default meta;

type Story = StoryObj<typeof Li>;

export const Default: Story = {
	render: () => {
		return (
			<div>
				<Li text={["List item 1"]} />
				<Li text={["List item 2"]} />
				<Li text={["List item 3"]} />
				<Li text={["List item 4"]} />
			</div>
		);
	},
	args: {},
};
