import type { Metadata } from "next";
import "@/src/styles/global.scss";
import { Suspense, useEffect } from "react";
import Header from "@/src/components/Header";
import TopButton from "@/src/components/TopButton";
import Footer from "@/src/components/Footer";
import Section from "@/src/components/Section";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "블로그",
  description: "Generated by create next app",
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
          <Suspense fallback={<h1>로딩중이야~</h1>}>
            <Header/>
          </Suspense>
          <Suspense fallback={<h1>로딩중이야~</h1>}>
          <Section>
            {children}
            <TopButton />
          </Section>
          </Suspense>
          <Suspense fallback={<h1>로딩중이야~</h1>}>
          <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
