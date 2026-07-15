import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL || 'https://bredaacciosolidaria.github.io';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  image: {
    responsiveStyles: true,
  },
});
