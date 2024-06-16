import React from "react";
import { Body } from "./Body";

export const Wrapper = () => {
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" href="logo.svg" />
        <title>A propos de bdx.town</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="index.scss" />
        <link rel="stylesheet" href="ssr.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="lang" content="fr-FR" />

        <meta property="og:title" content="A propos de bdx.town" />
        <meta
          property="og:description"
          content="Informations pratiques sur les services proposés par bdx.town"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://about.bdx.town" />
        <meta
          property="og:image"
          content="https://about.bdx.town/favicon.png"
        />
        <meta property="og:locale" content="fr_FR" />
      </head>
      <body className="mx-auto max-w-[800px] p-3 bg-additional-primary">
        <Body />
      </body>
    </html>
  );
};
