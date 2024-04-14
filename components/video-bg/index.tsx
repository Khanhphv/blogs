"use client";

import { useState } from "react";

export const Video = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  return (
    <>
      <video
        className="fixed"
        style={
          !isLoading
            ? {
                minWidth: "100%",
                minHeight: "100%",
                right: 0,
                bottom: 0,
                zIndex: -1,
                objectFit: "cover",
              }
            : {
                display: "none",
              }
        }
        autoPlay
        muted
        loop
        src="/video.mp4"
        onCanPlayThrough={() => {
          setLoading(false);
        }}
      ></video>
      {isLoading && (
        <img
          className="fixed"
          src="bg.webp"
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            right: 0,
            bottom: 0,
            zIndex: -1,
            objectFit: "cover",
          }}
        />
      )}
    </>
  );
};
