import { BlockType, MapImageUrl } from './types';
import type * as React from "react";
interface AssetProps {
    block: BlockType;
    mapImageUrl: MapImageUrl;
    big?: boolean;
    className?: string;
}
declare const PageIcon: React.FC<AssetProps>;
export default PageIcon;
