import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOONIQUE ENGLISH | 신상윤 영어",
  description: "수능·내신 영어 전문강사",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
