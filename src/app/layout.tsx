import type { Metadata } from "next";
import "./globals.css";
import { Bona_Nova_SC } from "next/font/google";

//Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// import { JobList } from "./components/FilterSelector";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "JobChaser",
  description:
    "An app for those who need to find their next dream job. See which jobs are currently availible.",
};

const bonaNova = Bona_Nova_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-bona-nova",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bonaNova.className}>
      <body>
        <Providers>
          <Header />
          {/* <JobList /> */}
          <main className="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
