const Li = ({
	text,
}: {
	text: (
		| string
		| number
		| boolean
		| JSX.Element
		| Iterable<React.ReactNode>
		| null
		| undefined
	)[];
}) => {
	return (
		<li
			style={{
				listStyleType: "disc",
				paddingLeft: "1.5rem",
				paddingTop: "0.25rem",
				paddingBottom: "0.25rem",
			}}
		>
			{text}
		</li>
	);
};

export { Li };
