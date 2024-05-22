import type React from "react";

const CoverImage = ({
	src,
	alt,
	objectPosition,
}: {
	src: string;
	alt: string;
	objectPosition: React.CSSProperties["objectPosition"];
}) => {
	return (
		<img
			src={src}
			alt={alt}
			className="object-contain w-full h-72"
			style={{
				objectPosition,
			}}
		/>
	);
};

export { CoverImage };
