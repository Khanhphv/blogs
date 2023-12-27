export default async function Home() {
  const getDetails = async () => {
    const res = fetch("http://localhost:3000/api/getDocs");
    const data = await (await res).json();
    return data;
  };
  const message = await getDetails();
  return <section className="flex min-h-screen flex-col p-2"></section>;
}
