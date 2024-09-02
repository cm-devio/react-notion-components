import { NotionRenderer } from "@/notion/renderer";
import type { BlockMapType } from "@/types";

export interface PageProps {
	blocks: BlockMapType;
}

export const Page = ({ blocks }: PageProps) => {
	return <NotionRenderer blockMap={blocks} />;
};
