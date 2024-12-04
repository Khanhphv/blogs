export const loginWithSocical = async (user: any) => {
  const url = `${process.env.NEXT_PUBLIC_API}/login`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
  return res;
};
