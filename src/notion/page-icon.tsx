import * as React from "react";
import {
  BlockType,
  PageValueType,
  BlockValueType,
  CalloutValueType,
  MapImageUrl,
} from "./types";
import { getTextContent, classNames } from "./utils";

const isIconBlock = (
  value: BlockValueType
): value is PageValueType | CalloutValueType => {
  return value.type === "page" || value.type === "callout";
};

interface AssetProps {
  block: BlockType;
  mapImageUrl: MapImageUrl;
  big?: boolean;
  className?: string;
}

const PageIcon: React.FC<AssetProps> = ({
  block,
  className,
  big,
  mapImageUrl,
}) => {
  if (!isIconBlock(block.value)) {
    return null;
  }
  const icon = block.value.format?.page_icon;
  const title = block.value.properties?.title;

  if (icon?.includes("http")) {
    const url = mapImageUrl(icon, block);

    return (
      <img
        className={classNames(className, big ? "w-12 h-12" : "w-8 h-8")}
        src={url}
        alt={title ? getTextContent(title) : "Icon"}
      />
    );
  } else {
    return (
      <span className="text-2xl" role="img" aria-label={icon}>
        {icon}
      </span>
    );
  }
};

export default PageIcon;
