"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MENU } from "@/constant/app";

export default function Logo() {
  const router = useRouter();
  return (
    <Link className="max-sm:hidden" href={MENU.HOME}>
      <Image alt="khnah' blog" width={70} height={70} src="/logo.png" />
    </Link>
  );
}
