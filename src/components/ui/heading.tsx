import type * as React from "react";

const Heading = ({
	level,
	children,
}: {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	objectPosition?: string;
}) => {
	const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	const customClassName = `text-${
		level === 1 ? "xl" : level === 2 ? "3xl" : "2xl"
	} font-semibold text-red`;

	return <Tag className={customClassName}>{children}</Tag>;
};

export { Heading };
