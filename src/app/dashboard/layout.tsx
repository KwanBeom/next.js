export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer>
        <span>footer</span>
      </footer>
    </html>
  );
}
