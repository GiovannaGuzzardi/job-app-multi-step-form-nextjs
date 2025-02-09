import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formulário Multi-Steps",
  description: "Formulário com múltiplas etapas ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased bg-gradient-to-r from-cyan-500 to-cyan-200 h-[100vh] `}
      >
        {children}
      </body>
    </html>
  );
}
