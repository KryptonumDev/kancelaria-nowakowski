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
            "+48 600 500 697",
            "+48 733 203 210"
          ],
          "email": [
            "kancelaria@kancelaria-nowakowski.com"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Żeromskiego 8/4",
            "addressLocality": "Łask",
            "postalCode": "98-100",
            "addressCountry": "PL"
          },
          "openingHours": [
            "Mo-Tu 09:00-19:00",
            "We-Th 09:00-17:00",
            "Fr 08:00-16:00",
            "Sa-Su Closed"
          ],
          "hasMap": "https://www.google.com/maps/place/Kancelaria+Adwokacka.+Adwokat+Piotr+Nowakowski/@51.5934948,19.127799,17z/data=!4m6!3m5!1s0x471a45d492e9abdb:0x201d0e4801bcde8b!8m2!3d51.5934948!4d19.1321764!16s%2Fg%2F11fp8kn70b",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100046139240389&locale=pl_PL",
            "https://www.linkedin.com/in/piotr-nowakowski-7832b422a/",
            "https://www.linkedin.com/in/dr-dominika-sujka-kujawiak-077b1b189/"
          ]
        }
      )}
    </script>
  )
}