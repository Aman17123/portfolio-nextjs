import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Geist,
  Geist_Mono,
  Fira_Code,
  Fira_Sans_Condensed,
  Margarine,
  Noto_Sans_JP,
  Fjalla_One,
  JetBrains_Mono,
} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../../src/app/globals.css";

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

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: "variable",
});

const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-fira-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const margarine = Margarine({
  variable: "--font-margarine",
  subsets: ["latin"],
  weight: "400",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: "variable",
});

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
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
    "React Intern",
    "MERN Stack Intern",
    "Web Developer in Rishikesh",
    "Web Developer in Dehradun",
    "Devbhoomi Infotech",
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
    languages: {
      "en-IN": SITE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Aman Nakoti | MERN Stack & Frontend Developer — React Intern at Devbhoomi Infotech",
    description:
      "Explore the portfolio of Aman Nakoti, a MERN Stack and Frontend Developer and React Intern from Rishikesh, India, building responsive web applications with React, Next.js, Node.js, Express.js, and MongoDB.",
    siteName: "Aman Nakoti Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Aman Nakoti — MERN Stack and Frontend Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aman Nakoti | MERN Stack & Frontend Developer",
    description:
      "Portfolio of Aman Nakoti, a MERN Stack Developer and React Intern from Rishikesh, India, working with React, Next.js, Node.js, Express.js, and MongoDB.",
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

const personJsonLd = {
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rishikesh",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
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
  occupation: {
    "@type": "Occupation",
    name: "React / MERN Stack Intern",
    occupationalCategory: "Web Developer",
    employer: {
      "@type": "Organization",
      name: "Devbhoomi Infotech",
      url: "https://www.devbhoomiinfotech.com/",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aman Nakoti Portfolio",
  url: SITE_URL,
  description:
    "Portfolio of Aman Nakoti, a MERN Stack and Frontend Developer from India specializing in React, Next.js, Node.js, and modern web development.",
  author: {
    "@type": "Person",
    name: "Aman Nakoti",
  },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Aman Nakoti",
    alternateName: "amannakoti",
    url: SITE_URL,
    image: `${SITE_URL}/avatar.png`,
    jobTitle: "React / MERN Stack Intern",
    description:
      "Aman Nakoti is a MERN Stack Developer and Frontend Developer from Rishikesh, India, specializing in React, Next.js, Node.js, Express.js, and MongoDB.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Aman17123",
      "https://www.linkedin.com/in/aman-nakoti/",
      "https://leetcode.com/u/amangate9897/",
    ],
  },
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
            __html: JSON.stringify([personJsonLd, websiteJsonLd, profilePageJsonLd]),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${firaSansCondensed.variable} ${margarine.variable} ${notoSansJP.variable} ${fjallaOne.variable} ${jetbrainsMono.variable} antialiased`}
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
