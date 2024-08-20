import { MainLayout } from "@/components/layout/main-layout";
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
    <div className="flex w-full overflow-hidden flex-row h-screen">
      <div className="bg-secondary border-r-2">
        <Logo />
        <Sidebar classContent="flex-col" />
      </div>
      {children}
    </div>
  );
}
