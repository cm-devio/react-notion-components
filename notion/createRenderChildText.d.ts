import { default as React } from '../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CustomDecoratorComponents, DecorationType } from './types';
export declare const createRenderChildText: (customDecoratorComponents?: CustomDecoratorComponents) => (properties: DecorationType[], heading?: string) => (string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | null | undefined)[];
