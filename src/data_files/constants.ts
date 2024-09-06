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
    "@type": "HealthClub",
    "@id": "https://crossfitxela.com",
    url: "https://crossfitxela.com",
    name: "CrossFit Xela",
    description:
      "Únete a CrossFit Xela, el único gimnasio afiliado a CrossFit en Quetzaltenango con coaches certificados y más de 8 años de experiencia. Disfruta de entrenamientos de alta intensidad para todos los niveles. ¡Comienza tu viaje fitness con nosotros hoy mismo!",
    image: "https://crossfitxela.com/icon.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11 calle D 1-45 zona 8",
      addressLocality: "Quetzaltenango",
      addressRegion: "Quetzaltenango",
      postalCode: "09001",
      addressCountry: "GT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "14.86361",
      longitude: "-91.52524",
    },
    telephone: "+502-7725-8352",
    openingHours: "Mo-Fr 05:00-20:30, Sa 07:30-12:30",
    sameAs: [
      "https://www.facebook.com/crossfitxela",
      "https://www.instagram.com/crossfitxela",
    ],
    priceRange: "$",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+502-7725-8352",
      contactType: "Customer Service",
      areaServed: "GT",
      availableLanguage: [
        {
          "@type": "Language",
          name: "Spanish",
          alternateName: "es",
        },
        {
          "@type": "Language",
          name: "English",
          alternateName: "en",
        },
      ],
    },
    logo: {
      "@type": "ImageObject",
      url: "https://crossfitxela.com/icon.png",
      width: 500,
      height: 500,
    },
  },
};

export const OG = {
  locale: "es-GT",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : CrossFit Xela`,
  description:
    "CrossFit Xela es el único gimnasio afiliado a CrossFit en Quetzaltenango, Guatemala. Ofrecemos entrenamiento funcional de alta calidad con coaches certificados y más de 8 años de experiencia ayudando a nuestra comunidad a alcanzar sus metas de fitness. Descubre nuestra oferta de clases y únete a una comunidad apasionada por el bienestar.",
  image: ogImageSrc,
};
