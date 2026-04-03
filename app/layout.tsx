import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phattakhorn Eienpanya | DevOps & Full-Stack Engineer",
  description: "DevOps & Full-Stack Engineer with 3+ years of experience. Expert in CI/CD orchestration, Kubernetes, Docker, React, and cloud infrastructure.",
  keywords: "DevOps, Full-Stack Engineer, Kubernetes, Docker, Jenkins, React, CI/CD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
