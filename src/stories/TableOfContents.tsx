"use client";

import { parse } from "node-html-parser";
import { useEffect, useState } from "react";

export const NotionTableOfContents = ({ domHtml }: { domHtml?: string }) => {
	const dom = typeof domHtml === "string" ? parse(domHtml) : domHtml;
	const headings = dom?.querySelectorAll("h2, h3");
	const [tableOfContents, setTableOfContents] = useState(
		headings?.map((heading) => {
			return {
				level: heading.tagName,
				title: heading.textContent || "",
				href: encodeURIComponent(heading.id),
				selected: false,
				// TODO: 画面描画時にスクロールされるようにしたい
				scrollTop: 0,
			};
		}),
	);

	useEffect(() => {
		window.scrollTo(0, 0);

		const scrollWindow = () => {
			return window.scrollY;
		};
		window.addEventListener("scroll", scrollWindow);

		return () => {
			window.removeEventListener("scroll", scrollWindow);
		};
	}, []);

	const select = (index: number) => {
		setTableOfContents(
			tableOfContents?.map((toc, i) => {
				if (toc?.selected) {
					toc.selected = false;
				}
				if (index === i) {
					toc.selected = true;
				}
				return toc;
			}),
		);
	};

	return (
		<div className="lg:mt-8 lg:w-64">
			{tableOfContents?.length ? (
				<p className="text-center w-full my-8 text-gray-500">目次</p>
			) : (
				""
			)}

			<div
				className="sticky top-0"
				style={{
					paddingTop: "1rem",
					paddingBottom: "1rem",
				}}
			>
				{tableOfContents?.map((anchor, index) => (
					<div
						key={anchor.href}
						style={{
							paddingLeft: "0.25rem",
							paddingBottom: "0.25rem",
						}}
					>
						<a
							href={`#${anchor.href}`}
							className={`focus:text-black hover:text-black text-gray-500 p-1 cursor-pointer hover:bg-gray-200 text-sm ${
								anchor.level === "H3" ? "ml-4" : ""
							} ${tableOfContents[index]?.selected ? "bg-gray-200" : ""}`}
							onClick={() => select(index)}
							style={{ padding: "0.25rem" }}
						>
							{anchor.title}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};
