import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	// BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { CoverImage } from "@/components/ui/coverImage";
import { Slash } from "lucide-react";
import type * as React from "react";
import Asset from "./asset";
import Code from "./code";
import { createRenderChildText } from "./createRenderChildText";
import PageHeader from "./page-header";
import PageIcon from "./page-icon";
import type {
	// BlockValueProp,
	BlockInterface,
	ContentValueType,
} from "./types";
import {
	classNames,
	getTextContent,
	// getListNumber
} from "./utils";

export const Block: React.FC<BlockInterface> = (props) => {
	const {
		block,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		children,
		level,
		fullPage,
		hideHeader,
		blockMap,
		mapPageUrl,
		mapImageUrl,
		// customBlockComponents,
		customDecoratorComponents,
		// metaData,
	} = props;

	const blockValue = block?.value;

	const renderComponent = () => {
		const renderChildText = createRenderChildText(customDecoratorComponents);

		const CustomBreadcrumb = () => {
			return (
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage>
								{blockValue.properties.title[0][0]}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			);
		};

		// const Title = () => {
		// 	return (
		// 		<div className="flex items-center justify-between space-x-4 mt-8 mb-6">
		// 			{/* {pageIcon && <PageIcon block={block} big mapImageUrl={mapImageUrl} />} */}
		// 			{renderChildText(blockValue.properties.title, "1")}
		// 		</div>
		// 	);
		// };

		switch (blockValue?.type) {
			case "page":
				if (level === 0) {
					if (fullPage) {
						if (!blockValue.properties) {
							return null;
						}

						const {
							// page_icon,
							page_cover,
							page_cover_position,
							page_full_width,
							page_small_text,
						} = blockValue.format || {};

						// const {
						// 	title,
						// 	description,
						// 	slug,
						// 	shareTitle,
						// 	lastEditedTime,
						// 	publishDate,
						// 	eventDate,
						// 	categor,
						// 	tags,
						// 	authors,
						// 	canonical,
						// } = metaData;

						const pageCover = page_cover;
						return (
							<div className="notion">
								{!hideHeader && (
									<PageHeader
										blockMap={blockMap}
										mapPageUrl={mapPageUrl}
										mapImageUrl={mapImageUrl}
									/>
								)}
								{pageCover && (
									<div className="w-full relative overflow-hidden rounded-b-3xl bg-gray-200 mb-8 h-48 md:h-64">
										<CoverImage
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											// @ts-ignore
											src={pageCover}
											alt={getTextContent(blockValue.properties.title)}
											objectPosition={page_cover_position}
										/>
									</div>
								)}
								<main
									className={classNames(
										"notion-page",
										!pageCover && "notion-page-offset",
										page_full_width && "notion-full-width",
										page_small_text && "notion-small-text",
									)}
								>
									{/* <div className="space-y-4">
										<CustomBreadcrumb />
									</div> */}

									{/* <div className="mt-3 mb-1">
										<Title />
									</div> */}

									{/* <div className="flex flex-row flex-wrap items-center justify-start">
										{metaData?.tags?.length &&
											metaData?.tags.map((tag) => (
												<a
													key={tag}
													href={`/tags/${tag}`}
													className="mx-1 p-1 border border-gray-400 rounded-xl text-xs"
												>
													{tag}
												</a>
											))}
									</div> */}

									{/* <div className="my-2">
										<span>Publish on: </span>
										<span>
											{new Date(blockValue.created_time).toDateString()}
										</span>
									</div> */}

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
					<div className="my-6 mb-4">
						{renderChildText(blockValue.properties.title, "2")}
					</div>
				);
			case "sub_sub_header":
				if (!blockValue.properties) return null;
				return (
					<div className="my-4 mb-2">
						{renderChildText(blockValue.properties.title, "3")}
					</div>
				);
			case "divider":
				return <hr className="my-6 border-t border-gray-300" />;
			case "text":
				const blockColor = blockValue.format?.block_color;
				if (!blockValue.properties) {
					return <div className="notion-blank">&nbsp;</div>;
				}
				return (
					<p className={classNames(blockColor && `notion-${blockColor}`)}>
						{renderChildText(blockValue.properties.title)}
					</p>
				);
			case "bulleted_list":
				if (!blockValue.properties) return null;
				return (
					<li className="list-disc">
						{renderChildText(blockValue.properties.title)}
					</li>
				);
			case "numbered_list":
				if (!blockValue.properties) return null;

				return (
					<ol className="list-decimal">
						{renderChildText(blockValue.properties.title)}
					</ol>
				);

			// const output: JSX.Element | null = null;

			// switch (blockValue.type) {
			//   // case "paragraph":
			//   //   // code for paragraph block
			//   //   break;
			//   // case "header":
			//   //   // code for header block
			//   //   break;
			//   // case "sub_header":
			//   //   // code for sub_header block
			//   //   break;
			//   // case "sub_sub_header":
			//   //   // code for sub_sub_header block
			//   //   break;
			//   // case "divider":
			//   //   // code for divider block
			//   //   break;
			//   // case "text":
			//   //   // code for text block
			//   //   break;
			//   // case "to_do":
			//   //   // code for to_do block
			//   //   break;
			//   default:
			//     break;
			// }

			// return output;

			case "to_do":
				/**
				 * There are only 3 possible cases when no nested to_dos:
				 * 1. properties: {title: [["test"]], checked: [["No"]]}
				 * 2. properties: {title: [["test"]], checked: [["Yes"]]}
				 * 3. properties: {title: [["test"]]}
				 */
				const checkbox = block.value.properties;
				const { id } = block.value;

				// remove other styles in to-do.
				const label: string = checkbox?.title
					.flat(1) // only flatten the first level
					.filter((ele: string | Array<string>) => typeof ele === "string")
					.join("");

				const isChecked =
					checkbox?.checked && checkbox?.checked[0][0] === "Yes";

				return (
					<div>
						<input
							className="notion-checkbox"
							type="checkbox"
							name=""
							id={id}
							checked={isChecked}
						/>
						<label htmlFor={id}>{label}</label>
					</div>
				);
			case "image":
			case "embed":
			case "figma":
			case "video":
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
			case "code": {
				// const ex = {
				// 	region: "na1",
				// 	portalId: "21302757",
				// 	formId: "8b753f41-d17d-4f77-8759-a87c063e9e70",
				// 	cssClass: "cm-form",
				// 	translations: {
				// 		ja: {
				// 			submissionErrors: {
				// 				MISSING_REQUIRED_FIELDS:
				// 					"赤枠は必須項目です。入力内容を確認してください。",
				// 			},
				// 		},
				// 	},
				// };

				if (blockValue.properties.title) {
					const content = blockValue.properties.title[0][0];
					// if (
					// 	content.includes('id="hubspot"') &&
					// 	content.includes("data-formid")
					// ) {
					// 	const formId = content.split('data-formid="')[1].split('"')[0];
					// 	return (
					// 		// <HubSpotForm />
					// 	);
					// }
					const language = blockValue.properties.language[0][0];

					if (language === "JSON") {
						const { type, link, component, text } = JSON.parse(content);
						if (component === "button") {
							const openNewTab = () => {
								window.open(link, "_blank");
							};
							return (
								<div className="flex items-center justify-center my-8">
									{component && (
										<Button variant={type} onClick={openNewTab}>
											{text}
										</Button>
									)}
								</div>
							);
						}
						if (component === "breadcrumb") {
							return (
								<div className="my-8">
									<CustomBreadcrumb />
								</div>
							);
						}
					}
					return (
						<Code
							key={blockValue.id}
							language={language || ""}
							code={content}
						/>
					);
				}
				return null;
			}
			case "column_list":
				return <div className="notion-row">{children}</div>;
			case "column":
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
			case "quote":
				if (!blockValue.properties) return null;
				return (
					<blockquote className="notion-quote">
						{renderChildText(blockValue.properties.title)}
					</blockquote>
				);
			case "collection_view":
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
												.map((gp, index) => (
													<th
														className="notion-th"
														key={index}
														style={{ minWidth: gp.width }}
													>
														{block.collection?.schema[gp.property]?.name}
													</th>
												))}
										</tr>
									</thead>

									<tbody>
										{block?.collection?.data.map((row, index) => (
											<tr className="notion-tr" key={index}>
												{collectionView.format?.table_properties
													?.filter((p) => p.visible)
													.map((gp, index) => (
														<td
															key={index}
															className={
																"notion-td " +
																(gp.property === "title" ? "notion-bold" : "")
															}
														>
															{
																renderChildText(
																	row[
																		block.collection?.schema[gp.property]
																			?.name ?? ""
																	],
																)!
															}
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
								{block.collection?.data.map((row, i) => (
									<div key={`col-${i}`} className="notion-gallery-card">
										<div className="notion-gallery-content">
											{collectionView.format?.gallery_properties
												?.filter((p) => p.visible)
												.map((gp, idx) => {
													const propertyName =
														block.collection?.schema[gp.property]?.name;
													const propertyValue = propertyName
														? [row[propertyName]]
														: [];
													return (
														<p
															key={idx + "item"}
															className={
																"notion-gallery-data " +
																(idx === 0 ? "is-first" : "")
															}
														>
															{getTextContent(propertyValue[0])}
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
			case "bookmark":
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
								<td className="p-2 w-full border">{renderChildText(text)}</td>
							);
						})}
					</tr>
				);

			default:
				if (process.env.NODE_ENV !== "production") {
					console.log("Unsupported type " + block?.value?.type);
				}
				return <div />;
		}
	};

	return renderComponent();
};
