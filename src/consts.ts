// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "AstroMelody";
export const SITE_TITLE = "Abhi Alderman";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";
export const LIGHT_THEME = 'corporate';
export const DARK_THEME = 'halloween';

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/core-concepts-concepts-why-astro/", title: "Astro" },
  { href: "/posts/assets-guides-styling/", title: "Styling" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "icon-[tabler--rss]", label: "RSS" },
  {
    href: "https://twitter.com/astrodotbuild",
    icon: "icon-[tabler--brand-twitter]",
    label: "Twitter",
  },
  {
    href: "https://github.com/ouranoshong/astro-melody-starter",
    icon: "icon-[tabler--brand-github]",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
