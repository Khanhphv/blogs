import { Post } from "@/types/post";

export const updatePost = async (data: Post) => {
  return await fetch("/api/post/add", {
    method: "POST",
    body: JSON.stringify({
      post: data,
    }),
  });
};

export const createPost = async (data: Post) => {
  return await fetch("/api/post/add", {
    method: "POST",
    body: JSON.stringify({
      post: data,
    }),
  });
};

export const detelePost = async (id: string) => {
  return await fetch("/api/post/delete", {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
  });
};
