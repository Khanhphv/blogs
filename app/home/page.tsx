/* eslint-disable @next/next/no-async-client-component */
"use client";
import { PostCard, LightDarkSwitch, Pagination } from "@/components";
import { IProduct, productsGraphql } from "@/graphql";
import moment from "moment";

export default async function Home() {
  const products = await productsGraphql.getAll();
  return (
    <>
      {products.map((product: IProduct, index: number) => {
        if (index === 0) {
          return (
            <PostCard
              key={`product-home-${index}`}
              title={product.title}
              subTitle={product.sub_title}
              publishAt={moment(product.created_at).format(
                "MMMM Do YYYY, h:mm"
              )}
              className="sm:flex-row flex-col mb-5"
              href={`blog/${product.id}`}
            />
          );
        } else {
          return (
            <PostCard
              title={product.title}
              subTitle={product.sub_title}
              publishAt={moment(product.created_at).format(
                "MMMM Do YYYY, h:mm"
              )}
              href={`blog/${product.id}`}
              key={index}
            />
          );
        }
      })}
    </>
  );
}
