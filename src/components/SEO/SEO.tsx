import Head from "next/head";
import { useRouter } from "next/router";
import { favicons } from "./favicon";

interface Meta {
  title: string;
  siteName: string;
  description: string;
  url: string;
  image: string;
  type: string;
  robots: string;
}

const defaultMeta: Meta = {
  title: "Next.js + Tailwind CSS + TypeScript Starter",
  siteName: "Next.js + Tailwind CSS + TypeScript Starter",
  description: "A starter for Next.js, Tailwind CSS, and TypeScript",
  url: "https://example.com",
  image: "/favicon/favicon.png",
  type: "website",
  robots: "follow, index",
};

type SEOProps = { pageTitle?: string } & Partial<Meta>;

const SEO = (props: SEOProps) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.pageTitle
    ? `${props.pageTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default SEO;
