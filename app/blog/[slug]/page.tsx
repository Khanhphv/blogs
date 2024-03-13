"use client";

import KEditor from "@/components/editor";
import { env } from "process";
import { FormEvent, createRef, useEffect, useRef, useState } from "react";
import axios from "axios";

async function getData(id: string) {
  const api = axios.create({
    baseURL: `${process.env.DOMAIN_URL}/api/`,
  });
  const { data } = await api.get(`getDocs?id=${id}`);
  return data;
  // const data = await axios(`${process.env.DOMAIN_URL}/api/getDocs?id=${id}`, {
  //   cache: "no-store",
  // });

  // const blog = await data.json();

  // if (!data.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }
  // return blog;
}

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const editorRef = createRef<any>();
  // const title = createRef<string>();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: result } = await getData(slug);
      setData({ ...data, ...result });
    };
    slug && fetchData();
  }, [slug]);

  const onUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(editorRef.current);
    const formData = new FormData(e.currentTarget);
    debugger;
    const result = await fetch("/api/post/add", {
      method: "POST",
      body: JSON.stringify({
        post: {
          title: formData.get("title"),
          content: data.content,
          id: slug,
        },
      }),
    });
    console.log("result", result);
  };

  return (
    <div className="container">
      <form onSubmit={onUpdate}>
        <div>My Post: {slug}</div>
        <input
          name="title"
          className="border rounded my-5 py-2 ps-2 w-full"
          value={"xxx"}
          onChange={(e) => {
            console.log("xxx");
            setData({ ...data, title: e.target.value });
          }}
        />

        <KEditor
          onChange={(value) => setData({ ...data, content: value })}
          data={data?.content}
        />
        <button type="submit" className="border bg-primary p-2 mt-2">
          Update
        </button>
      </form>
    </div>
  );
}
