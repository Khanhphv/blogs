export const updatePost = async (data: {
  title: string;
  content: string;
  id: string;
  files: string;
}) => {
  return await fetch("/api/post/add", {
    method: "POST",
    body: JSON.stringify({
      post: data,
    }),
  });
};
