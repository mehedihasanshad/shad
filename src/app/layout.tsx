import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { BackToTopButton } from "@/components/back-to-top-button";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mehedi Hasan Shad - Designer & Educator",
  description: "Creating exceptional visual experiences through logo design and motion graphics, while empowering students through personalized education.",
  openGraph: {
    title: "Mehedi Hasan Shad - Designer & Educator",
    description: "Creating exceptional visual experiences through logo design and motion graphics, while empowering students through personalized education.",
    url: "https://mhsshad.com/",
    siteName: "Mehedi Hasan Shad",
    images: [
      {
        url: "/shadphoto.jpg",
        width: 800,
        height: 600,
        alt: "Mehedi Hasan Shad portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan Shad - Designer & Educator",
    description: "Creating exceptional visual experiences through logo design and motion graphics, while empowering students through personalized education.",
    images: ["/shadphoto.jpg"],
    creator: "@mhsshad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async defer data-domain="mhsshad.com" src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
