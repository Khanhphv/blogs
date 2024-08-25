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
  return <MainLayout>{children}</MainLayout>;
}
