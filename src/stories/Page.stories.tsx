import type { BlockMapType } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Page } from "./Page";
import "zenn-content-css";
import "@/globals.css";

const geNotionPage = async ({
	slug,
}: { slug: string }): Promise<BlockMapType> => {
	const response = await fetch(
		`https://watsuyo-notion-api-worker.classmethodeurope.workers.dev/v1/page/${slug}/`,
	);
	return response.json() as Promise<BlockMapType>;
};

const meta: Meta<typeof Page> = {
	title: "Page",
	component: Page,
};

export default meta;

type Story = StoryObj<typeof Page>;

export const WithSlug: Story = {
	render: () => {
		const [slug, setSlug] = useState<string>("");
		const [blocks, setPageData] = useState<BlockMapType | null>(null);
		const [error, setError] = useState<string | null>(null);

		const handleFetchPage = async (slug: string) => {
			setError(null);

			setSlug(slug);

			if (!slug) {
				setError("Please fill in all required fields.");
				return;
			}

			try {
				const data = await geNotionPage({ slug });
				setPageData(data);
			} catch {
				setError(
					"Failed to fetch page data. Please check the slug and try again.",
				);
			}
		};

		const handleSlugChange = (value: string) => {
			handleFetchPage(value);
		};

		return (
			<div className="p-4 space-y-2">
				<h3 className="text-lg font-semibold">Page ID: </h3>
				<input
					type="text"
					id="slug"
					value={slug}
					onChange={(e) => handleSlugChange(e.target.value)}
					placeholder="Enter Page ID"
					className="border border-gray-300 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
				<hr className="border-gray-300" />
				{error && <p className="text-red-500 mt-2">{error}</p>}

				<h3 className="text-lg font-semibold">Page Preview 🔽 </h3>
				{blocks && (
					<>
						<Page blocks={blocks} />
					</>
				)}
			</div>
		);
	},
	parameters: {
		actions: { disabled: true },
	},
};
