import { ImgHTMLAttributes } from "react";

export interface ThumbnailProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div className="h-full fixed w-full">
      <img
        {...props}
        style={{
          minHeight: "100vh",
          objectFit: "cover",
          ...props.style,
          position: "absolute",
          zIndex: -1,
        }}
      />
    </div>
  );
};
