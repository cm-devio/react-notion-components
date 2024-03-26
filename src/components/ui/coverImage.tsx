import React from "react";

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
      className="w-full h-full object-cover"
      style={{
        objectPosition,
      }}
    />
  );
};

export { CoverImage };
