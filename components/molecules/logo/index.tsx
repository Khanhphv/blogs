"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MENU } from "@/constant/app";

export default function Logo() {
  const router = useRouter();
  return (
    <Link href={MENU.HOME}>
      <div className="text-2xl p-2 text-center">K</div>
    </Link>
  );
}
