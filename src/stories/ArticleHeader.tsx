export const ArticleHeader = ({
	thumbnailImage,
	title,
}: {
	thumbnailImage: string;
	title?: string;
}) => {
	return (
		<header>
			<div className="aspect-[1200/630] overflow-hidden">
				<img
					src={thumbnailImage}
					alt={title ?? "Article Image"}
					className="object-cover"
				/>
			</div>
			<h1 className="text-4xl font-bold">{title}</h1>
			{/* 
			<div className="meta">
				{referenceCategory?.items[0]?.fields.slug &&
					referenceCategory?.items[0]?.fields?.displayName && (
						<div className="reference-category">
							<div className="mb-2 flex items-center">
								<Image
									src="/img/folder.svg"
									alt={
										referenceCategory?.items[0]?.fields?.displayName ??
										"Folder Icon"
									}
									width={16}
									height={16}
								/>
								<div className="ml-1">
									<CustomLink
										id={
											referenceCategory?.items.at(0)?.sys?.id
												? `cat-${referenceCategory?.items.at(0)?.sys.id}`
												: "unknown-cat"
										}
										href={`/referencecat/${referenceCategory?.items[0]?.fields.slug}/`}
									>
										<p className="text-sm text-gray-500">
											{referenceCategory?.items[0]?.fields?.displayName}
										</p>
									</CustomLink>
								</div>
							</div>
						</div>
					)}

				<div className="text-gray-500 my-4">
					{article?.fields?.excerpt && <span>{article?.fields?.excerpt}</span>}
				</div>

				{customTags && (
					<div className="tags">
						{customTags.map((tag, i) => (
							<div
								key={tag?.id}
								className="inline-block bg-gray-100 py-1 px-2 mr-2 hover:bg-gray-200 cursor-pointer"
							>
								<CustomLink
									id={tag?.id != null ? `tag-${tag.id}` : `unknown-tag-${i}`}
									href={`/tags/${tag?.slug}/`}
								>
									<span className="text-xs text-black">#{tag?.name}</span>
								</CustomLink>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="info">
				<div className="flex justify-between my-2">
					<div className="items-center">
						{article ? (
							<CustomLink
								href={`/author/${authorSlug}/`}
								className="items-center flex py-4"
							>
								<div className="h-6 w-6 flex-shrink-0">
									<Image
										className="h-full w-full rounded-full"
										src={thumbnail || defaultImage}
										alt={displayName ?? "Author image"}
										width={100}
										height={100}
									/>
								</div>
								<p className="text-xs ml-1">{displayName}</p>
							</CustomLink>
						) : (
							author && (
								<div className="flex items-center">
									<div className="h-6 w-6 flex-shrink-0">
										<img
											className="h-full w-full rounded-full"
											src={officialAvatar}
											alt={`${author}のアイコン`}
											width={100}
											height={100}
										/>
									</div>
									<p className="text-xs ml-1">{author}</p>
								</div>
							)
						)}
					</div>
					<ShareButtons
						article={{
							fields: {
								title: title,
								slug: slug,
							},
						}}
						event={{
							title,
							category,
							slug,
							id,
						}}
						positionBottom
					/>
				</div>
				{article?.fields?.firstPublishedAt && (
					<>
						<div className="date">
							<div className="flex gap-1 items-center">
								<Image
									src="/img/clock.svg"
									alt={"Clock Icon"}
									width={14}
									height={14}
								/>
								<CustomDate date={article?.fields?.firstPublishedAt} />
							</div>
						</div>
						{isOldArticle(new Date(article.fields.firstPublishedAt)) && (
							<div className="bg-yellow-100 border-2 border-yellow-400 rounded my-8 py-6 px-2">
								<p>
									この記事は公開されてから1年以上経過しています。情報が古い可能性がありますので、ご注意ください。
								</p>
							</div>
						)}
					</>
				)}
			</div> */}
		</header>
	);
};
