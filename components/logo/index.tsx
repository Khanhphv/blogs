"use client";
import Link from "next/link";
import { MENU_ROUTE } from "@/app/config";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <Link href={MENU_ROUTE.HOME}>
      <Image alt="khnah' blog" width={70} height={70} src="/logo.png" />
    </Link>
  );
}
