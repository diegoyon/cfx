import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "CrossFit Xela",
  tagline: "Transforma tu Vida, Únete a la Comunidad",
  description:
    "CrossFit Xela es el único gimnasio afiliado a CrossFit en Quetzaltenango, Guatemala. Ofrecemos entrenamiento funcional de alta calidad con coaches certificados y más de 8 años de experiencia ayudando a nuestra comunidad a alcanzar sus metas de fitness. Descubre nuestra oferta de clases y únete a una comunidad apasionada por el bienestar.",
  description_short:
    "El único gimnasio afiliado a CrossFit en Quetzaltenango, con más de 8 años de experiencia y coaches certificados.",
  url: "https://crossfitxela.com",
  author: "Diego Yon",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-GT",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es-GT",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Entrenamiento Funcional & Comunidad CrossFit`,
  description:
    "CrossFit Xela ofrece entrenamiento funcional de alta calidad en Quetzaltenango. Con más de 8 años de experiencia, coaches certificados y un ambiente comunitario, somos el lugar perfecto para transformar tu vida. ¡Únete a nuestra comunidad hoy!",
  image: ogImageSrc,
};
