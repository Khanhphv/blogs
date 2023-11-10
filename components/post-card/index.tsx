import Image from "next/image";
import Img from "@/public/Image.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { HTMLAttributes } from "react";
import Link from "next/link";
export interface IPostCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  publishAt?: string;
  subTitle?: string;
  horizontal?: boolean;
  widthImage?: number;
  href?: string;
}

export const PostCard = (props: IPostCardProps) => {
  const {
    widthImage,
    className,
    horizontal = false,
    title = "UX review presentations",
    publishAt = "Sunday , 1 Jan 2023",
    subTitle = "How do you create compelling presentations that wow your colleagues and impress your managers?",
    href = "",
  } = props;
  return (
    <div
      className={`w-auto flex gap-4 ${className || ""} ${
        horizontal ? "flex-row" : "flex-col"
      }`}
    >
      <Image
        src={Img}
        alt=""
        placeholder="blur"
        quality={100}
        style={{
          height: "auto",
          width: widthImage || "auto",
        }}
      />
      <div className="content flex-grow">
        <div className="text-indigo-800 font-semibold">{publishAt}</div>
        <div className="flex justify-between mt-2">
          <Link href={href} className="text-2xl font-semibold dark:text-white">
            {title}
          </Link>
          <ArrowUpRightIcon width={20} />
        </div>
        <div className="dark:text-white mt-2">{subTitle}</div>
      </div>
    </div>
  );
};
