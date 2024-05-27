import { MainLayout } from "@/components/layout/main-layout";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return <MainLayout>{children}</MainLayout>;
}
