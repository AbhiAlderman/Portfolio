// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Abhi Alderman";
export const SITE_TITLE = "Abhi Alderman";
export const LIGHT_THEME = 'dark';
export const DARK_THEME = 'silk';

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/projects/core-concepts-concepts-why-astro/", title: "Astro" },
  { href: "/projects/assets-guides-styling/", title: "Styling" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/AbhiAlderman_Resume.pdf", icon: "icon-[tabler--file-cv]", label: "RSS" },
  {
    href: "https://www.linkedin.com/in/abhialderman/",
    icon: "icon-[tabler--brand-linkedin]",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AbhiAlderman",
    icon: "icon-[tabler--brand-github]",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
