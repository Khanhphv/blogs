export async function GET(_: any, { params }: any) {
  const user = params.user;
  return new Response(`Welcome to my Next application, user: ${user}`);
}
