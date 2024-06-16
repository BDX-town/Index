import React from "react";

import { IconLeaf } from "@tabler/icons-react";

export const Manifest = () => {
  return (
    <>
      <h2 className="flex gap-1 items-center">
        <IconLeaf aria-hidden /> Manifeste
      </h2>
      <div>
        <p>
          <strong>
            <a href="http://BDX.town">Bdx.town</a>
          </strong>{" "}
          est un <strong>lieu d’échange et de partage</strong> basé sur la
          région Bordelaise.{" "}
        </p>
        <p>
          Nous souhaitons, en adéquation avec nos valeurs écologiques et
          sociales,{" "}
          <strong>contribuer à remettre le local au cœur de nos usages,</strong>{" "}
          y compris sur internet, dans une démarche de sobriété 🍃
        </p>
        <p>
          Nous avons l’ambition de sortir du modèle de surconsommation que l’on
          nous vend comme le seul possible. Nous voulons sortir du mythe de la
          croissance infinie dans un monde fini, aux ressources limitées. Nous
          voulons changer le système capitaliste, qui génère toujours plus
          d’injustice, d’inégalités et de dégâts (sociaux comme
          environnementaux)
        </p>
        <p>
          Nous croyons donc en la <strong>décentralisation</strong>, l’action
          (voire la désobéissance) civile, et la &nbsp;
          <strong>justice sociale</strong>. En effet, il est clairement établi
          que{" "}
          <strong>les inégalités économiques, sociales et écologiques</strong>{" "}
          sont inséparables.
        </p>
        <p>
          Nous souhaitons que{" "}
          <strong>les citoyens aient plus de pouvoir</strong> sur les questions
          de la vie publique (bref plus de pouvoir politique).{" "}
        </p>
        <p>
          Notre site a donc à cœur de mettre en avant{" "}
          <strong>
            les initiative issues de la vie associative ou culturelle
          </strong>{" "}
          de Bordeaux et ses alentours, n’hésitez pas à partager l’actualité
          évènementielle locale 😊
        </p>
        <p>
          Mieux que consommateurs, soyons humains.
          <strong>Faisons bouger les choses ensemble.</strong> ✊
        </p>
      </div>
    </>
  );
};
