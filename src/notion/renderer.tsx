import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import type React from "react";
import { Block } from "./block";
import type {
	BlockMapType,
	CustomBlockComponents,
	CustomDecoratorComponents,
	MapImageUrl,
	MapPageUrl,
} from "./types";
import { defaultMapImageUrl, defaultMapPageUrl } from "./utils";

export type Tag = {
	id: number;
	name: string;
	slug: string;
};

export type CategoryName = "セミナー" | "会社説明会";

export type Property = {
	Title: {
		id: string;
		type: "title";
		title: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	Description: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"Last Edited Time": {
		id: string;
		type: "last_edited_time";
		last_edited_time: string;
	};
	"Ready to Publish": {
		id: string;
		type: "checkbox";
		checkbox: boolean;
	};
	"Event Date": {
		id: string;
		type: "date";
		date: { start: string };
	};
	"Share Title": {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"No Index": {
		id: string;
		type: "checkbox";
		checkbox: boolean;
	};
	Category: {
		id: string;
		type: "select";
		select: { name: CategoryName };
	};
	Canonical: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"Publish Date": {
		id: string;
		type: "date";
		date: { start: string };
	};
	Slug: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
};

export type NotionData = {
	object: "page";
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: { object: "user"; id: string };
	last_edited_by: { object: "user"; id: string };
	cover: { type: "external"; external: { url: string } };
	icon: null;
	parent: {
		type: "database_id";
		database_id: string;
	};
	archived: boolean;
	in_trash: boolean;
	properties: Property;
	url: string;
	public_url: string;
};

export type MetaData = {
	title: string;
	description: string;
	cover: string;
	slug: string;
	shareTitle: string;
	lastEditedTime: string;
	publishDate: string;
	eventDate: string;
	category: CategoryName;
	canonical: string;
	formId: string;
};

export interface NotionRendererProps {
	blockMap: BlockMapType;
	fullPage?: boolean;
	hideHeader?: boolean;
	mapPageUrl?: MapPageUrl;
	mapImageUrl?: MapImageUrl;
	portalId?: string;

	currentId?: string;
	level?: number;
	customBlockComponents?: CustomBlockComponents;
	customDecoratorComponents?: CustomDecoratorComponents;
	notionData?: NotionData;
	metaData?: MetaData;
}

export const NotionRenderer: React.FC<NotionRendererProps> = ({
	level = 0,
	currentId,
	mapPageUrl = defaultMapPageUrl,
	mapImageUrl = defaultMapImageUrl,
	...props
}) => {
	const { blockMap, portalId } = props;
	const id = currentId || Object.keys(blockMap)[0];
	const currentBlock = blockMap[id];

	if (!currentBlock) {
		if (process.env.NODE_ENV !== "production") {
			console.warn("error rendering block", currentId);
		}
		return null;
	}

	return (
		<>
			<link
				rel="stylesheet"
				href="https://hs.classmethod.jp/hubfs/src/hubspot_form_style.css"
			/>
			<div>
				<HubspotProvider>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-ignore */}
					<Block
						key={id}
						portalId={portalId}
						level={level}
						block={currentBlock}
						mapPageUrl={mapPageUrl}
						mapImageUrl={mapImageUrl}
						{...props}
					>
						{currentBlock?.value?.content?.map((contentId) => (
							<NotionRenderer
								key={contentId}
								portalId={portalId}
								currentId={contentId}
								level={level + 1}
								mapPageUrl={mapPageUrl}
								mapImageUrl={mapImageUrl}
								{...props}
							/>
						))}
					</Block>
				</HubspotProvider>
			</div>
		</>
	);
};
