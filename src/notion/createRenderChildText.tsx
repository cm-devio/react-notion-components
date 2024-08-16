import React from "react";
import type {
	CustomDecoratorComponentProps,
	CustomDecoratorComponents,
	DecorationType,
	SubDecorationType,
} from "./types";

export const createRenderChildText =
	(customDecoratorComponents?: CustomDecoratorComponents) =>
	(properties: DecorationType[], heading?: string) => {
		return properties?.map(([text, decorations]) => {
			switch (heading) {
				case "1": {
					return (
						<>
							<h1 className="text-3xl font-bold" key={text}>
								{text}
								<hr className="my-2 border-t border-gray-300" />
							</h1>
						</>
					);
				}
				case "2": {
					return (
						<>
							<h2 className="text-2xl font-bold" key={text}>
								{text}
								<hr className="my-2 border-t border-gray-300" />
							</h2>
						</>
					);
				}
				case "3": {
					return (
						<h3 className="text-xl font-bold" key={text}>
							{text}
						</h3>
					);
				}
			}

			if (!decorations) {
				return <React.Fragment key={text}>{text}</React.Fragment>;
			}

			return decorations.reduceRight(
				(element: React.ReactNode, decorator: SubDecorationType) => {
					const renderText = () => {
						switch (decorator[0]) {
							case "h":
								return (
									<span key={decorator[0]} className={`notion-${decorator[1]}`}>
										{element}
									</span>
								);
							case "c":
								return (
									<code
										key={decorator[0]}
										className="text-red-500 bg-gray-300 p-1 rounded-sm bg-opacity-50"
									>
										{element}
									</code>
								);
							case "b":
								return (
									<b className="font-semibold" key={decorator[0]}>
										{element}
									</b>
								);
							case "i":
								return <em key={decorator[0]}>{element}</em>;
							case "s":
								return <s key={decorator[0]}>{element}</s>;
							case "a":
								return (
									<a
										style={{ color: "#0070f3" }}
										href={decorator[1]}
										key={decorator[0]}
									>
										{element}
									</a>
								);

							default:
								return (
									<React.Fragment key={decorator[0]}>
										<span>{element}</span>
									</React.Fragment>
								);
						}
					};

					const CustomComponent = customDecoratorComponents?.[decorator[0]];

					if (CustomComponent) {
						const props: CustomDecoratorComponentProps<(typeof decorator)[0]> =
							decorator[1]
								? {
										decoratorValue: decorator[1],
										renderComponent: () => null,
									}
								: { decoratorValue: "", renderComponent: () => null };

						const newLocal = (
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							<CustomComponent
								key={text}
								{...props}
								renderComponent={renderText}
							>
								{renderText()}
							</CustomComponent>
						);
						return newLocal;
					}

					return renderText();
				},
				text,
			);
		});
	};
