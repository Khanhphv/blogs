import Image from "next/image";
import "./khanh.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valorant / Cs2( faceit,5E,perfectworld )",
  description: "Valorant / Cs2( faceit,5E,perfectworld )",
};

export default function Home() {
  return (
    <>
      <div className="w-full h-full fixed right-0">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="fixed top-4 left-4 logo text-white text-5xl font-bold">
            <div className="sign">
              <span className="fast-flicker">S</span>ky
              <span className="flicker">D</span>
              evs
            </div>
          </div>
          <div className="outCircle">
            <div className="inner" style={{ animationFillMode: "forwards" }}>
              <div className="marker"></div>
              <div className="marker2"></div>
            </div>
            <Image
              alt="valorant"
              width="200"
              height="200"
              src="/logo-white.png"
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
      </div>
      <video
        // controls
        className="fixed"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          right: 0,
          bottom: 0,
          zIndex: -1,
          objectFit: "cover",
        }}
        autoPlay
        muted
        src="/video.mp4"
      ></video>
    </>
  );
}
