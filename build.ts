import React from 'react';
import ReactDOM from 'react-dom/server';

import { Wrapper } from './src/Wrapper';

const markup = `
    <!DOCTYPE html>
    ${ReactDOM.renderToStaticMarkup(React.createElement(Wrapper))}
`;

console.log(markup);
