import 'normalize.css';
import { css } from '@emotion/react';

export const globalStyles = css`
    /* Reset CSS */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        background-color: #fff;
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }
`;
