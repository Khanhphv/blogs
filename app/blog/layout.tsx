import { VerticalLayout } from "@/components/layout/vertical-layout";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return <VerticalLayout>{children}</VerticalLayout>;
}
