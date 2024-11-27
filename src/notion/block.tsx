import { createRenderChildText } from "@/notion/createRenderChildText";
import { Button } from "@/stories/Button";
import { PageIcon } from "@/stories/PageIcon";
import type {
	BlockInterface,
	ContentValueType,
	DecorationType,
	SubDecorationType,
} from "@/types";
import { classNames, getListNumber, getTextContent } from "@/utils";
import type * as React from "react";
import { useEffect, useState } from "react";
import Asset from "./asset";

export const Block: React.FC<BlockInterface> = (props) => {
	const {
		block,
		blockMap,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		children,
		level,
		fullPage,
		mapPageUrl,
		mapImageUrl,
		customDecoratorComponents,
		metaData
	} = props;
	const blockValue = block?.value;

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		const overrideStyle = () => {
			const style = document.createElement("style");
			style.innerHTML = `
				.znc pre:not(.language-css) {
					padding: 16px;
					color: white;
					font-size: 14px;
				}
			`;
			document.head.appendChild(style);
		};

		setIsClient(true);
		overrideStyle();
	}, []);

	const renderComponent = () => {
		const renderChildText = createRenderChildText(customDecoratorComponents);

		switch (blockValue?.type) {
			case "page":
				if (level === 0) {
					if (fullPage) {
						if (!blockValue.properties) {
							return null;
						}

						const { page_cover, page_full_width, page_small_text } =
							blockValue.format || {};

						const pageCover = metaData?.cover || page_cover;

						return (
							<div className="notion">
								<main
									className={classNames(
										"notion-page",
										!pageCover && "notion-page-offset",
										page_full_width && "notion-full-width",
										page_small_text && "notion-small-text",
									)}
								>
									{children}
								</main>
							</div>
						);
					}
					return <main className="notion">{children}</main>;
				}
				if (!blockValue.properties) return null;
				return (
					<a className="notion-page-link" href={mapPageUrl(blockValue.id)}>
						{blockValue.format && (
							<div className="notion-page-icon">
								<PageIcon block={block} mapImageUrl={mapImageUrl} />
							</div>
						)}
						<div className="notion-page-text">
							{renderChildText(blockValue.properties.title)}
						</div>
					</a>
				);
			case "header":
				if (!blockValue.properties) return null;
				return (
					<div className="mt-8 mb-6">
						{renderChildText(blockValue.properties.title, "1")}
					</div>
				);
			case "sub_header":
				if (!blockValue.properties) return null;
				return (
					<div className="my-8">
						{renderChildText(blockValue.properties.title, "2")}
					</div>
				);
			case "sub_sub_header":
				if (!blockValue.properties) return null;
				return (
					<div className="my-8">
						{renderChildText(blockValue.properties.title, "3")}
					</div>
				);
			case "divider":
				return <hr className="my-6 border-t border-gray-300" />;
			case "text": {
				const blockColor = blockValue.format?.block_color;
				if (!blockValue.properties) {
					return <div className="notion-blank">&nbsp;</div>;
				}
				return (
					<p
						className={classNames(blockColor && `notion-${blockColor} `)}
						style={{
							lineHeight: 1.8,
						}}
					>
						{renderChildText(blockValue.properties.title)}
					</p>
				);
			}
			case "bulleted_list":
			case "numbered_list": {
				const wrapList = (content: React.ReactNode, start?: number) =>
					blockValue.type === "bulleted_list" ? (
						<ul
							style={{
								listStyleType: "disc",
								paddingLeft: "1.5rem",
								paddingTop: "0.25rem",
								paddingBottom: "0.25rem",
							}}
						>
							{content}
						</ul>
					) : (
						<ol
							start={start}
							style={{
								listStyleType: "decimal",
								paddingLeft: "1.5rem",
								paddingTop: "0.25rem",
								paddingBottom: "0.25rem",
							}}
						>
							{content}
						</ol>
					);

				let output: JSX.Element | null = null;

				if (blockValue.content) {
					output = (
						<>
							{blockValue.properties && (
								<li>{renderChildText(blockValue.properties.title)}</li>
							)}
							{wrapList(children)}
						</>
					);
				} else {
					output = blockValue.properties ? (
						<li>{renderChildText(blockValue.properties.title)}</li>
					) : null;
				}

				const isTopLevel =
					block.value.type !== blockMap[block.value.parent_id].value.type;
				const start = getListNumber(blockValue.id, blockMap);

				return isTopLevel ? wrapList(output, start) : output;
			}
			case "to_do": {
				const checkbox: { title: DecorationType[] } | undefined = block.value
					.properties as { title: DecorationType[] };
				const { id } = block.value;

				const label: string = checkbox?.title
					.flat(1)
					.filter(
						(ele: string | SubDecorationType[]) => typeof ele === "string",
					)
					.join("");

				const isChecked =
					checkbox &&
					"checked" in checkbox &&
					checkbox.checked &&
					(checkbox.checked as string[][])[0][0] === "Yes";

				return (
					<div>
						<input
							className="notion-checkbox"
							type="checkbox"
							name=""
							id={id}
							checked={isChecked as boolean}
						/>
						<label htmlFor={id}>{label}</label>
					</div>
				);
			}
			case "image":
			case "embed":
			case "figma":
			case "video": {
				const value = block.value as ContentValueType;

				return (
					<figure
						className="notion-asset-wrapper"
						style={
							value.format !== undefined
								? { width: value.format.block_width }
								: undefined
						}
					>
						<Asset block={block} mapImageUrl={mapImageUrl} />

						{value.properties.caption && (
							<figcaption className="notion-image-caption">
								{renderChildText(value.properties.caption)}
							</figcaption>
						)}
					</figure>
				);
			}
			case "code": {
				if (blockValue.properties.title) {
					const content = blockValue.properties.title[0][0];

					const language = blockValue.properties.language[0][0];

					if (language === "JSON") {
						const { type, link, component, text, size } = JSON.parse(content);
						if (component === "button") {
							return (
								<div className="flex items-center justify-center my-8">
									{component && (
										<Button variant={type} size={size}>
											<a href={link} target="_blank" rel="noreferrer">
												{text}
											</a>
										</Button>
									)}
								</div>
							);
						}
					}

					if (language === "HTML") {
						return (
							<div
								className="znc"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{
									__html: content,
								}}
							/>
						);
					}
				}
				return null;
			}
			case "column_list":
				return <div className="notion-row">{children}</div>;
			case "column": {
				const spacerWith = 46;
				const ratio = blockValue.format.column_ratio;
				const columns = Number((1 / ratio).toFixed(0));
				const spacerTotalWith = (columns - 1) * spacerWith;
				const width = `calc((100% - ${spacerTotalWith}px) * ${ratio})`;
				return (
					<>
						<div className="notion-column" style={{ width }}>
							{children}
						</div>
						<div className="notion-spacer" style={{ width: spacerWith }} />
					</>
				);
			}
			case "quote":
				if (!blockValue.properties) return null;
				return (
					<blockquote className="notion-quote">
						{renderChildText(blockValue.properties.title)}
					</blockquote>
				);
			case "collection_view": {
				if (!block) return null;

				const collectionView = block?.collection?.types[0];

				return (
					<div>
						<h3 className="notion-h3">
							{block.collection?.title &&
								renderChildText(block.collection.title)}
						</h3>

						{collectionView?.type === "table" && (
							<div style={{ maxWidth: "100%", marginTop: 5 }}>
								<table className="notion-table">
									<thead>
										<tr className="notion-tr">
											{collectionView.format?.table_properties
												?.filter((p) => p.visible)
												.map((gp) => (
													<th
														className="notion-th"
														key={`th-${gp.property}`}
														style={{ minWidth: gp.width }}
													>
														{block.collection?.schema[gp.property]?.name}
													</th>
												))}
										</tr>
									</thead>

									<tbody>
										{block?.collection?.data.map((row) => (
											<tr className="notion-tr" key={`row-${row.id}`}>
												{collectionView.format?.table_properties
													?.filter((p) => p.visible)
													.map((gp, index) => (
														<td
															key={`row-${row.id}-${index}`}
															className={`notion-td ${
																gp.property === "title" ? "notion-bold" : ""
															}`}
														>
															{renderChildText([
																row[
																	block.collection?.schema[gp.property]?.name ??
																		""
																] as unknown as DecorationType,
															])}
														</td>
													))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}

						{collectionView?.type === "gallery" && (
							<div className="notion-gallery">
								{block.collection?.data.map((row) => (
									<div key={`col-${row.id}`} className="notion-gallery-card">
										<div className="notion-gallery-content">
											{collectionView.format?.gallery_properties
												?.filter((p) => p.visible)
												.map((gp, idx) => {
													const propertyName =
														block.collection?.schema[gp.property]?.name;
													const propertyValue: DecorationType[] = propertyName
														? [row[propertyName] as unknown as DecorationType]
														: ([] as DecorationType[]);
													return (
														<p
															key={(
																propertyValue[0] as unknown as DecorationType
															).toString()}
															className={`notion-gallery-data ${
																idx === 0 ? "is-first" : ""
															}`}
														>
															{getTextContent([propertyValue[0]])}
														</p>
													);
												})}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				);
			}
			case "callout":
				return (
					<div
						className={classNames(
							"notion-callout",
							blockValue.format.block_color &&
								`notion-${blockValue.format.block_color}`,
							blockValue.format.block_color &&
								`notion-${blockValue.format.block_color}_co`,
						)}
					>
						<div>
							<PageIcon block={block} mapImageUrl={mapImageUrl} />
						</div>
						<div className="notion-callout-text">
							{renderChildText(blockValue.properties.title)}
						</div>
					</div>
				);
			case "bookmark": {
				const link = blockValue.properties.link;
				const title = blockValue.properties.title ?? link;
				const description = blockValue.properties.description;
				const block_color = blockValue.format?.block_color;
				const bookmark_icon = blockValue.format?.bookmark_icon;
				const bookmark_cover = blockValue.format?.bookmark_cover;

				return (
					<div className="notion-row">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className={classNames(
								"notion-bookmark",
								block_color && `notion-${block_color}`,
							)}
							href={link[0][0]}
						>
							<div>
								<div className="notion-bookmark-title">
									{renderChildText(title)}
								</div>
								{description && (
									<div className="notion-bookmark-description">
										{renderChildText(description)}
									</div>
								)}

								<div className="notion-bookmark-link">
									{bookmark_icon && (
										<img src={bookmark_icon} alt={getTextContent(title)} />
									)}
									<div>{renderChildText(link)}</div>
								</div>
							</div>
							{bookmark_cover && (
								<div className="notion-bookmark-image">
									<img src={bookmark_cover} alt={getTextContent(title)} />
								</div>
							)}
						</a>
					</div>
				);
			}
			case "toggle":
				return (
					<details className="notion-toggle">
						<summary>{renderChildText(blockValue.properties.title)}</summary>
						<div>{children}</div>
					</details>
				);
			case "collection_view_page":
				return <div>{children}</div>;
			case "table":
				return <table className="table-auto">{children}</table>;
			case "table_row":
				return (
					<tr className="flex flex-row">
						{Object.values(blockValue.properties).map((text) => {
							return (
								<td key={`td-${blockValue.id}`} className="p-2 w-full border">
									{renderChildText(text)}
								</td>
							);
						})}
					</tr>
				);

			default:
				if (process.env.NODE_ENV !== "production") {
					console.error(`Unsupported type ${block?.value?.type}`);
				}
				return <div />;
		}
	};

	return <>{isClient && renderComponent()}</>;
};
