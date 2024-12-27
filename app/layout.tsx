import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const teachers = Teachers({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Booker",
  description: "collect books to read",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${teachers.className} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

        </ThemeProvider>

      </body>
    </html>
  );
}
