import type { Meta, StoryObj } from "@storybook/react";
import { PageIcon } from "./PageIcon";

const meta: Meta<typeof PageIcon> = {
	title: "Components/PageIcon",
	component: PageIcon,
};

export default meta;

type Story = StoryObj<typeof PageIcon>;

export const Default: Story = {
	render: () => {
		return (
			<PageIcon
				block={{
					role: "none",
					value: {
						type: "page",
						id: "none",
						properties: {
							title: [["Icon"]],
						},
						format: {
							page_icon: "📝",
						},
						permissions: [],
						version: 0,
						created_time: 0,
						last_edited_time: 0,
						parent_id: "",
						parent_table: "",
						alive: true,
						created_by_table: "",
						created_by_id: "",
						last_edited_by_table: "",
						last_edited_by_id: "",
					},
				}}
				mapImageUrl={(image: string): string => {
					return image;
				}}
			/>
		);
	},
	args: {},
};
