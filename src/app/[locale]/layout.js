import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { AuthProvider } from "../context/AuthContext";
import LoadingWrapper from "../components/LoadingWrapper";

const etab = localFont({
  src: "../../fonts/etab.otf",
  display: "swap",
  variable: "--font-etab",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | أسرة ال ملحم",
    default: "أسرة ال ملحم",
  },
  description: {
    en: "Official website for Al Melhem Family",
    ar: "الموقع الرسمي لأسرة آل ملحم",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default async function RootLayout({ children, params }) {
  // Get locale from Next.js routing params
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound(); // Stops rendering if locale is invalid
  }
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`antialiased ${
        locale === "ar" ? etab.variable : geistSans.variable
      }`}
    >
      <body>
        <NextIntlClientProvider locale={locale}>
          <AuthProvider>
            <LoadingWrapper>{children}</LoadingWrapper>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
