export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>its dashboard layout</header>
        {children}
      </body>
    </html>
  );
}
