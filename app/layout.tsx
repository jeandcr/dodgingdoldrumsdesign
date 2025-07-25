import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { Albert_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const gfont = Albert_Sans({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

const title =
  "Dodging Doldrums Design | Mechanical engineering consultantcy in Copenhagen";
const desc =
  "A Copenhagen based consultancy for mechanical dimensioning and design, helping dodging technical doldrums.";

export const metadata: Metadata = {
  title: title,
  description: desc,
  verification: {
    google: "nlswUC85SPMzYHTBuaid1RnlHdj6KMmRRSNQx2GPFbs",
  },
  openGraph: {
    type: "website",
    locale: "en",
    title: title,
    description: desc,
    url: "https://www.dodgingdoldrumsdesign.com",
    siteName: "DDD",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: desc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gfont.className}>
      <GoogleTagManager gtmId="GTM-NJPM5CBF" />
      <body className={`antialiased`}>
        <div className="grid grid-rows-[77px_1fr_auto] justify-items-center min-h-screen">
          <header className="bg-black text-white w-full h-full flex justify-between items-center">
            <div className="container mx-auto flex gap-2 px-4 justify-between items-center">
              <Link href="/">
                <Image
                  className="mb-2 hover:invert-50 transition-all sm:max-w-[298px] max-w-[230px]"
                  src="/ddd.avif"
                  alt="Dodging Doldrum Design"
                  width={298}
                  height={50}
                  priority
                />
              </Link>
              <nav>
                <ul className="list-none">
                  <li className="list-item px-4 py-2 bg-white text-black hover:scale-110 transition-all">
                    <Link prefetch href="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {children}
          <footer className="bg-black text-white w-full h-full">
            <div className="container h-full mx-auto p-6 md:p-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="info flex flex-col gap-4 sm:order-first order-last">
                <p>
                  <b>Dodging Doldrums Design</b>
                  <br />
                  Copenhagen, Denmark
                </p>
                <p>
                  <b>CVR:</b> DK-44055147
                </p>
                <p>
                  <b>Mail:</b>{" "}
                  <Link href="mailto:hnc@dodgingdoldrumsdesign.com">
                    hnc@dodgingdoldrumsdesign.com
                  </Link>
                </p>
                <p>
                  <b>Phone:</b>{" "}
                  <Link href={"tel:+4560583232"}>+45 6058 3232</Link>
                </p>
                <p>
                  <Link prefetch href="/cookies-and-privacy-policy">
                    Website cookies and privacy policy
                  </Link>
                </p>
              </div>
              <div className="logo">
                <Link href="/">
                  <Image
                    className="mb-2"
                    src="/ddd_single.avif"
                    alt="Dodging Doldrum Design"
                    width={91}
                    height={100}
                    priority
                  />
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
