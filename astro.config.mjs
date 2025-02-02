import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://crossfitxela.com",
  // image: {
  //   domains: ["images.unsplash.com"],
  // },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        // All urls that don't contain `fr` after `https://crossfitxela.com/` will be treated as default locale, i.e. `en`
        locales: {
          es: "es",
          // The `defaultLocale` value must present in `locales` keys
          en: "en",
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    partytown(),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
