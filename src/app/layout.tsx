import type { Metadata } from "next";
import "@/src/styles/global.scss";
import Header from "@/src/components/layouts/Header";
import TopButton from "@/src/components/common/TopButton";
import Footer from "@/src/components/layouts/Footer";
import Section from "@/src/components/ui/Section";
import { ThemeProvider } from "@/src/components/layouts/ThemeProvider";

export const metadata: Metadata = {
  title: "블로그",
  description: "개발지식과 경험을 공유합니다.",
  openGraph: {
    title: "배영기 개발 블로그",
    description: "개발지식과 경험을 공유합니다.",
    siteName: "배영기 개발 블로그",
    type: "website",
    images: [`/images/og/og_image.png`]
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <body >
        <ThemeProvider>
          <Header/>
          <Section>
            {children}
            <TopButton />
          </Section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
