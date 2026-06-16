import type { Metadata } from "next";

export const PUBLISHER_NAME = "MoonLeaf AB";
export const SITE_URL = "https://www.moonleafearth.com";
export const SITE_TAGLINE = "Technology in service of ecological conservation.";

export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/moonleaf-og.png`,
  width: 1200,
  height: 630,
  alt: "MoonLeaf AB — technology in service of ecological conservation",
};

export const HOME_DESCRIPTION =
  "MoonLeaf AB builds technology in service of ecological conservation, bringing its projects together under one roof.";

export function siteTitle(title: string): string {
  if (!title || title === PUBLISHER_NAME) return PUBLISHER_NAME;
  if (title.includes(PUBLISHER_NAME)) return title;
  return `${title} | ${PUBLISHER_NAME}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = siteTitle(title);
  const url = new URL(path, SITE_URL).toString();

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: PUBLISHER_NAME,
      type: "website",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
