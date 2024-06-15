import React from 'react';
import ReactDOM from 'react-dom/server';
import { PurgeCSS } from 'purgecss';
import createCleanCss from 'clean-css';

import { Wrapper } from './src/Wrapper';
import { StyleMeta } from '@bdxtown/canaille';

const cleancss = new createCleanCss();



async function generate() {
    const markup = `
<!DOCTYPE html>
${ReactDOM.renderToStaticMarkup(React.createElement(Wrapper))}
    `;

    const css = StyleMeta.getServerSideStyle();

    const output = await new PurgeCSS().purge({
        content: [
          {
            raw: markup,
            extension: 'html'
          },
        ],
        css: [
          {
            raw: css
          }
        ]
    })
    console.log(markup.replace("CANAILLE_STYLE_HERE", cleancss.minify(output[0].css).styles).replace(/@layer components/g, '@layer cmps'))
}

generate();
