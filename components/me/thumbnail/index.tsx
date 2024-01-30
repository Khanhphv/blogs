import { ImgHTMLAttributes } from "react";

export interface ThumbnailProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Thumbnail = (props: ThumbnailProps) => {
  return (
    <img
      {...props}
      style={{
        height: "100vh",
        objectFit: "cover",
        width: "100%",
        ...props.style,
        position: "absolute",
        zIndex: -1,
      }}
    />
  );
};
