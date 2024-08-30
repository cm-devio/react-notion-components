import { BlockMapType, DecorationType, MapImageUrl } from './types';
export declare const classNames: (...classes: Array<string | undefined | false>) => string;
export declare const getTextContent: (text: DecorationType[]) => string;
export declare const getListNumber: (blockId: string, blockMap: BlockMapType) => number | undefined;
export declare const defaultMapImageUrl: MapImageUrl;
export declare const defaultMapPageUrl: (pageId?: string) => string;
