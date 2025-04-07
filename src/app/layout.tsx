import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { TanStackProvider } from "@/providers/TanStackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Traffic Data Dashboard",
  description: "Interactive traffic data visualization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TanStackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
