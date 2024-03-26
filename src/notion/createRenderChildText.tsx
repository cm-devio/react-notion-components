import React from "react";
import {
  CustomDecoratorComponentProps,
  CustomDecoratorComponents,
  DecorationType,
  SubDecorationType,
} from "./types";

export const createRenderChildText =
  (customDecoratorComponents?: CustomDecoratorComponents) =>
  (properties: DecorationType[], heading?: string) => {
    return properties?.map(([text, decorations], i) => {
      switch (heading) {
        case "1": {
          return (
            <h1 className="text-3xl font-semibold" key={i}>
              {text}
            </h1>
          );
        }
        case "2": {
          return (
            <h2 className="text-2xl font-semibold" key={i}>
              {text}
            </h2>
          );
        }
        case "3": {
          return (
            <h3 className="text-xl font-semibold" key={i}>
              {text}
            </h3>
          );
        }
      }

      if (!decorations) {
        return <React.Fragment key={i}>{text}</React.Fragment>;
      }

      return decorations.reduceRight(
        (element: React.ReactNode, decorator: SubDecorationType, i) => {
          const renderText = () => {
            switch (decorator[0]) {
              case "h":
                return (
                  <span key={i} className={`notion-${decorator[1]}`}>
                    {element}
                  </span>
                );
              case "c":
                return (
                  <code
                    key={i}
                    className="text-red-500 bg-gray-300 p-1 rounded-sm bg-opacity-50"
                  >
                    {element}
                  </code>
                );
              case "b":
                return (
                  <b className="font-semibold" key={i}>
                    {element}
                  </b>
                );
              case "i":
                return <em key={i}>{element}</em>;
              case "s":
                return <s key={i}>{element}</s>;
              case "a":
                return (
                  <a
                    className="text-inherit break-all underline"
                    href={decorator[1]}
                    key={i}
                  >
                    {element}
                  </a>
                );

              default:
                return <React.Fragment key={i}>{element}</React.Fragment>;
            }
          };

          const CustomComponent = customDecoratorComponents?.[decorator[0]];

          if (CustomComponent) {
            const props = (
              decorator[1]
                ? {
                    decoratorValue: decorator[1],
                  }
                : {}
            ) as CustomDecoratorComponentProps<(typeof decorator)[0]>;

            return (
              <CustomComponent
                key={i}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(props as any)}
                renderComponent={renderText}
              >
                {text}
              </CustomComponent>
            );
          }

          return renderText();
        },
        <>{text}</>
      );
    });
  };
