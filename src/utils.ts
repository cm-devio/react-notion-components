import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { BlockMapType, DecorationType, MapImageUrl } from "./types";

export const classNames = (...classes: Array<string | undefined | false>) =>
	classes.filter((a) => !!a).join(" ");

export const getTextContent = (text: DecorationType[]) => {
	return text.reduce((prev, current) => prev + current[0], "");
};

const groupBlockContent = (blockMap: BlockMapType): string[][] => {
	const output: string[][] = [];

	let lastType: string | undefined = undefined;
	let index = -1;

	for (const id of Object.keys(blockMap)) {
		const content = blockMap[id].value.content;

		if (content) {
			for (const blockId of content) {
				const blockType = blockMap[blockId]?.value?.type;

				if (blockType && blockType !== lastType) {
					index++;
					lastType = blockType;
					output[index] = [];
				}

				output[index].push(blockId);
			}
		}

		lastType = undefined;
	}

	return output;
};

export const getListNumber = (blockId: string, blockMap: BlockMapType) => {
	const groups = groupBlockContent(blockMap);
	const group = groups.find((g) => g.includes(blockId));

	if (!group) {
		return;
	}

	return group.indexOf(blockId) + 1;
};

export const defaultMapImageUrl: MapImageUrl = (image, block) => {
	const url = new URL(
		`https://www.notion.so${
			image.startsWith("/image") ? image : `/image/${encodeURIComponent(image)}`
		}`,
	);

	if (block && !image.includes("/images/page-cover/")) {
		const table =
			block.value.parent_table === "space" ? "block" : block.value.parent_table;
		url.searchParams.set("table", table);
		url.searchParams.set("id", block.value.id);
		url.searchParams.set("cache", "v2");
	}

	return url.toString();
};

export const defaultMapPageUrl = (pageId = "") => {
	const formattedPageId = pageId.replace(/-/g, "");

	return `/${formattedPageId}`;
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
