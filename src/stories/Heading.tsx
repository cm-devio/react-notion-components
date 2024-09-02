import type * as React from "react";

const Heading = ({
	level,
	children,
	id,
}: {
	level: 1 | 2 | 3;
	children: React.ReactNode;
	id?: string;
}) => {
	const Tag = `h${level}` as "h1" | "h2" | "h3";
	const customClassName = `text-${
		level === 1 ? "4xl" : level === 2 ? "3xl" : "2xl"
	} font-semibold`;

	return (
		<Tag className={customClassName} id={id}>
			{children}
		</Tag>
	);
};

export { Heading };
