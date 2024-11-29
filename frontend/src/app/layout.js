import "./globals.scss";
import { projectName } from "@/theme/theme-congif";
import { Poppins } from "next/font/google";
import Providers from "@/components/providers/Providers";

const fonts = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={fonts.className} suppressHydrationWarning>
      <head>
        <title>{projectName}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="NextJs web app" />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
