import { css } from "styled-components";

const globalReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }
  :root {
    font-size: 62.5%;
  }
  body {
    font-family: var(--font-primary);
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default globalReset;
