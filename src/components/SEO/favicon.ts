type Favicon = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  color?: string;
  content?: string;
};

export const favicons: Favicon[] = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/favicon/manifest.json",
  },
  {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5",
  },
];
