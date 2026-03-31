import AdminShell from './AdminShell';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} style={{ margin: 0 }}>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
