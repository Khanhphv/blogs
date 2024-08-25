import Logo from "@/components/logo";
import { Sidebar } from "@/components/navbar";
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="flex w-full overflow-hidden max-sm:flex-col-reverse max-sm:max-h-screen">
      <div className="flex bg-secondary border-r-2 flex-col max-sm:flex-row ">
        <Logo />
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
