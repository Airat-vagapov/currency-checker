import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const dmSuns = DM_Sans({
    variable: "--dm-suns",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ECC",
    description: "Easy currency conveter",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}
                <link rel="apple-touch-icon" href="/public/apple-touch-icon.png" />
            </head>
            <body className={`${dmSuns.variable} antialiased`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
