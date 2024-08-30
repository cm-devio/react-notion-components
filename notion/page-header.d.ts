import { BlockMapType, MapImageUrl, MapPageUrl } from './types';
import * as React from "react";
interface PageHeaderProps {
    blockMap: BlockMapType;
    mapPageUrl: MapPageUrl;
    mapImageUrl: MapImageUrl;
}
declare const PageHeader: React.FC<PageHeaderProps>;
export default PageHeader;
