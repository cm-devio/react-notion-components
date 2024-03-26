import React from "react";
import {
  BlockMapType,
  MapPageUrl,
  MapImageUrl,
  CustomBlockComponents,
  CustomDecoratorComponents,
} from "./types";
import { Block } from "./block";
import { defaultMapImageUrl, defaultMapPageUrl } from "./utils";

export interface MetaData {
  tags: { id: string, name: string, color: string }[]
  title: string
  description: string
  cover: string
  publishedOn: string
  slug: string
  hideCover: boolean
  hideCta: boolean
  publish: boolean
  metaTitle: string
  metaDescription: string
}

export interface NotionRendererProps {
  blockMap: BlockMapType;
  fullPage?: boolean;
  hideHeader?: boolean;
  mapPageUrl?: MapPageUrl;
  mapImageUrl?: MapImageUrl;

  currentId?: string;
  level?: number;
  customBlockComponents?: CustomBlockComponents;
  customDecoratorComponents?: CustomDecoratorComponents;
  metaData?: MetaData
}

export const NotionRenderer: React.FC<NotionRendererProps> = ({
  level = 0,
  currentId,
  mapPageUrl = defaultMapPageUrl,
  mapImageUrl = defaultMapImageUrl,
  ...props
}) => {
  const { blockMap } = props;
  const id = currentId || Object.keys(blockMap)[0];
  const currentBlock = blockMap[id];

  if (!currentBlock) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("error rendering block", currentId);
    }
    return null;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Block
      key={id}
      level={level}
      block={currentBlock}
      mapPageUrl={mapPageUrl}
      mapImageUrl={mapImageUrl}
      {...props}
    >
      {currentBlock?.value?.content?.map((contentId) => (
        <NotionRenderer
          key={contentId}
          currentId={contentId}
          level={level + 1}
          mapPageUrl={mapPageUrl}
          mapImageUrl={mapImageUrl}
          {...props}
        />
      ))}
    </Block>
  );
};
