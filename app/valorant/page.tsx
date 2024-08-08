import Image from "next/image";
import "./khanh.scss";
import "./buy.scss";
import "./button.css";
import { Metadata } from "next";
import { Video } from "@/components/molecules/video-bg";

export const metadata: Metadata = {
  title: "Valorant / Cs2( faceit,5E,perfectworld )",
  description: "Valorant / Cs2( faceit,5E,perfectworld )",
};

export default function Home() {
  return (
    <>
      <div className="w-full h-full right-0">
        <div
          className=" text-2xl text-white"
          style={{ background: "#F4CE14", overflow: "hidden" }}
        >
          <div className="notice">
            Due to an unexpected issue, please join Discord from the website.
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="top-4 left-0 logo text-white text-5xl font-bold w-full">
            <div className="sign flex justify-center">
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
          <div
            className="fixed logo text-white font-bold flex flex-col items-center"
            style={{ width: "100%", bottom: "8rem" }}
          >
            <a
              className="buy"
              href="https://skydevs.sellpass.io/"
              target="_blank"
            >
              <div className="btn red-btn flex items-center justify-center">
                <span className="dark"></span>
                <span className="label flex items-center gap-4">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ zIndex: 1 }}
                  >
                    <path
                      d="M0.169922 1.3335C0.169922 1.20089 0.2226 1.07371 0.316368 0.979943C0.410137 0.886174 0.537314 0.833496 0.669922 0.833496H2.16992C2.28145 0.833527 2.38977 0.870847 2.47765 0.939521C2.56553 1.00819 2.62793 1.10428 2.65492 1.2125L3.05992 2.8335H14.6699C14.7439 2.83354 14.8169 2.84999 14.8837 2.88165C14.9505 2.91331 15.0095 2.9594 15.0564 3.0166C15.1032 3.07379 15.1368 3.14067 15.1547 3.21242C15.1726 3.28416 15.1744 3.35898 15.1599 3.4315L14.1599 8.4315C14.138 8.54053 14.0804 8.63916 13.9962 8.71178C13.912 8.78441 13.806 8.82688 13.6949 8.8325L4.29792 9.3045L4.58492 10.8335H13.1699C13.3025 10.8335 13.4297 10.8862 13.5235 10.9799C13.6172 11.0737 13.6699 11.2009 13.6699 11.3335C13.6699 11.4661 13.6172 11.5933 13.5235 11.687C13.4297 11.7808 13.3025 11.8335 13.1699 11.8335H4.16992C4.05335 11.8334 3.94049 11.7926 3.85083 11.7181C3.76118 11.6436 3.70037 11.5401 3.67892 11.4255L2.17992 3.4405L1.77992 1.8335H0.669922C0.537314 1.8335 0.410137 1.78082 0.316368 1.68705C0.2226 1.59328 0.169922 1.4661 0.169922 1.3335ZM3.27192 3.8335L4.11192 8.3125L13.2559 7.8535L14.0599 3.8335H3.27192ZM5.16992 11.8335C4.63949 11.8335 4.13078 12.0442 3.75571 12.4193C3.38064 12.7944 3.16992 13.3031 3.16992 13.8335C3.16992 14.3639 3.38064 14.8726 3.75571 15.2477C4.13078 15.6228 4.63949 15.8335 5.16992 15.8335C5.70036 15.8335 6.20906 15.6228 6.58414 15.2477C6.95921 14.8726 7.16992 14.3639 7.16992 13.8335C7.16992 13.3031 6.95921 12.7944 6.58414 12.4193C6.20906 12.0442 5.70036 11.8335 5.16992 11.8335ZM12.1699 11.8335C11.6395 11.8335 11.1308 12.0442 10.7557 12.4193C10.3806 12.7944 10.1699 13.3031 10.1699 13.8335C10.1699 14.3639 10.3806 14.8726 10.7557 15.2477C11.1308 15.6228 11.6395 15.8335 12.1699 15.8335C12.7004 15.8335 13.2091 15.6228 13.5841 15.2477C13.9592 14.8726 14.1699 14.3639 14.1699 13.8335C14.1699 13.3031 13.9592 12.7944 13.5841 12.4193C13.2091 12.0442 12.7004 11.8335 12.1699 11.8335ZM5.16992 12.8335C5.43514 12.8335 5.68949 12.9389 5.87703 13.1264C6.06456 13.3139 6.16992 13.5683 6.16992 13.8335C6.16992 14.0987 6.06456 14.3531 5.87703 14.5406C5.68949 14.7281 5.43514 14.8335 5.16992 14.8335C4.90471 14.8335 4.65035 14.7281 4.46282 14.5406C4.27528 14.3531 4.16992 14.0987 4.16992 13.8335C4.16992 13.5683 4.27528 13.3139 4.46282 13.1264C4.65035 12.9389 4.90471 12.8335 5.16992 12.8335ZM12.1699 12.8335C12.4351 12.8335 12.6895 12.9389 12.877 13.1264C13.0646 13.3139 13.1699 13.5683 13.1699 13.8335C13.1699 14.0987 13.0646 14.3531 12.877 14.5406C12.6895 14.7281 12.4351 14.8335 12.1699 14.8335C11.9047 14.8335 11.6504 14.7281 11.4628 14.5406C11.2753 14.3531 11.1699 14.0987 11.1699 13.8335C11.1699 13.5683 11.2753 13.3139 11.4628 13.1264C11.6504 12.9389 11.9047 12.8335 12.1699 12.8335Z"
                      fill="white"
                    ></path>
                  </svg>
                  Buy Now
                </span>
              </div>
            </a>
          </div>
          <div
            className="fixed  flex flex-col items-end"
            style={{
              bottom: "3rem",
              right: "2rem",
              gap: "2rem",
            }}
          >
            <a target="_blank" href="https://discord.com/invite/wXWvWWryfe">
              <Image
                className="discord"
                alt="discord"
                src={"/discord.png"}
                height={50}
                width={50}
              />
            </a>
            <a target="_blank" href="https://t.me/skydevswtf">
              <Image
                className="discord"
                alt="discord"
                src={"/telegram.png"}
                height={50}
                width={50}
              />
            </a>
          </div>
        </div>
      </div>
      <Video />
    </>
  );
}
