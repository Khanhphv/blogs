export const login = async (data: { username: string; password: string }) => {
  return await fetch("/api/auth/login", {
    method: "PUT",
    body: JSON.stringify({
      ...data,
    }),
  });
};
