import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import ClientWrapper from "../component/ClientWrapper";
import CustomCursor from "../component/CustomCursor";
import DisableRightClick from "../component/DisableClick";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://amannakoti.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Aman Nakoti | MERN Stack & Frontend Developer",
    template: "%s | Aman Nakoti",
  },

  description:
    "Portfolio of Aman Nakoti, a MERN Stack and Frontend Developer from India specializing in React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and modern web development.",

  keywords: [
    "Aman Nakoti",
    "Aman Nakoti Portfolio",
    "amannakoti",
    "Frontend Developer in India",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Uttaranchal University",
    "B.Tech CSE Student Portfolio",
    "Rishikesh Developer",
    "Dehradun Developer",
  ],

  authors: [
    {
      name: "Aman Nakoti",
      url: SITE_URL,
    },
  ],

  creator: "Aman Nakoti",
  publisher: "Aman Nakoti",

  verification: {
    google: "vE0JwX71r3_f6zOyox_u19Zh9yg_IN8eXU3mKQSmCwE",
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Aman Nakoti | MERN Stack & Frontend Developer",
    description:
      "Explore the portfolio of Aman Nakoti, a MERN Stack and Frontend Developer building responsive web applications using React, Next.js, Node.js, Express.js, and MongoDB.",
    siteName: "Aman Nakoti Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Aman Nakoti - MERN Stack and Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aman Nakoti | MERN Stack & Frontend Developer",
    description:
      "Portfolio of Aman Nakoti, a MERN Stack and Frontend Developer working with React, Next.js, Node.js, Express.js, and MongoDB.",
    images: ["/avatar.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aman Nakoti",
  alternateName: "amannakoti",
  url: SITE_URL,
  image: `${SITE_URL}/avatar.png`,
  jobTitle: "MERN Stack and Frontend Developer",
  description:
    "B.Tech Computer Science student and MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and modern web development.",
  email: "mailto:www.amannakoti103@gmail.com",

  sameAs: [
    "https://github.com/Aman17123",
    "https://www.linkedin.com/in/aman-nakoti/",
    "https://leetcode.com/u/amangate9897/",
  ],

  knowsAbout: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Three.js",
    "Framer Motion",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "Supabase",
    "UI/UX Design",
    "Figma",
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          <CustomCursor />
          <DisableRightClick />
          {children}
        </ClientWrapper>

        <SpeedInsights />
      </body>
    </html>
  );
}
