import React from "react"

export default function Organization({ siteMetadata }) {

  return (
    <script type="application/ld+json">
      {JSON.stringify(
        {
          "@context": "https://schema.org/",
          "@type": "LegalService",
          "name": siteMetadata.title,
          "description": siteMetadata.description,
          "image": siteMetadata.image,
          "url": siteMetadata.siteUrl,
          "telephone": [
            "+48 42 636 04 30",
            "+48 42 633 10 88",
            "+48 42 208 06 37"
          ],
          "email": "sekretariat@nowakowski-kancelaria.pl",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Narutowicza 44/18",
            "addressLocality": "Łódź",
            "postalCode": "90-135",
            "addressCountry": "PL"
          },
          "openingHours": [
            "Mo-Fr 08:00-20:00",
            "Sa-Su Closed"
          ],
          // "hasMap": "https://www.google.com/maps/place/123+Main+St,+Anytown,+CA+12345",
          // "sameAs": [
          //   "https://www.facebook.com/smithjoneslaw",
          //   "https://twitter.com/smithjoneslaw",
          //   "https://www.linkedin.com/company/smith-jones-law-firm"
          // ]
        }
      )}
    </script>
  )
}