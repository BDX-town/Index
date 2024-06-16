import React from "react";

import { IconMail } from "@tabler/icons-react";

export const Email = () => {
  return (
    <>
      <h2 className="flex gap-1 items-center mb-0">
        <IconMail aria-hidden /> E-mail
      </h2>
      <div className="flex items-end gap-2 flex-wrap">
        <p>
          Service E-mail donnant accès à une messagerie en ligne{" "}
          <code>&lt;votre-prénom&gt;@bdx.town</code> jusqu'à{" "}
          <strong>100Mo</strong> de stockage par utilisateur.
          <br />
          Malgré l'espace limité, ce service de messagerie offre la possibilité
          de chiffrer l'ensemble des mails entrant avec votre clé publique
          garantissant ainsi une confidentialité maximale.
          <br />
          Si besoin, faites votre demande en ce sens.
        </p>
        <ol className="my-3">
          <li>
            <strong>Création</strong> - Envoyer votre demande à{" "}
            <a href="mailto:admin@bdx.town">admin@bdx.town</a>
          </li>
          <li>
            <strong>Gestion du compte (mot de passe, alias)</strong> -{" "}
            <a target="_blank" href="https://postfix.bdx.town/users/login.php">
              https://postfix.bdx.town/users/login.php
            </a>
          </li>
          <li>
            <strong>Webmail</strong> -{" "}
            <a target="_blank" href="https://mail.bdx.town/">
              https://mail.bdx.town/
            </a>
          </li>
        </ol>
      </div>
      <div className="flex items-start gap-3 flex-wrap justify-center">
        <div className="grow shrink-0">
          <h3 className="text-lg mb-2">Configuration serveur sortant</h3>
          <ul className="m-0 list-none">
            <li>
              <strong>Serveur</strong> bdx.town
            </li>
            <li>
              <strong>Port</strong> 587
            </li>
            <li>
              <strong>Sécurité</strong> STARTTLS
            </li>
            <li>
              <strong>Nom d'utilisateur</strong>{" "}
              <code>&lt;votre e-mail&gt;</code>
            </li>
            <li>
              <strong>Mot de passe</strong>{" "}
              <code>&lt;votre mot de passe&gt;</code>
            </li>
          </ul>
        </div>
        <div className="grow shrink-0">
          <h3 className="text-lg mb-2">Configuration serveur entrant</h3>
          <ul className="m-0 list-none">
            <li>
              <strong>Serveur</strong> bdx.town
            </li>
            <li>
              <strong>Port</strong> 993
            </li>
            <li>
              <strong>Sécurité</strong> SSL/TLS
            </li>
            <li>
              <strong>Nom d'utilisateur</strong>{" "}
              <code>&lt;votre e-mail&gt;</code>
            </li>
            <li>
              <strong>Mot de passe</strong>{" "}
              <code>&lt;votre mot de passe&gt;</code>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
