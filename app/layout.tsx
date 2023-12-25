import "./globals.css";
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("params", params);
  return (
    <html lang={params.lang || "en"}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
