import { createGlobalStyle } from "styled-components";

export const GlobaStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: TheOwl;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`
