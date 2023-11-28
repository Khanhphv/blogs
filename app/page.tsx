import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Khanh's page",
  description: "Hi everyone",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="container">
        <p className="text-3xl">Hi</p>
      </div>
    </main>
  );
}
