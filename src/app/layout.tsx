import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "../component/ClientWrapper";
import CustomCursor from "../component/CustomCursor";
import DisableRightClick from "../component/DisableClick";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Nakoti | MERN Stack Developer & Frontend Developer in India",
  description:
    "Professional web developer portfolio of Aman Nakoti, a Frontend Developer and MERN Stack Developer in India specializing in React, Next.js, Node.js, MongoDB, Tailwind CSS, and custom web animations. Explore projects, skills, and coding experience.",
  keywords: [
    "Frontend Developer in India",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Aman Nakoti",
    "Web Developer India",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Uttaranchal University",
    "B.Tech CS Student Portfolio",
    "Rishikesh Developer",
  ],
  authors: [{ name: "Aman Nakoti", url: "https://portfolio-nextjs-sable-one.vercel.app/" }],
  creator: "Aman Nakoti",
  metadataBase: new URL("https://portfolio-nextjs-sable-one.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://portfolio-nextjs-sable-one.vercel.app/",
    title: "Aman Nakoti | MERN Stack Developer & Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Aman Nakoti, a Frontend Developer and MERN Stack Developer in India crafting responsive web applications with React, Next.js, and Node.js.",
    siteName: "Aman Nakoti Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Aman Nakoti - Frontend & MERN Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Nakoti | MERN Stack & React Next.js Developer Portfolio",
    description:
      "B.Tech CS Student & MERN Stack Developer building modern web experiences using React, Next.js, Node.js, MongoDB, and Tailwind CSS.",
    images: ["/avatar.png"],
    creator: "@amannakoti",
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

// JSON-LD structured data for Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aman Nakoti",
  url: "https://portfolio-nextjs-sable-one.vercel.app/",
  image: "https://portfolio-nextjs-sable-one.vercel.app/avatar.png",
  jobTitle: "Frontend & MERN Stack Developer",
  description:
    "B.Tech Computer Science student and MERN Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern web experiences. Passionate about UI/UX design and building high-performance web applications.",
  email: "www.amannakoti103@gmail.com",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientWrapper>
          <CustomCursor />
          <DisableRightClick />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
