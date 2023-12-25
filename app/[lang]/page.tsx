import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";

export default await function Home() {
  return <section className="flex min-h-screen flex-col p-2"></section>;
};
