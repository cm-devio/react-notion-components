import type { Meta, StoryObj } from "@storybook/react";
import { NotionTableOfContents } from "./TableOfContents";

const meta: Meta<typeof NotionTableOfContents> = {
	title: "Components/TableOfContents",
	component: NotionTableOfContents,
};

export default meta;

type Story = StoryObj<typeof NotionTableOfContents>;

export const Default: Story = {
	render: () => {
		return (
			<div className="p-4 space-y-2 w-64">
				<NotionTableOfContents
					domHtml={
						'<h2 id="section1">Section 1</h2><h3 id="section1-1">Section 1-1</h3><h3 id="section1-2">Section 1-2</h3><h2 id="section2">Section 2</h2>'
					}
				/>
			</div>
		);
	},
	args: {},
};
