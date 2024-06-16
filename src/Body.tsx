import React from 'react';

import { Header } from './Header';
import { Manifest } from './Manifest';
import { Email } from './Email';

export const Body = () => {
    return (
        <>
            <Header />
            <section className="my-4">
                <Manifest />
            </section>
            <section id="email">
                <Email />
            </section>
            <footer className="text-right text-sm mt-4">
                Contact: <a href="mailto:admin@bdx.town">admin@bdx.town</a>
            </footer>
            </>
    );
}