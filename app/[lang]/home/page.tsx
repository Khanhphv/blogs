"use client";
import { productsGraphql } from "@/graphql";

export default async function Home() {
  const data = await productsGraphql.getAll();
  return <></>;
}
