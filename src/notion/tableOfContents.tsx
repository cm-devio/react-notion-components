'use client'

import { useEffect, useState } from 'react'
import { parse } from 'node-html-parser'


const NotionTableOfContents = ({ domHtml }: { domHtml?: string }) => {
	const dom = parse(domHtml || '')
	const headings = Array.from(dom?.querySelectorAll('h2,h3'))
	const [tableOfContents, _] = useState(
		headings?.map((heading) => {
			return {
				level: heading.tagName,
				title: heading.textContent || '',
				href: encodeURIComponent(heading.id),
				selected: false,
				// TODO: 画面描画時にスクロールされるようにしたい
				scrollTop: 0,
			}
		}),
	)

	useEffect(() => {
		window.scrollTo(0, 0)

		const scrollWindow = () => {
			return window.scrollY
		}
		window.addEventListener('scroll', scrollWindow)

		return () => {
			window.removeEventListener('scroll', scrollWindow)
		}
	}, [])

	const select = (index: number) => {
		tableOfContents?.forEach((toc, i) => {
			if (toc?.selected) {
				toc.selected = false
				toc.selected = index === i
			}
		})
	}

	return (
		<div className="lg:mt-8 lg:w-64">
			{tableOfContents?.length ? (
				<p className="text-center w-full mb-8 text-gray-500">目次</p>
			) : (
				''
			)}
			<div>
				{tableOfContents?.map((anchor, index) => (
					<a href={`#${anchor.href}`} key={anchor.href}>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<p
							className={`focus:text-black hover:text-black text-gray-500 p-1 cursor-pointer hover:bg-gray-200 text-sm ${
								anchor.level === 'H3' ? 'ml-4' : ''
							} ${tableOfContents[index]?.selected ? 'bg-gray-200' : ''}`}
							onClick={() => select(index)}
						>
							{anchor.title}
						</p>
					</a>
				))}
			</div>
		</div>
	)
}

export { NotionTableOfContents }
