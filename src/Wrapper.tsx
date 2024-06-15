import React from 'react';
import { StyleMeta } from '@bdxtown/canaille';
import { Header } from './Header';

export const Wrapper = () => {
    return (
            <html>
                <head>
                    <link rel="icon" type="image/png" href="favicon.png" />
                    <title>A propos de bdx.town</title>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="index.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="lang" content="fr-FR" />

                    <meta property="og:title" content="A propos de bdx.town" />
                    <meta property="og:description" content="Informations pratiques sur les services proposés par bdx.town" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://about.bdx.town" />
                    <meta property="og:image" content="https://about.bdx.town/favicon.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <style dangerouslySetInnerHTML={{__html: `${StyleMeta.getServerSideStyle()}\n\n${StyleMeta.dynamicSheet.style.join('\n\n')}`.replace(/@layer components/g, '@layer t')}} />
                </head>
                <body className="mx-auto max-w-[800px] p-3">
                    <Header />
                    <hr />
                    <section className="my-4">
                        <h1 className="text-2xl mb-2">Services proposés</h1>
                        <ul>
                            <li>
                                <a target="_blank" href="https://bdx.town">
                                    Fédiverse 
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://plume.bdx.town">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#email">
                                    E-mail
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section id="email">
                        <h2 className="text-xl mb-2"><img className="w-[25px] inline align-middle" src="mail-icon.jpg" /> E-mail</h2>
                        <div className="flex items-end gap-2 my-3 flex-wrap">
                            <div className="flex-1 min-w-[300px]">
                                <p>
                                    Service E-mail donnant accès à une messagerie en ligne <code>&lt;votre-prénom&gt;@bdx.town</code> jusqu'à <strong>100Mo</strong> de stockage par utilisateur.<br />
                                    Malgré l'espace limité, ce service de messagerie offre la possibilité de chiffrer l'ensemble des mails entrant avec votre clé publique garantissant ainsi une confidentialité maximale.<br />
                                    Si besoin, faites votre demande en ce sens.
                                </p>
                                <ol className="my-3">
                                    <li>
                                        <strong>Création</strong> - Envoyer votre demande à <a href="mailto:admin@bdx.town">admin@bdx.town</a>
                                    </li>
                                    <li>
                                        <strong>Gestion du compte (mot de passe, alias)</strong> - <a target="_blank" href="https://postfix.bdx.town/users/login.php">https://postfix.bdx.town/users/login.php</a>
                                    </li>
                                    <li>
                                        <strong>Webmail</strong> - <a target="_blank" href="https://mail.bdx.town/">https://mail.bdx.town/</a>
                                    </li>
                                </ol>
                                
                            </div>
                            <img className="w-[100px]" alt="An illustration of a little monster holding mails" aria-hidden="true" src="mail.jpg" />
                        </div>
                        <div className="my-3">
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
                                    <strong>Nom d'utilisateur</strong> <code>&lt;votre e-mail&gt;</code>
                                </li>
                                <li>
                                    <strong>Mot de passe</strong> <code>&lt;votre mot de passe&gt;</code>
                                </li>
                            </ul>
                        </div>
                        <div className="my-3">
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
                                    <strong>Nom d'utilisateur</strong> <code>&lt;votre e-mail&gt;</code>
                                </li>
                                <li>
                                    <strong>Mot de passe</strong> <code>&lt;votre mot de passe&gt;</code>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <footer className="text-right text-sm">
                        Contact: <a href="mailto:admin@bdx.town">admin@bdx.town</a>
                    </footer>
                </body>
            </html>
    )
}